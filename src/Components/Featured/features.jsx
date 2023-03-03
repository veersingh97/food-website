import React from "react";
import "./features.css";
import logo1 from "../../Assests/logo1.png";
import logo2 from "../../Assests/logo2.png";
import logo3 from "../../Assests/logo3.png";
import logo4 from "../../Assests/logo4.png";
import logo5 from "../../Assests/logo5.png";

function Featured() {
  return (
    <section className="featured-section">
      <h3>AS FEATURED IN</h3>
      <div className="logos">
        <img src={logo1} className="featured-logo insider" alt="logo"></img>
        <img src={logo2} className="featured-logo forbes" alt="logo"></img>
        <img src={logo3} className="featured-logo tech" alt="logo"></img>
        <img src={logo4} className="featured-logo" alt="logo"></img>
        <img src={logo5} className="featured-logo" alt="logo"></img>
      </div>
    </section>
  );
}

export default Featured;