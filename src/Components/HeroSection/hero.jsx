import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import BackVideo from "../../Assests/back-video.mp4";
import DivImg from "../../Assests/divider-free-img-1.png";

const Hero = () => {
  return (
    <section>
      
      <video className="videoTag" autoPlay loop muted>
        <source src={BackVideo} type="video/mp4" />
      </video>
      <div className="hero-section">
        <div className="hero-content">
          <img src={DivImg} alt="divider" className="divider"></img>
          <h1 className="best city">Best In Karol Bagh</h1>
          <h1 className="best">Veg & Non Veg</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            facilis quasi odit tempora.
            <br /> Minus nesciunt, optio repellat eaque beatae quos esse
            eligendi veniam!
          </p>
          <div className="buttons">
            <Link to="/reserve"><button className="btn btn-hero">Reservation</button></Link>
            <Link to="/menu"><button className="btn btn-trans btn-hero">Explore More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
