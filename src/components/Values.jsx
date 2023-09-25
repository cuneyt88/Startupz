import React from 'react'
import lamb from '../assets/Untitled_Artwork 2.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/ValueStyles.css'

const Values = () => {
  return (
    <>
        <Container fluid className='values'>
            <Row className='d-flex valuesDiv'>
                <Col sm={12} md={9}>
                    <h2 className='valuesHeadText'>Our core values</h2>
                </Col>
                <Col sm={12} md={3}>
                    <img src={lamb} alt="lamb" className='d-flex lamb'/>
                </Col>
                
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <div>
                        <p className='numberText'>01. Innovation</p>
                        <hr />
                        <p className='underText'>Startupz operates where entrepreneurship <br /> and technology intersect. We design solutions <br /> and turn them into businesses models.</p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div>
                        <p className='numberText'>02. People</p>
                        <hr />
                        <p className='underText'>Talent is what enable us <br /> to create great <br /> companies.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Values