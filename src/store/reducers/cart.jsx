import { ADD_TO_CART, SET_CART, REMOVE_CART_ITEM } from "../constants/cart";
import Swal from "sweetalert2";

let initialState = [];

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART: {
      let { maKhoaHoc } = actions.payload;
      let temptArr = [...state];
      let index = temptArr.findIndex((item) => item.maKhoaHoc === maKhoaHoc);
      if (index === -1) {
        temptArr = [...temptArr, actions.payload];
      } else {
        Swal.fire({
          icon: "error",
          title: "This course has already been in cart !",
        });
      }
      localStorage.setItem("cart", JSON.stringify(temptArr));
      state = [...temptArr];
      return [...state];
    }
    case REMOVE_CART_ITEM: {
      let { maKhoaHoc } = actions.payload;
      let temptArr = [...state];
      let index = temptArr.findIndex((item) => item.maKhoaHoc === maKhoaHoc);
      if (index !== -1) {
        temptArr.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(temptArr));
      state = [...temptArr];
      return [...state];
    }
    case SET_CART:
      state = [...actions.payload];
      return [...state];
    default:
      return [...state];
  }
};

export default cartReducer;
