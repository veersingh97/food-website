import React from "react";
import Data from "../../data";
import { Link } from "react-router-dom";
import StarRating from '../StarRating/star';
import './bestsellers.css'

const bestsellers = () => {
  return (
      <section className="best-section">
        <h1>Best Selling Foods</h1>
        <div className="best-section--grid">
      {Data.map((curElem) => {
        const { title, price, info, star, category, id, img } = curElem;
        return (
          <div className="best-content" key={id}>
            <div className="meals-conatiner">
              <img className="meal-img" src={img} alt="dish-pic"></img>
              <p className={category==="Vegetarian"?"green":"red"}>{category}</p>
              <h4 className="meal-name">{title}</h4>
              <p className="info">{info}</p>
              <p className="price">{"₹" + price}</p>
              <StarRating star={star}/>
            </div>
          </div>
        );
      })}
      </div>
      <div className="see-all">
         <Link to="/menu"><button className="btn">See All Recipes &rarr;</button></Link>
        </div>
    </section>
  );
};

export default bestsellers;
