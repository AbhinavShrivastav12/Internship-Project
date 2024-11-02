import React from 'react'
import '../images/male-janitor-mopping-corridor-young-african-cleaning-floor-57190720.webp'



export default function FAQ() {
    return (
        <div className="container d-flex justify-content-around" style={{ marginTop: '150px', marginBottom: '150px' }}>
            <div className="left-section">
                <h2 className='mb-4' style={{ fontSize: '35px', fontWeight: 'bold' }}>FREQUENTLY ASKED <br /> QUESTIONS</h2>
                <p className='text-muted mb-4' style={{ color: '#606762', fontSize: '16px', letterSpacing: '1px', fontFamily: 'arial', lineHeight: '30px' }}>We are happy to listen your query about pest <br /> control for your home or business. Contact us <br /> to get more information. </p>
                <div className='all'>
                <div className='article'>
               
             
                <p className='mt-2'>Are all the products safe?</p>
            

                
                <p className='mt-2'>What do i do if i find termites</p>
                

          
                <p className='mt-2'>Can My Pets Be Home WHilst I am having Treatment?</p>
                

              
                
                <p className='mt-2'>How long does a treatment take to conduct</p>
                
                </div>
            </div>
            </div>
            <div className="image-container">
      <img 
        src="src/images/Rectangle 82.png"
        alt="Background"
        className="background-image"
      />
      <img
        src="src/images/male-janitor-mopping-corridor-young-african-cleaning-floor-57190720.webp"
        alt="Main"
        className="overlay-image"
      />
    </div>
        </div>
    )
}
