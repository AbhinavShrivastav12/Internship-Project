import React from 'react';
import logo from '../images/Logo.png';
import phone from '../images/Group 5.png';

export default function Navbar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img className='logo' src={logo} alt="Logo" />
                </a>

                <ul className="nav col-md-auto mb-2 mb-md-0 d-flex justify-content-center gap-3" style={{width:'471px',height:'20px',top:"60px",left:'490px'}}>
                    <li><a href="#" className="nav-link px-2 link-secondary"><b>Home</b></a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Services</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">About Us</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Contact</a></li>
                </ul>

                <div className="col-md-3 d-flex justify-content-end align-items-center">
                    <img src={phone} alt="Phone" className='phone mx-4' />
                    <button type="button" className="btn btn-danger btn-sm">FAST QUOTE</button>
                </div>
            </header>
        </div>
        
    );
}
