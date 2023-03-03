import React from "react";
import './story.css'
import { Link } from "react-router-dom";
import { GiBarbecue } from "react-icons/gi";
import DivImg from "../../Assests/divider-free-img-1.png";
import Side from '../../Assests/16245.jpg'

const story = () => {
  return (
    <div className="story-section">
      <div className="story-content">
        <GiBarbecue />
        <h1 className="reastaurant-name">Reastaurant Name</h1>
        <img src={DivImg} alt="divider"></img>
        <p>Our Delicious Story</p>
        <p>
          Luctus nec ullamcorper mattis, pulvinar dapibus leo adipiscing elit
          elit tellus.
        </p>
        <p>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat. Luctus nec ullamcorper mattis, pulvinar dapibus
          leo adipiscing elit elit tellus.
        </p>
        <Link to="/contact"><button className="btn btn-hero margin">Reservation</button></Link>
      </div>
      <div>
        <img src={Side} className="img" alt="fruit-salad"></img>
      </div>
    </div>
  );
};

export default story;
