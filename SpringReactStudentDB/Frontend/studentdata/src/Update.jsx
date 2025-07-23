// import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Update.css' ;
import { Form , Row , Col , Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { StdbyID, UpdateStd } from './API';



export default function Update() {
    const [data , setData] = useState({
        'id' : '' , 
        'email' : '' ,
        'name' : '' , 
        'phone' : '',
        'image' : '' 

    })
    // const [email , setEmail] = useState() ;
    // const [ID , setID] = useState() ;
    // const [name , setName] = useState() ;
    // const [phone , setPhone] = useState() ;    

    let id = useLocation().pathname.split('/').at(2)
    const ApiD = async () => {
       

    
        try {
            const d = await StdbyID(id) ;
            if (d.status === 200) {
                // setEmail(d.data.email) ;
                // setID(d.data.id) ;
                // setName(d.data.name) ;
                // setPhone(d.data.phone) ;
              setData(d.data)
                console.log(d.data)
            }
            else {console.log(d.status)}
 
      }
        catch (error) {
            console.log(error)
        }

        
    }
     useEffect (()=> {
        ApiD () ;
    },
[])


const DataIn = (event) => {

    let key = event.target.name ;
    let value = event.target.value ;
    if (key === 'image') {
        setData(prevData => ({ ...prevData , 
            [key] : event.target.files[0] 
        }))
   }

   else {
setData(prevData => ({ ...prevData , 
            [key] : value
        }))
   }

    
        
    
   

}

const OC = async(id , data) => {
       
       
    const formdata = new FormData() ;
    formdata.append('name' , data.name) ;
    formdata.append('phone' , data.phone) ;
    formdata.append('email' , data.email) ;
    formdata.append('image' , data.image) ;
    // formdata.append('id' , data.id)

   
    try {  const UpdateD = await UpdateStd(id , formdata) ;
        if (UpdateD.status ===202) {
            alert('Updated ! ')
        }
        else {
            console.log(UpdateD.status)
        }

    }
    catch (error) {console.log(error)}
    
}

  return (
    <>  
        <div className='first'>
            <h3> Update Student Info</h3>
            <Form className='form'>
                
                <Row> 
                    <Col>
                          <Form.Control readOnly value={data.id} name='id' className='textBox'/>
                    </Col>
                    <Col>
                        <Form.Control onChange={(event)=>DataIn(event)}  value={data.name} placeholder="Name"  className='textBox' name='name' required/>
                    </Col>
                    
                </Row>
                <Row> 
                    <Col>
                        <Form.Control onChange={(event)=>DataIn(event)} value={data.phone} placeholder="Phone number" type='number' name='phone'  className='textBox' required/>
                    </Col>
                    <Col>
                        <Form.Control onChange={(event)=>DataIn(event)} value = {data.email} placeholder="Email" type='email' name='email' className='textBox' required />
                    </Col>
                </Row>
                <Row>
                    <input name='image' type='file' className='textBox' onChange={(event)=> DataIn(event)}/>

                </Row>
                
                <Row> <Link to={'/'} className='button'>
                    <Button onClick={()=>OC(data.id , data)}  >
                               Update Data 
                     </Button> </Link>
                </Row>


            </Form>
        </div>
    </>
  )
}
