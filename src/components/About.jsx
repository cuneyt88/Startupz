import React from 'react'
import qmark from '../assets/Untitled_Artwork -1.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fing from '../assets/Untitled_Artwork 12 1.png'
import person from '../assets/Untitled_Artwork 7 2.png'
import '../style/AboutStyles.css'

const About = () => {
  return (
    <>
        <Container id='about' fluid className='aboutCon'>
            <Row className='d-flex whoRow'>
                <Col sm={12} md={9} className='textDiv'>
                    <h2 className='aboutHeadText'>Who we are</h2>
                    <p className='aboutSecondText'>We create products that have innovation and technology at their core. <br /> We value working with talented people that understand the possibilities of today.</p>
                </Col>
                <Col sm={12} md={3}>
                    <img src={qmark} alt="questionMark" className='d-flex qmark'/>
                </Col>
            </Row>
            <Row className='allParts'>
                <Col sm={12} md={4}>
                    <div className='parts'>
                        <p className='numbers'>01</p>
                        <hr />
                        <p className='underText'>We develop innovative <br /> products, systems and <br /> services</p>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='parts'>
                        <p className='numbers'>02</p>
                        <hr />
                        <p className='underText'>Next we build teams to <br /> scale them into <br /> companies</p>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className='parts'>
                        <p className='numbers'>03</p>
                        <hr />
                        <p className='underText'>Each startup solving <br /> one problem <br /> at a time</p>
                    </div>
                </Col>
            </Row>
        </Container>

        <div className='solvinProb d-flex'>
            <div className='d-flex virtualAndX'>
                <div className='rectangle'>
                    <p className='virtualText'>Hi! I am Ben, your virtual assistant. How can I make your day better?</p>
                </div>
                <div>
                <p className='x'>X</p>
                </div>
            </div>
            <div className='d-flex solAndFing'>
                <h2 className='solText'><img src={fing} className='fingLeft' alt="fing"/>We love solving problems!<img src={fing} className='fingRight' alt="" /></h2>
                <div className='fingerPerson'>
                    <div className='finergpad'>
                        <img src={person} alt="fingerPerson"  className='personImg'/>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default About