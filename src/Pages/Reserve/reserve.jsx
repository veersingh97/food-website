import React from "react";
import DivImg from "../../Assests/divider-free-img-1.png";
import "./reserve.css";
import Side1 from "../../Assests/5556.png";
import Side2 from "../../Assests/64311.png";
import Side3 from "../../Assests/5233.png";

const reserve = () => {
  return (
    <section>
      <div className="reserve-hero">
        <div className="reserve-flex">
          <img src={DivImg} alt="divider"></img>
          <h2>Welcome To</h2>
          <h1>Our Restaurant.</h1>
          <p>
            Consectetur adipiscing elit elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.<br></br>​ Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <h3 className="scroll"> Scroll Down to Reserve A Table</h3>
        </div>
      </div>
      <section className="how-section">
        <div className="how-content">
          <h3>Reserve a table in 3 simple steps</h3>
        </div>
        <div className="how-grid">
          <div className="how-lines">
            <p className="first">01</p>
            <h3>Pick a date</h3>
            <p className="how-summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis error modi, dolore id aliquid ullam libero quasi rerum
              minus aspernatur ipsam nisi reprehenderit exercitationem eos ipsum
              laboriosam atque velit temporibus molestias. Enim, atque dicta!
            </p>
          </div>
          <div className="grid-image">
            <img className="img" src={Side1} alt="pic"></img>
          </div>
        </div>
        <div className="how-grid">
          <div className="grid-image mobile-none">
            <img className="img" src={Side2} alt="pic"></img>
          </div>
          <div className="how-lines">
            <p className="first">02</p>
            <h3>Tell us for how many people</h3>
            <p className="how-summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, perspiciatis quia! Quaerat laudantium labore minima
              exercitationem iure in veritatis cum, asperiores vel tempora?
            </p>
          </div>
          <div className="grid-image desktop-none">
            <img className="img" src={Side2} alt="pic"></img>
          </div>
        </div>
        <div className="how-grid">
          <div className="how-lines">
            <p className="first">03</p>
            <h3>Choose a table from available ones</h3>
            <p className="how-summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis error modi, dolore id aliquid ullam libero quasi rerum
              minus aspernatur ipsam nisi reprehenderit exercitationem eos ipsum
              laboriosam atque velit temporibus molestias. Enim, atque dicta!
            </p>
          </div>
          <div className="grid-image">
            <img className="img" src={Side3} alt="pic"></img>
          </div>
        </div>
      </section>
      <div className="reserve-form">
        <div>
          <label>Please Select a Date</label>
          <input type="date"></input>
        </div>
        <div>
          <label>Please Select the People</label>
          <select>
            <option>Select People</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label>Enter People Details</label>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Mobile Number"></input>
        </div>
      </div>
    </section>
  );
};

export default reserve;
