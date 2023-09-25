import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tolq from '../assets/clay-macbook-pro-15-with-touch-bar-front-view-mockup 1.png'
import kepeer from '../assets/Free Clay iPad Pro PSD Mockup copy 1.png'
import labs from '../assets/Free Clay iPad Pro PSD Mockup copy 2.png'
import legal from '../assets/clay-macbook-pro-15-with-touch-bar-front-view-mockup 3.png'
import fing from '../assets/Untitled_Artwork 12 1.png'
import '../style/WorkStyles.css'

const Works = () => {
  return (
    <>
    <div id='worksPage'>
        <h1 className='worksTitle'>Our Works</h1>
        <Row className='g-4 allCards'>
            <Col md={12} lg={6}>
                <Card className='card'>
                <Card.Body>
                    <Card.Title className='tolq'>Tolq</Card.Title>
                    <Card.Text className='cardText'>
                    Tolq is the translation solution built for e-commerce. <br /> It provides all pieces of the localization puzzle in one <br /> single integrated solution.
                    </Card.Text>
                    <Card.Img variant="top" src={tolq} className='Img'/>
                    <Button className='moreBut d-block m-auto' variant="outline-success">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={12} lg={6}>
                <Card>
                <Card.Body>
                    <Card.Title className='Feedback'>Feedback Labs</Card.Title>
                    <Card.Text className='cardText'>
                    Feedback Labs turns feedback into actionable insights <br /> for your team.
                    </Card.Text>
                    <Card.Img variant="top" src={labs} className='Img' />
                    <Button className='moreBut d-block m-auto' variant="outline-success">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={12} lg={6}>
                <Card>
                <Card.Body>
                    <Card.Title className='Codekeeper'>Codekeeper</Card.Title>
                    <Card.Text className='cardText'>
                    Codekeeper is an all-in-one solution for software <br /> developers and publishers to provide source code escrow <br /> as part of service level and license agreements.
                    </Card.Text>
                    <Card.Img variant="top" src={kepeer} className='Img' />
                    <Button className='moreBut d-block m-auto' variant="outline-success">More</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col md={12} lg={6}>
                <Card>
                <Card.Body>
                    <Card.Title className='LegalSite'>LegalSite</Card.Title>
                    <Card.Text className='cardText'>
                    Protected against legal risks, privacy compliant and <br /> always up-to-date with the latest regulatory <br /> developments.
                    </Card.Text>
                    <Card.Img variant="top" src={legal} className='Img' />
                    <Button className='moreBut d-block m-auto' variant="outline-success">More</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <div className='startAllText'> 
            <div className='d-flex startupsFingText'>                
                <h2 className='startupsText d-flex flex-wrap'><img src={fing} alt="" className='leftFing' />Startups create a world that actually is better. <br /> Any problem that can be solved, will be solved <br /> by a startup, and that is a huge opportunity.<img src={fing} alt="" className='rightFing'/></h2>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Works