import {
  FETCH_COURSES,
  SET_LIST_STATUS,
  ADD_NEW_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "../constants/course";
let initialState = {
  courses: [],
  listStatus: true,
};

const courseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_COURSES: {
      return { ...state, courses: actions.payload };
    }
    case SET_LIST_STATUS: {
      return { ...state, listStatus: actions.payload };
    }
    case ADD_NEW_COURSE: {
      state.courses = [...state.courses, actions.payload];
      return { ...state };
    }
    case UPDATE_COURSE: {
      let temptArr = [...state.courses];
      let index = temptArr.findIndex(
        (item) => item.maKhoaHoc === actions.payload.maKhoaHoc
      );
      if (index !== -1) {
        temptArr[index] = actions.payload;
      }
      state.courses = [...temptArr];
      return { ...state };
    }
    case DELETE_COURSE: {
      let tempArr = [...state.courses];
      let index = tempArr.findIndex(
        (item) => item.maKhoaHoc === actions.payload
      );
      if (index !== -1) {
        tempArr.splice(index, 1);
      }
      state.courses = [...tempArr];
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default courseReducer;
