import {
  FETCH_COURSE_DETAIL,
  UNREGISTER_USER,
  REGISTER_USER,
} from "../constants/course";

let initialState = {};

const courseDetailReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_COURSE_DETAIL: {
      state = { ...actions.payload };
      return { ...state };
    }
    case UNREGISTER_USER: {
      let updateArray = [...state.lstHocVien];
      let index = updateArray.findIndex(
        (hv) => hv.taiKhoan === actions.payload
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.lstHocVien = [...updateArray];
      return { ...state };
    }
    case REGISTER_USER: {
      state.lstHocVien = [...state.lstHocVien, actions.payload];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default courseDetailReducer;
