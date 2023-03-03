import React from "react";
import DivImg from "../../Assests/divider-free-img-1.png";
import DumFace from "../../Assests/dummyface.webp";
import "./testimonials.css";

const testimonials = () => {
  return (
    <section className="testi-section">
      <div className="testi-content">
        <h1>They All Love our Food</h1>
        <img src={DivImg} alt="divider"></img>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          obcaecati numquam laudantium quasi eligendi exercitationem
          <br />
          voluptatibus animi quod molestiae, voluptatum temporibus explicabo
          cum.
        </p>
        <div className="testimonials">
          <div className="testimonial-content">
            <img src={DumFace} alt="cus-pic" className="dum-img"></img>
            <p className="name">Kunal Rathi</p>
            <p>
              "Most amazing I ever had!! Rhoncus risus donec neque egestas
              ultrices ullamcorper cursus aliquam nunc. Cras est sit libero, est
              in scelerisque donec. Tincidunt malesuada odio neque et vel
              fringilla elit. Placerat turpis mus donec id vel."
            </p>
          </div>
          <div className="testimonial-content">
            <img src={DumFace} alt="cus-pic" className="dum-img"></img>
            <p className="name">Deepak Arora</p>
            <p>
              "Amazing taste, and juicy steaks!! Best ever!! honcus risus donec
              neque egestas ultrices ullamcorper cursus aliquam nunc. Cras est
              sit libero, est in scelerisque donec. Tincidunt malesuada odio
              neque et vel fringilla elit. Placerat turpis mus donec id v"
            </p>
          </div>
          <div className="testimonial-content">
            <img src={DumFace} alt="cus-pic" className="dum-img"></img>
            <p className="name">Sachin Gupta</p>
            <p>
              "I always visit here, and they always surprise me. Rhoncus risus
              donec neque egestas ultrices ullamcorper cursus aliquam nunc. Cras
              est sit libero, est in scelerisque donec. Tincidunt malesuada odio
              neque et vel fringilla elit. Placerat turpis mus donec id vel."
            </p>
          </div>
          {/* <div className="testimonial-content">
            <img src={DumFace} alt="cus-pic" className="dum-img"></img>
            <p>RajVeer Singh</p>
            <p>
              "A must visit for every food lover Rhoncus risus donec neque
              egestas ultrices ullamcorper cursus aliquam nunc. Cras est sit
              libero, est in scelerisque donec. Tincidunt malesuada odio neque
              et vel fringilla elit. Placerat turpis mus donec id vel."
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default testimonials;
