import React from 'react'
import Button from 'react-bootstrap/Button';
import CloudMan from '../assets/Untitled_Artwork 6.png'
import BinocularsMan from '../assets/Untitled_Artwork 5.png'
import '../style/HiringStyles.css'

const Hiring = () => {
  return (
    <div id='hiringPage' className='d-flex hiringDiv flex-wrap'>
      <div>
        <img src={CloudMan} alt="CloudMan" className='CloudMan' />
      </div>
      <div>
        <h1 className='hiringHead'>We are hiring!</h1>
        <p className='hiringText'>We're always looking for talented people <br /> to join and help build our startups. <br /> Check out our current openings</p>
        <Button className='seeOpen' variant="outline-success">See current openings</Button>
      </div>
      <div>
       <img src={BinocularsMan} alt="BinocularsMan" className='BinocularsMan' />
      </div>
    </div>
  )
}

export default Hiring