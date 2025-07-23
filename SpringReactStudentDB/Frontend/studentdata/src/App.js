

// import axios from 'axios';
import './App.css';
import MyCard from './MyCard';
import load from './Animation - 17517217l61564.json'
import { useEffect, useState } from 'react';
import { DeleteStd, GetData } from './API';
import Lottie from 'lottie-react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function App() {
  const [apiData , setApiData] = useState(['']) ;
  const [Loading , setLoading] = useState(true) ;


   


  // const Apidata = async() => {
  //    const d = await axios.get('http://localhost:8080/students')
    
  //   try { if (d.status===200) {
     
  //         // console.log (d) ;
  //         setApiData(d.data) ;
  //         alert('date fetch ! ')
  //   }
  //   else {
  //     alert('wrong '+ d.status)
  //   }
  
  // }   


  //   catch (error) {
  //     alert('something went wrong ! ')
  //   }}
    


  
  //   useEffect(()=> {
  //   Apidata() ;
  // }, [])

  // Instead 
 
  
  const Apidata = async() => {
       setLoading(true) 
    try {const d = await GetData()  ;
      
        setLoading(false) ;
        setApiData(d.data) ;
      
    }
    catch (error)
 {  console.error(error) ;
   }
   
  }

  const deleteData = async (id) => {

      try {
        const res = await DeleteStd(id) ;
        if (res.status=== 200) {
          alert ('deleted ! ')
          Apidata() ;
        }

        else {alert ('id not found ')}

    }
    catch (error) {console.log(error)}
  }
   
  
  useEffect (()=> {
    Apidata() ;
    
  }, [])



 
  return (
<> <Navbar className='nav'>
   <Navbar.Brand><Link to={'/adddata'} style={{color : 'white' , textDecoration : 'none'}  }>Add new data </Link></Navbar.Brand>
</Navbar>

{ 
   
(Loading) ?(<Lottie animationData={load} loop = {true} style={{height : '500px' , width : '500px', margin : 'auto' }}/> ): ( <>
<MyCard data = {apiData} dlt = {deleteData}/> 


</>
)

}

</>
  );
}

export default App;

