import React from 'react'
import rectangleImage from '../images/Rectangle 71.png'

export default function AboutUs() {
    return (
        <>
            <div style={{
                position: 'relative',
                backgroundImage: `url(${rectangleImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                padding: '30px 0',
            }}>
                <div className="container">
                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold" style={{ fontSize: '3rem', letterSpacing: '0.1em' }}>TOOFAN PEST CONTROL</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4 text-muted fs-6 lh-lg mt-4">Toofan Pest Control uses only the most up to date and modern methods of the Pest control - all regiestered for the use in school, hospitals and nursing homes as well as environmentally safe for you, your family and pets.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-danger btn-lg px-4 gap-3">About us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
