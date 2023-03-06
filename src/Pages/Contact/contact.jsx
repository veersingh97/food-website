import React from "react";
import "./contact.css";
import DivImg from "../../Assests/divider-free-img-1.png";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-hero">
        <div className="contact-grid">
          <div className="contact-content">
            <img src={DivImg} alt="divider"></img>
            <h2>Reserve A Table</h2>
            <h1>Contact Us.</h1>
            <p>
              Consectetur adipiscing elit elit tellus, luctus nec ullamcorper
              mattis, pulvinar dapibus leo.​ <br></br>Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Link to="/reserve">
              <button className="btn contact-btn">Reservation</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hungry">
        <h2>Are You Hungry?</h2>
        <p>Come, Dine With Us!</p>
        <p>
          Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
          sodales leo, eget blandit nunc tortor eu nibh.
        </p>
        <img src={DivImg} alt="divider"></img>
        <div className="call-book">
          <div>
            <h3>For Restaurant</h3>
            <p>1234567890</p>
          </div>
          <div>
            <h3>Private Dinning</h3>
            <p>0987654321</p>
          </div>
        </div>
      </div>
      <div className="form-map">
        <div className="form">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter Your Name"></input>
            <label>Email</label>
            <input type="text" placeholder="Enter a Valid Email"></input>
            <label>How Can We Help?</label>
            <textarea
              type="text"
              placeholder="Enter Your Meassage Here"
            ></textarea>
            <button className="btn clear top-margin">Submit</button>
          </form>
        </div>
        <div className="mobile-flexbox">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14009.831487470361!2d77.02190145!3d28.61603625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1668511755938!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="maps"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="opening-hour">
        <img src={DivImg} alt="divider"></img>
        <h2 className="open-hours">Open Hours</h2>
        <p className="timings">Mon - Fri 12 PM --- 11 PM </p>
        <p className="timings">Sat - Sun 10 AM --- 2 AM </p>
        <h2 className="happy">Happy Hours</h2>
        <p className="enjoy">Enjoy 50% Off</p>
        <p className="thursday">Every Thursday, 4PM – 7PM</p>
      </div>
    </section>
  );
};

export default contact;
