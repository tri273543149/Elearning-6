import React from "react";
import "./index.css";
import Image from "./teacher.jpg";

const Instructor = () => {
  return (
    <section className="instructors">
      <div className="img_box">
        <img src={Image} alt="/" />
      </div>
      <div className="container-fluid top_content">
        <div className="row">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6">
            <div className="content_box">
              <p className="title">Become an instructor</p>
              <p className="body">
                Top instructors from around the world teach millions of students
                on Udemy. We provide the tools and skills to teach what you
                love.
              </p>
              <button className="btn_teach">Start teaching today</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
