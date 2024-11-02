import React from 'react'
import rectImage from '../images/Rectangle 80.png'
import logo from '../images/Logo.png'
import vector from '../images/Vector 1.png'

export default function Footer() {
    return (
        <div style={{
            position: 'relative',
            backgroundImage: `url(${rectImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            padding: '50px 0',
            paddingInline: '150px'
        }}>
            {/* Vector image positioned on top left with increased size */}
            <img src={vector} alt="Vector" style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '250px', // Adjusted the size to make it larger
                height: 'auto'
            }} />

            <div className="container d-flex justify-content-between" style={{ marginTop: '75px', marginBottom: '50px' }}>
                <div className="left-section">
                    <img src={logo} alt="Logo" />
                    <p className='foot-text' style={{ marginTop: '30' }}>© 2022 Toofan Pest Control.  All Rights Reserved.</p>
                </div>

                <div className='middle-section'>
                    <p className='mx-3 foot-text mb-3'>Talk to us about pest control for <br /> your home or business</p>
                    <div className="details mt-4">
                        <div className='d-flex  mx-3 contact-img'>
                            <i className="bi bi-person-rolodex"></i>
                            <p className='footer-para mx-3'>03-1234567</p>
                        </div >
                        <div className='d-flex mx-3 contact-img'>
                            <i className="bi bi-envelope"></i>
                            <p className='footer-para mx-3'>info@gmail.com</p>
                        </div>
                        <div className='d-flex mx-3 contact-img'>
                            <i className="bi bi-compass"></i>
                            <p className='footer-para mx-3'>location</p>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <p className='foot-text'>or</p>
                    <button className='get-quote-btn mb-5'>GET A QUOTE</button>
                    <h4 style={{ fontSize: '15px' }} className='foot-text'>Find Us On</h4>
                    <div className="d-flex mt-3 social-media-img">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram mx-3"></i>
                        <i className="bi bi-linkedin mx-3"></i>
                        <i className="bi bi-youtube mx-3"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
