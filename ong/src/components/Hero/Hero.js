import React from 'react'
import './Hero.css';
import './HeroText.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='video-text'>
        <div className='video-hero'>
          <video src='/videos/video2.mp4' autoPlay loop muted></video>
        </div>
        <div className='hero-text-container'>
          <div className='hero-text'>
            <h1>Vision for the future</h1>
            <button className='btn'>Show more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
