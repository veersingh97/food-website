import React from "react";
import "./about.css";
import DivImg from "../../Assests/divider-free-img-1.png";
import { Link } from "react-router-dom";
import cust1 from "../../Assests/ben.jpg";
import cust2 from "../../Assests/dave.jpg";
import cust3 from "../../Assests/hannah.jpg";
import cust4 from "../../Assests/steve.jpg";
import gal1 from "../../Assests/gallery-1.jpg";
import gal2 from "../../Assests/gallery-2.jpg";
import gal3 from "../../Assests/gallery-3.jpg";
import gal4 from "../../Assests/gallery-4.jpg";
import gal5 from "../../Assests/gallery-5.jpg";
import gal6 from "../../Assests/gallery-6.jpg";
import gal7 from "../../Assests/gallery-7.jpg";
import gal8 from "../../Assests/gallery-8.jpg";
import gal9 from "../../Assests/gallery-9.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-hero">
      <div className="about-grid">
        <div className="about-content">
        <img  src={DivImg} alt="divider"></img>
          <h2>Know More</h2>
          <h1>About Us.</h1>
          <p>
            Consectetur adipiscing elit elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.​ <br></br>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <Link to="/reserve">
            <button className="btn about-btn">Reservation</button>
          </Link>
        </div>
       
      </div>
      </div>
      <div className="our-restro">
        <h2>Our Restro</h2>
        <p>Serving best steaks and BBQs since 1984</p>
        <img  src={DivImg} alt="divider"></img>
        <p>
          onsectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur
          adipiscing.
        </p>
        <p>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <section className="team-section">
      <div>
        <h4 className="heading">Our Team</h4>
        <div className="team-grid">
          <div >
            <img className="team-img" src={cust1} alt="head-chef"></img>
            <p className="team-text">
            Founder / Head Chef
            </p>
            <p className="team-name">--Dave Bryson</p>
          </div>
          <div >
            <img className="team-img" src={cust2} alt="team-chef"></img>
            <p className="team-text">
            Lead Chef
            </p>
            <p className="team-name">--Ben Hadley</p>
          </div>
          <div >
            <img className="team-img" src={cust4} alt="chef"></img>
            <p className="team-text">
            Co-Founder / Chef
            </p>
            <p className="team-name">--Steve Miller</p>
          </div>
          <div >
            <img className="team-img" src={cust3} alt="chef"></img>
            <p className="team-text">
            Breakfast Chef
            </p>
            <p className="team-name">--Hannah Smith</p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="customer">
          <img src={gal1} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal2} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal3} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal4} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal5} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal6} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal7} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal8} className="gallery-img" alt="food-pic"></img>
        </div>
        <div className="customer">
          <img src={gal9} className="gallery-img"alt="food-pic"></img>
        </div>
      
      </div>
    </section>
    </section>
  );
};

export default About;
