import React from 'react'
import logo from '../assets/Group 15.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/FooterStyles.css'
import twit from '../assets/twitter.svg'
import linkedin from '../assets/Linkedin.svg'
import insta from '../assets/instagram.svg'



const Footer = () => {
  return (
    <Row className='d-flex flex-col border-t topDiv space-between'>
            <Col sm={12} md={6} lg={3} className='flex-col justify-start items-start'>
                <img src={logo} alt='logo' width={118} height={18} className='footLogo'/>
                <div className=' justify-between items-center flex-wrap border-t reserveText'>
                    <p>@2020 Startupz.</p>
                    <p>All Rights Reserved</p>
                </div>
            </Col>
                    <Col sm={12} md={6} lg={3} className='company__link'>
                        <div>
                            <h1 id='comp' className='footerHead'>Companies</h1>
                        </div>
                        <div className='footerText'>
                            <ul>
                                <li><a href='/' id='tolq'>Tolq</a></li>
                                <li><a href='/' id='legalSite'>LegalSite</a></li>
                                <li><a href='/' id='codekeeper'>Codekeeper</a></li>
                                <li><a href='/' id='feedbackLabs'>Feedback Labs</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='contact__link'>
                        <div>
                            <h1 className='footerHead'>Contact</h1>
                        </div>
                        <div>
                            <p className='address'>World Trade Center - The Hague Prinses Margrietplantsoen 33 <br /> 2595 AM The Hague <br /> The Netherlands</p>
                            <a href='/' id='email' className='footerText'>Send us an email</a>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='follow__link'>
                        <div>
                            <h1 className='footerHead'>Follow Us</h1>
                        </div>
                        <div className='social'>
                            <a target="blank" href="https://twitter.com/startupzcom"><img src={twit} alt="twit" /></a> 
                            <a target="blank" href="https://www.linkedin.com/company/startupz.com/"><img className='linkedin' src={linkedin} alt="linkedin" /></a> 
                            <a target="blank" href="https://www.instagram.com/startupzcom/"><img src={insta} alt="insta" /></a> 
                        </div>
                    </Col>  
    </Row>
  )
}

export default Footer