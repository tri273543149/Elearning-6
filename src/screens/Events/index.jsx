import React from "react";
import "./index.css";
import Image from "./event.png";
import Footer from "../../components/Footer";

const Events = () => {
  return (
    <section className="events">
      <div className="top_content">
        <div className="content_box">
          <p className="subtitle">Find the course/lessen</p>
          <p className="title">Get knowledge</p>
          <p className="body">Easy to use block examples</p>
        </div>
      </div>
      <div className="mid_content">
        <div className="content_box">
          <div className="item item_1">
            <i className="fa fa-book"></i>
            <p className="title">Learn at your pace</p>
            <p className="body">
              You start with your passion and knowledge. Then choose a topic and
              plan your lectures in Google Docs, Microsoft Excel, or your
              favorite notebook.
            </p>
          </div>
          <div className="item item_2">
            <i className="fa fa-hand-holding-heart"></i>
            <p className="title">Explore courses</p>
            <p className="body">
              Udemy offers free courses on how to build your own course,
              complete with worksheets and real-world examples. Plus, our
              instructor dashboard.
            </p>
          </div>
          <div className="item item_3">
            <i className="fa fa-play-circle"></i>
            <p className="title">Enroll in classes</p>
            <p className="body">
              Udemy has given me the opportunity to reach a global audience for
              my classes that wouldn’t have been possible otherwise.
            </p>
          </div>
        </div>
      </div>
      <div className="bot_content">
        <div className="content_box">
          <div className="row">
            <div className="col-4">
              <img src={Image} alt="/" />
            </div>
            <div className="col-8">
              <p className="title">What is the business conference 2020</p>
              <p className="subtitle">
                Help people learn new skills, advance their careers.
              </p>
              <p className="body">
                Launching my first course on Udemy allowed me to quit my
                full-time job and start my own company. I went from working 60+
                hour weeks to setting my own hours and schedule. Take advantage of our active community of instructors to help you through your course creation process.
              </p>
              <button className="btn btn-success mr-1">Buy ticket</button>
              <button className="btn btn-primary">Know more</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Events;
