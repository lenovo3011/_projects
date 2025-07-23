import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap' ;
import animation from './Animation - 1751713841527.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import './MyCard.css'



function MyCard({data ,dlt}) {
  const check = Array.isArray(data) ;
  // console.log(check)
  return (<> {(check) ?  <Row xs ={1} sm ={2} md ={3} lg ={4} className= 'g-4'>
     
      { data.map ((v, i)=> {return ( <Col key={i}>
            
        <Card
          className='card-design'>
          <Card.Header className='header'>{v.id}</Card.Header>
          <Card.Body><Col> 
            <Card.Title> {v.name}  </Card.Title>
            <Card.Text>
     {v.phone} <br/> {v.email}
            </Card.Text>
            
            <button onClick={()=> dlt(v.id)}>Delete</button>
            <button><Link to={`update/${v.id}`}>Update </Link> </button></Col>
            <img className='picture' src={`http://localhost:8080/student/img/${v.id}`} width={'100px'} height={'125px'} alt='student_picture' style={{ borderRadius: '8px', objectFit: 'cover' }}/>
          </Card.Body>

        
        
          
        </Card> </Col> )}) }
      
      
     
         
       </Row>  : <Lottie style={{height : '700px' , width : '700px' , margin : 'auto' }} animationData={animation} loop={true} /> }
    
      
    </>
  );
}

export default MyCard; 