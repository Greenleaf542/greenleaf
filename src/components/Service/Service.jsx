import React from 'react'
import './Service.css'
import graphic from '../../img/Graphic.jpg'
import market from '../../img/Digital.jpg'
import leaf from '../../img/leaf.webp'

function Service() {
  return (
    <div className="service container">
        <h1 className='heading'><img src={leaf} alt="" /> Our <span>Service</span></h1>
        <p>We code, your imagination</p>
        <div className="service-box">
            <div className="box">
                <img src={graphic} alt="" />
                <div className="box-bg">
                    <h3>WEBSITE DEVELOPMENT</h3>
                </div>
                </div>
            <div className="box">
                <img src={graphic} alt="" />
                <div className="box-bg1">
                    <h3>GRAPHIC DESIGN</h3>
                </div>
                </div>
            <div className="box">
                <img src={market} alt="" />
                <div className="box-bg2">
                    <h3>DIGITAL MARKETING</h3>
                </div>
            </div>
        </div>
        <div className="btn1">View More &nbsp; <i class='bx bx-right-arrow-circle' ></i></div>
    </div>

  )
}

export default Service
