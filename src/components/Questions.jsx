import React from "react";
import "../images/male-janitor-mopping-corridor-young-african-cleaning-floor-57190720.webp";

export default function FAQ() {
  return (
    <div
      className="container d-flex justify-content-around"
      style={{ marginTop: "150px", marginBottom: "150px" }}>
      <div className="left-section">
        <h2 className="mb-4" style={{ fontSize: "35px", fontWeight: "bold" }}>
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>
        <p
          className="text-muted mb-4"
          style={{
            color: "#606762",
            fontSize: "16px",
            letterSpacing: "1px",
            fontFamily: "arial",
            lineHeight: "30px",
          }}>
          We are happy to listen your query about pest <br /> control for your
          home or business. Contact us <br /> to get more information.{" "}
        </p>

        <div>
          <img src="src/images/Rectangle 78.png" alt="rectangle"style={{height:'1.32px',width:'18px',marginBottom:'20px',color:'rgba(226, 61, 55, 1)'}}/>
        </div>

        <div className="d-flex border-bottom mb-5">
        <img src="src/images/plus.png" alt="plus"  style={{width:'18px',height:'18px',left:'181px',top:'3469px'}}/>
          <p style={{width:'500px',height:'24px',marginLeft:'20px'}}><b>Are all the products safe?</b></p>
        </div>

        <div className="d-flex border-bottom mb-5">
        <img src="src/images/plus.png" alt="plus"  style={{width:'18px',height:'18px',left:'181px',top:'3469px'}}/>
          <p style={{width:'500px',height:'24px',marginLeft:'20px'}}> <b> What do i do if i find termites</b></p>
        </div>

        <div className="d-flex border-bottom mb-5">
        <img src="src/images/plus.png" alt="plus"  style={{width:'18px',height:'18px',left:'181px',top:'3469px'}}/>
          <p style={{width:'500px',height:'24px',marginLeft:'20px'}}> <b> Can My Pets Be Home WHilst I am having Treatment?</b></p>
        </div>

        <div className="d-flex border-bottom mb-5">
        <img src="src/images/plus.png" alt="plus"  style={{width:'18px',height:'18px',left:'181px',top:'3469px'}}/>
          <p  style={{width:'500px',height:'24px',marginLeft:'20px'}}><b>How long does a treatment take to conduct</b></p>
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
  );
}
