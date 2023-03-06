import React, { useState } from "react";
import "./menu.css";
import Data from "../../data";
import { Link } from "react-router-dom";
import {GiForkKnifeSpoon , GiChickenOven} from 'react-icons/gi';
import {MdFastfood} from 'react-icons/md';
import DivImg from "../../Assests/divider-free-img-1.png";
import StarRatings from "../../Components/StarRating/star";

const Menu = () => {
  const [isType, setIsType] = useState("break-fast");
  return (
    <section className="menu-section">
      <div className="menu-hero">
        <div>
          <div className="menu-flex">
            <img src={DivImg} alt="divider"></img>
            <h2>Smoked Stories</h2>
            <h1>Our Menu.</h1>
            <p>
              Consectetur adipiscing elit elit tellus, luctus nec ullamcorper
              mattis, pulvinar dapibus leo.<br></br>​ Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Link to="/reserve">
              <button className="btn menu-btn">Reservation</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-content">
        <div className="menu-type">
          <h2
            onClick={() => {
              setIsType("break-fast");
            }}
            className={ isType === "break-fast"?"active":""}
          >
            <GiForkKnifeSpoon/>    Breakfast
          </h2>
          <h2
            onClick={() => {
              setIsType("lunch");
            }}
            className={ isType === "lunch"?"active":""}
          >
            <MdFastfood/> Lunch
          </h2>
          <h2
            onClick={() => {
              setIsType("dinner");
            }}
            className={ isType === "dinner"?"active":""}
          >
            <GiChickenOven/> Dinner
          </h2>
        </div>
        <div className="menu-grid">
          {
            Data.filter((curElem) => {
              return isType === curElem.type;
            }).map((curElem) => {
              const { title, price, info, star, category, id, img } = curElem;
              return (
                <div className="dish-content" key={id}>
                  <div className="meals-conatiner">
                    <img className="meal-img" src={img} alt="dish-pic"></img>
                    <p className={category === "Vegetarian" ? "green" : "red"}>
                      {category}
                    </p>
                    <h4 className="meal-name">{title}</h4>
                    <p className="info">{info}</p>
                    <p className="price">{"₹" + price}</p>
                    <StarRatings star={star} />
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Menu;
