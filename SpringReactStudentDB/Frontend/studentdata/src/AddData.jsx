import React, { useState } from 'react'
import  './Update.css' ;
import { Row , Form , Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AddStd } from './API';

export default function AddData() {
    let [data , setData] = useState({
        'name' : '' ,
        'phone' : '',
        'email' : '', 
        'image' : ''
    }) ;

const onHandle = (event) => {
    let key = event.target.name ;
    let value = event.target.value ;

    if (key === 'image') {
        console.log("File "+event.target.files[0])
        setData(prevData => ({
            ...prevData , 
            [key] : event.target.files[0] 
        }))
    }
    else {
        setData(prevData => ( {
        ...prevData , 
        [key] : value 
    }))

    

    }

    

}



const CallAPI = async() => {
    const formData = new FormData() ;
formData.append('name' , data.name) ;
formData.append('phone' , data.phone) ;
formData.append('email' , data.email) ;
formData.append('image' , data.image) ;

    try {const req = await AddStd(formData) ;
        if (req.status === 200) {
            console.log('Saved ! ')
        }

        else {
            console.log(req.status)} }

    
    catch (error) {
console.log (error)
console.log(data.image)
    }
    
    
}
  return (
    <> 
        <div className='first'>
            <h3> Add Student Info</h3>
            <Form className='form'>
                
                <Row> 
                    
                    <Col>
                        <Form.Control value={data.name} onChange={(event)=> onHandle(event)} placeholder="Name"  className='textBox' name='name' required/>
                    </Col>
                     <Col>
                        <Form.Control  value={data.phone} onChange={(event)=> onHandle(event)} placeholder="Phone number" type='number' name='phone'  className='textBox' required/>
                    </Col>
                    
                </Row>
                <Row> 
                   
                    <Col>
                        <Form.Control  value={data.email} onChange={(event)=> onHandle(event)} placeholder="Email" type='email' name='email' className='textBox' required />
                    </Col>
                    <Col>
                        <Form.Control name='image'  onChange={(event)=> onHandle(event)} type='file' placeholder='Add photo' className='textBox'/>
                    </Col>
                </Row>
                
                <Row> <Link to={'/'} className='button'>
                    <Button onClick={() => CallAPI()} >
                               Save Data 
                     </Button> </Link>
                </Row>


            </Form>
        </div>
    </>
  )
}
