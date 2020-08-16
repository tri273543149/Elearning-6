import React from "react";
import "./index.css";
import img_1 from "./images/paypal.svg";
import img_2 from "./images/pinterest.svg";
import img_3 from "./images/volkswagen.svg";
import img_4 from "./images/mercedes.svg";
import img_5 from "./images/booking-logo.svg";

const Trusted = () => {
  return (
    <section className="trusted">
      <p className="title">Trusted by companies of all sizes</p>
      <div className="content_box">
        <div>
          <img src={img_5} alt="/" />
          <img src={img_1} alt="/" />
          <img src={img_3} alt="/" />
          <img src={img_4} alt="/" />
          <img src={img_2} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
