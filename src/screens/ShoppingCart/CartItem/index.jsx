import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAction } from "../../../store/actions";
import { REMOVE_CART_ITEM } from "../../../store/constants/cart";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  let { maKhoaHoc, hinhAnh, tenKhoaHoc, moTa } = item;
  return (
    <tr>
      <td className="font-weight-bold">{index}</td>
      <td>
        <NavLink to={`/course-detail/${maKhoaHoc}`}>
          <div className="course_item">
            <img src={hinhAnh} alt="/" />
            <div className="text">
              <div className="name">{tenKhoaHoc}</div>
              <div className="desc">{moTa}</div>
            </div>
          </div>
        </NavLink>
      </td>
      <td>
        <div className="price">12.99 $</div>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(createAction(REMOVE_CART_ITEM, item))}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
