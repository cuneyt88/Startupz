import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/ContactStyles.css'
import rocket from '../assets/Subtract.svg'

const Contact = () => {
  return (
    <div id='contactPage' className='body'>
      <div className='formAllDiv'>
        <div className='formTextDiv'>
          <h1 className='formHead'>Are you ready <br /> to board this rocket ship?</h1>
          <p className='formText'>Share your excitement with us.</p>
        </div>
        <div className='cardAndRocket d-flex flex-wrap'>
          <div>
            <Form className='formCard'>
              <Form.Group className="inputGroup" controlId="exampleForm.ControlInput1">
                <Form.Control className='input' type="text" placeholder="Name*" />
              </Form.Group>
              <Form.Group className="inputGroup" controlId="exampleForm.ControlInput1">
                <Form.Control className='input' type="email" placeholder="Email*" />
              </Form.Group>
              <Form.Group className="inputGroup" controlId="exampleForm.ControlTextarea1">
                <Form.Control className='messageInput' as="textarea" rows={3}  placeholder="Message*"/>
              </Form.Group>
              <Button className='messageBut' variant="outline-success">Shoot us a message</Button>
            </Form>
          </div>
            <div className='d-flex rocketDiv'>
              <img className='rocket' src={rocket} alt="rocket" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact