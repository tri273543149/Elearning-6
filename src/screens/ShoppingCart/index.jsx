import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/actions/cart";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import CartItem from "./CartItem";
import PaginatedCourses from "../../layouts/PaginatedCourses";
import Footer from "../../components/Footer";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const credentials = useSelector((state) => state.user.credentials);
  const showMessage = () => {
    Swal.fire({
      icon: "error",
      title: "You have to login",
    });
  };
  const renderCartItem = () => {
    return cart.map((item, key) => (
      <CartItem item={item} key={key} index={key + 1} />
    ));
  };
  return (
    <section className="shopping_cart">
      <div className="top_content">
        <div className="container">
          <p className="title">Shopping Cart</p>
        </div>
      </div>
      <div className="mid_content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 table_item">
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th></th>
                    <th>Course</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{renderCartItem()}</tbody>
              </table>
            </div>
            <div className="col-4">
              <div className="cart_status">
                <div className="title">Cart status</div>
                <div className="item">Quantity</div>
                <div className="item text-right">{cart.length}</div>
                <div className="item">Total</div>
                <div className="item text-right text-danger">
                  ${cart.length * 12.99}
                </div>
                {credentials ? (
                  <NavLink to="/payment" className="btn btn-danger w-100 mb-2">
                    BUY NOW
                  </NavLink>
                ) : (
                  <button
                    className="btn btn-danger w-100 mb-2"
                    onClick={showMessage}
                  >
                    BUY NOW
                  </button>
                )}
                <button
                  className="btn btn-outline-success w-100 mb-2"
                  onClick={() => dispatch(clearCart())}
                >
                  CLEAR CART
                </button>
                <NavLink
                  to="/courses"
                  className="btn btn-outline-primary w-100"
                >
                  CONTINUE SHOPPING
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot_content mt-4">
        <PaginatedCourses />
      </div>
      <Footer />
    </section>
  );
};

export default ShoppingCart;
