import React from 'react';
import phone from '../images/Group 5.png';
import rectangleBG from '../images/flies-bg-image.jpg';

export default function Services2() {
    return (
        <div
            style={{
                backgroundImage: `url(${rectangleBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                padding: '90px 0'
            }}
        >

            <div className="container">
                <div className="px-4 py-5 my-5 text-center">
                    <h1 style={{ fontSize: '35px', fontWeight: 'bold' }} className="display-5">WE'RE NOT HAPPY UNLESS YOU'RE</h1>
                    <div className="col-lg-6 mx-auto">
                        <p style={{ color: '#606762', fontSize: '19px', letterSpacing: '1px' }} className="lead mb-4 text-muted mt-3">
                            Talk to us about pest control for your <br /> home or business
                        </p>
                        <div>
                            <img style={{ width: '130px' }} src={phone} alt="Phone Icon" />
                        </div>
                        <p style={{ color: '#606762', fontSize: '19px', letterSpacing: '1px' }} className='mt-3 mb-3'>or</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-danger btn-lg px-4">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
