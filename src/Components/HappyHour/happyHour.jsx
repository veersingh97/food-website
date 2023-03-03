import React from 'react';
import { Link } from "react-router-dom";
import BBQ from '../../Assests/bbq.png';
import './happyHour.css';

const happyHour = () => {
  return (
    <div className='box-shadow'>
    <section className='happy-hour--section'>
        <div className='happy-content'>
            <img src={BBQ} alt="bbq"></img>
            <h2>Enjoy 50% Off on All Foods</h2>
            <h1>Happy Hours</h1>
            <h4>Every Thursday, 4PM – 7PM</h4>
            <Link to="/contact"><button className='btn happy-btn'>Reserve A Table</button></Link>
        </div>
    </section>
    </div>
  )
}

export default happyHour