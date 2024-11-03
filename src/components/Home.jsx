import React from 'react';
import homeImg from '../images/Group 106.png';
import guaranteeImg from '../images/guarantee.png';
import termitesImg from '../images/termites.png';
import mosquitoImg from '../images/mosquito.png';
import clockImg from '../images/clock.png';
import rectangleImg from '../images/Rectangle 72.png';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${rectangleImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '1020px',
        top:'34px',
        width: '1704px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div className='container' style={{ maxWidth: '1200px', width: '100%' }}>
        <div className='d-flex justify-content-between align-items-center' style={{ flexWrap: 'wrap' }}>
          <div className="left" style={{ flex: '1', minWidth: '300px', paddingRight: '20px' }}>
            <h5 style={{ color: 'red' }}><b>Call For</b></h5>
            <h1 style={{ fontSize: '3rem', letterSpacing: '0.1em' }}><b>PROFESSIONAL PEST <br />CONTROL</b></h1>
            <div className='text-muted mt-4 lh-lg'>
              <p style={{ wordSpacing: '2px' }}>
                Looking for an affordable pest control and disinfection service?<br />
                We are here to get rid of annoying bugs.
              </p>
            </div>
            <div className='mt-4'>
              <button className='btn btn-outline-secondary'>contact us</button>
            </div>
          </div>
          <div className="right" style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img className='homeImage' src={homeImg} alt="Home" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '100px', maxWidth: '1200px', width: '100%' }}>
        <div className="section_A d-flex justify-content-evenly align-items-center flex-wrap">
          <div className="item text-center" style={{ margin: '10px' }}>
            <div className="div-box">
              <img src={guaranteeImg} alt="100% Professional" />
            </div>
            <p className='mt-2'><b>100% Professional</b></p>
          </div>

          <div className="item text-center" style={{ margin: '10px' }}>
            <div className="div-box">
              <img src={termitesImg} alt="Termites" />
            </div>
            <p className='mt-2'><b>Termites</b></p>
          </div>

          <div className="item text-center" style={{ margin: '10px' }}>
            <div className="div-box">
              <img src={mosquitoImg} alt="All Pest Control" />
            </div>
            <p className='mt-2'><b>All Pest Control</b></p>
          </div>

          <div className="item text-center" style={{ margin: '10px' }}>
            <div className="div-box">
              <img src={clockImg} alt="Same-Day Services" />
            </div>
            <p className='mt-2'><b>Same-Day Services</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
