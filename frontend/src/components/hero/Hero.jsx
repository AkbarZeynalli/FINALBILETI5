import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'></div>
        <div className='hero-right'>
            <p className='herop1'>60% Discount</p>
            <h1>Winter <br /> Collection</h1>
            <p className='hero-text'>Best Cloth Collection By 2020!</p>
            <button className='btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Hero