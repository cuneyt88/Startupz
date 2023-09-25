import React from 'react'
import logo from '../assets/Group 15.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nav from '../assets/Untitled_Artwork 7 1.png'
import '../style/NavStyles.css'

const Navbars = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white nav">
        <Container fluid className='insideNav'>
          <Navbar.Brand href="#">
            <img src={logo} className='logo' alt="logo" />
          </Navbar.Brand>
          <Navbar id="navbarScroll" className='all'>
            <Nav className="links">
              <Nav.Link className='startbut' href="#about">Startups</Nav.Link>
              <Nav.Link href="#contactPage">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button href='#hiringPage' className='workBut' variant="outline-success">Work with us!</Button>
            </Form>
          </Navbar>
        </Container>
      </Navbar>
        <Row className='d-flex navbot flex-wrap'>
          <Col>
            <h1 className='headText'>We Create <br/> Startups.</h1>
            <p className='secondText'>We are startup studio that develops and launches new companies.</p>
            <Button href='#worksPage' className='seeWork' variant="outline-success">See our Works</Button>
          </Col>
          <Col className='imageDiv'>
            <img className='startImage' src={nav} alt=""/>
          </Col>
        </Row>
    </>
  )
}

export default Navbars