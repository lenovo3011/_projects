import location from './location-pin-svgrepo-com.svg' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useState  } from 'react';
import axios from 'axios';
import { postData } from './API';
import animation from './AI assistant - Animation.json' ;
import Lottie from 'lottie-react';
function App() {

  let [formData, setFormData] = useState('') ;
  let [apiData, setAPIData] = useState () ;
  let [showCard, setshowCard] = useState(false) ;
  let [showAnimation , setShowAnimation] = useState(false) ;
  let [sumData , setSumData] = useState('')
  let [lottie , setLottie] = useState(false)
  let jsonData = {
    'name' : apiData?.location?.name , 
    'state' : apiData?.location?.region ,
    'country' : apiData?.location?.country ,
    'time' : apiData?.location?.localtime ,
    'temp' : apiData?.current?.temp_c ,
    'feeltemp' : apiData?.current?.feelslike_c ,
    'text' : apiData?.current?.condition?.text ,
    'humidity' : apiData?.current?.humidity ,
    'windSpeed' : apiData?.current?.wind_kph ,
    'windDir' : apiData?.current?.wind_dir    


  }

  let btnAI = async()=> {
    setLottie(true)
    try {
      let res = await postData(jsonData) 
      if (res.status===200) {
        setSumData(res.data) ;
        setLottie(false)

      }
    }
    catch (e) {
      console.log(e.message) ;
      toast.error("Something went wrong ! ")
      setLottie(false)
    }
    
  }

  

  let OnSubmit=async(event) => {
    setSumData('')
    event.preventDefault();
    try {
      let cName = formData ;
      let res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=your_api_key&q=${cName}&aqi=n`)
      if (res.status===200) 
        { setshowCard(true) ;
          setShowAnimation(false)
          setAPIData(res.data) ;
        }
              
    }

    catch (e) {
      // console.log(e)
      toast.error("City not found ! ")
          setshowCard(false) ;
          setShowAnimation(false)
          setAPIData() ;
          setFormData('') ;
    }
        

    // let cName = formData ;
    // fetch(`https://api.weatherapi.com/v1/current.json?key=4a337b7a3a3549a785d174314250107&q=${cName}&aqi=n`)
    // .then(res => {
    //   if (!res.ok) {throw new Error ()}
    //     else { return res.json()}
      
    // } )
    // .then(FinalResponse => {
    //   setAPIData([FinalResponse])
    //   setshowCard(true) ; 
    // })
     
    //  .catch(() => {toast.error('City not found ! ')
    //   setshowCard(false)
    //   setAPIData([])
                    

    //  })


  }
      // useEffect(()=>{} , [OnSubmit])

 
  
  return (
    
   <> 
   

    <ToastContainer/>
      <div className='main'>
        <h1>Know your city weather</h1>
        <form onSubmit={OnSubmit}>
          <label>Enter your city </label> <br/>  <img src={location} alt ='location'/>
          <input type='text' value={formData} name='cName' onChange={(event)=>setFormData(event.target.value)}/>  <span/> <br/> 
          <button>{(showAnimation) ? 'Fetching data ...' : 'Get Data'}</button>
         
        </form>
        </div>
        {(showCard) ?
        <div className='data'>
          {/* {apiData.map((v, i)=> {return ( */}
            <>
            <div className='time'>
            <p>Last updated on : {apiData?.current?.last_updated} </p>
          </div>
          <div className='text'>
            <img src={location} alt ='location'/>
            <h1>{apiData?.location?.name}</h1> 
            <p>{apiData?.location?.region}</p> 
            <p>{apiData?.location?.country}</p> 
            
          </div>
          
          <p>Local Time : {apiData?.location?.localtime}</p>

          <div className='temp'>
            <p>{apiData?.current?.temp_c}<sup>°C</sup></p>

          </div>
          {/* <img src = {`https://cdn.weatherapi.com/weather/64x64/day/${apiData.current.condition.icon}.png`} alt = 'weather' /> */}

          <img src = {`${apiData?.current?.condition?.icon}`} alt = 'weather' />
          <figcaption>{apiData?.current?.condition?.text}</figcaption>
          <button onClick={btnAI} className='ai'>📄➡️📋Summarize with AI</button>
          {(lottie) ? <Lottie animationData={animation} className='lottie'></Lottie> : <p className= {(sumData.length>0) ? 'aipara' : ''} >
            {sumData}
          </p> }
          
          
          
          
          </>
         
          
                    

        </div>  : ''}
        <p className='co'>© Raj Shantaram Parsharam</p>
    
     
   </>
  );
 
}

export default App;
