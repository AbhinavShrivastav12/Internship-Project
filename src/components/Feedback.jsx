import React from 'react'
import rectImage from '../images/Rectangle 83.png'
import quotes from '../images/quote.png'
import  '../images/Group 87.png'

export default function Reviews() {
  return (
    <div style={{
      backgroundImage: `url(${rectImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      padding: '50px 0',
      paddingInline: '150px'
    }}>
      <div className="container">
        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
          <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>SEE WHAT OUT CLIENT HAVE <br /> TO SAY</h1>
        </div>

        <div className="container d-flex justify-content-between" style={{ marginBottom: '100px' }}>
          <div>
            <img className='mb-4' src={quotes} alt={quotes} />
            <p className='quote-para'>I find very convenient and easing <br />working method. I am fully satisfied with <br /> the work.</p>
            <p className='text-muted quote-para'>- John P</p>
          </div>
          <div>
            <img className='mb-4' src={quotes} alt={quotes} />
            <p className='quote-para'>Very fast services and great job. I thought <br /> the technician are very professional.</p>
            <p className='text-muted quote-para'>- Nina S.</p>
          </div>
          <div>
            <img className='mb-4' src={quotes} alt={quotes} />
            <p className='quote-para'> I am very happy with the service, we <br /> were tired of this annoying bugs.</p>
            <p className='text-muted quote-para'>- Diana D.</p>
          </div>
        </div>
      </div>
      <div className="swipe-button-container">
      <img src="src/images/Group 87.png" alt="Swipe Button" className="swipe-button" />
    </div>
       

      </div>
  
  )
}
