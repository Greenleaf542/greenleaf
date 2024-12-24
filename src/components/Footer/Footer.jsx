import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-background'>
      <div className="container Second-container">
        <div>
            <h4>green leaf studio</h4>
            <ul>
                <li><p><i class='bx bx-current-location'></i>kathmandu, Nepal</p></li>
                <li><p><i class='bx bxs-phone'></i>+977 984117180</p></li>
                <li><p><i class='bx bxl-gmail' ></i>mail@greenleafstudio</p></li>
            </ul>
        </div>
        <div>
            <h3>company</h3>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h3>What We Do</h3>
            <ul>
                <li><p>website development</p></li>
                <li><p>Graphic designing</p></li>
                <li><p>Social media marketing</p></li>
                <li><p>Video Editing</p></li>
            </ul>
        </div>
        <div className='link-hover'>
            <h3>Connect With Us</h3>
            <ul>
                <li>Facebook</li>
                <li>Instgram</li>
                <li>Twitter x</li>
                <li>Linkedin</li>
                {/* location :<i class='bx bx-current-location'></i>
                phone: <i class='bx bxs-phone'></i>
                mail:<i class='bx bxl-gmail' ></i>
                facebook: <i class='bx bxl-facebook' ></i>
                instgram: <i class='bx bxl-instagram-alt' ></i>
                twitter:<i class='bx bxl-twitter' ></i>
                linkdlin:<i class='bx bxl-linkedin' ></i> */}
            </ul>
        </div>
      </div>
      <div className="last-footer-text container">
        <div className='left-side'>
            <p>Copyright © 2024, <span>Green Leaf Studio</span></p>
        </div>
        <div className="right-side">
            <p>privacy policy data policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
