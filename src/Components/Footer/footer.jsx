import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-grid">
        <div>
          <h1>LOGO</h1>
          <div className="brand-logo">
            <p>
              <FiInstagram />
            </p>
            <p>
              <FiFacebook />
            </p>
            <p>
              <FiTwitter />
            </p>
          </div>
          <p>Copyright &#169; 2030 by Company Name, Inc. All rights reserved</p>
        </div>
        <div className="footer-content">
          <h4 className="footer-head">Contact us</h4>
          <p>Address: first address, floor, city, state pincode</p>
          <p>Phone: 4152016370 Email: hello@comName.com</p>
        </div>
        <div className="footer-content account">
          <h4 className="footer-head ">Account</h4>
          <p>Create account</p>
          <p>Sign in</p>
          <p>iOS app</p>
          <p>Android app</p>
        </div>
        <div className="footer-content resources">
          <h4 className="footer-head ">Opening Hours</h4>
          <p>Sunday to Wednesday 9AM - 10.30PM</p>
          <p>Thursday, Friday, Saturday 9AM - 12.30AM</p>
          <Link to="/reserve">
            <button className="btn">Reserve</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default footer;
