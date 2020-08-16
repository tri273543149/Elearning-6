import React from "react";
import "./index.css";
import Image from "./student.jpg";

const UdemyForBusiness = () => {
  return (
    <section className="udemyforbusiness">
      <div className="img_box">
        <img src={Image} alt="/" />
      </div>
      <div className="container-fluid top_content">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="content_box">
              <p className="title">Udemy for Business</p>
              <p className="body">
                Get unlimited access to 4,000+ of Udemy’s top courses for your
                team.
              </p>
              <button className="btn_teach">Get udemy for business</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdemyForBusiness;
