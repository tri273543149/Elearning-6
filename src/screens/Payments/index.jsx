import React from "react";
import "./index.css";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

import pay1 from "./images/pay1.png";
import pay2 from "./images/pay2.png";
import pay3 from "./images/pay3.png";
import pay4 from "./images/pay4.png";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const renderCart = () => {
    if (cart && cart.length > 0) {
      return cart.map((item, key) => (
        <div className="item" key={key}>
          <img src={item.hinhAnh} alt="/" />
          <p className="name">{item.tenKhoaHoc}</p>
          <p className="price">$12.99</p>
        </div>
      ));
    }
  };
  if (!localStorage.getItem("accessToken")) {
    return <Redirect to="/" />;
  }
  return (
    <section className="payment">
      <div className="top_content">
        <div className="container">
          <p className="title">Check out</p>
        </div>
      </div>
      <div className="mid_content">
        <div className="content_box">
          <div className="item_1">
            <p className="title">60%</p>
            <hr />
            <p className="off">Off</p>
          </div>
          <div className="item_2">
            <p className="subtitle">
              Up to 60% Off - Online Courses Start At $10.99. Learn Your Way Up
              With The Freshest Skills On Udemy.
            </p>
            <p className="subbody">Exspires Aug 31st</p>
            <button className="btn btn-outline-primary mr-1">Verified</button>
            <button className="btn btn-outline-success mr-1">Exclusive</button>
            <button className="btn btn-outline-warning mr-1">Featured</button>
            <p className="detail">Details</p>
            <button className="btn btn-danger">Show code</button>
          </div>
        </div>
      </div>
      <div className="bot_content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <p className="subtitle">Your Item ({cart ? cart.length : ""})</p>
              <div className="cart_content">{renderCart()}</div>
            </div>
            <div className="col-12 col-md-8">
              <p className="title">
                Total:{" "}
                <span className="text-danger">${12.99 * cart.length}</span>
              </p>
              <div className="content_box">
                <span className="body">New payment cards</span>
                <img src={pay1} alt="/" />
                <img src={pay2} alt="/" />
                <img src={pay3} alt="/" />
                <img src={pay4} alt="/" />
                <div className="gridsystem">
                  <input
                    className="input_1"
                    type="text"
                    placeholder="Name on Card"
                  />
                  <input
                    className="input_2"
                    type="text"
                    placeholder="Card Number"
                  />
                  <select>
                    <option>MM</option>
                  </select>
                  <select>
                    <option>YY</option>
                  </select>
                  <input
                    className="bg-dark text-light"
                    type="text"
                    placeholder="Security Code"
                  />
                  <select className="select_1">
                    <option>Viet Nam</option>
                  </select>
                  <input
                    className="bg-dark text-light"
                    type="text"
                    placeholder="Zip/Postal Code"
                  />
                  <button className="btn btn-danger">Complete Payment</button>
                  <p className="subbody">
                    A payment is the voluntary tender of money or its equivalent
                    or of things of value by one party.
                  </p>
                  <p className="subbody_2">
                    <i className="fa fa-lock mr-2"></i>
                    <span>Security Connection</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Payment;
