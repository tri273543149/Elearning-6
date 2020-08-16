import { FETCH_COURSE_DETAIL } from "../constants/course";

let initialState = {};

const courseDetailReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_COURSE_DETAIL: {
      state = { ...actions.payload };
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default courseDetailReducer;