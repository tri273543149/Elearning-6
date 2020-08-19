import {
  FETCH_COURSES,
  SET_LIST_STATUS,
  ADD_NEW_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
  FETCH_MY_COURSE,
  ADD_MY_COURSE,
  DELETE_MY_COURSE,
} from "../constants/course";
let initialState = {
  courses: [],
  listStatus: true,
  myCourse: [],
};

const courseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_MY_COURSE: {
      return { ...state, myCourse: actions.payload };
    }
    case ADD_MY_COURSE: {
      state.myCourse = [...state.myCourse, actions.payload];
      return { ...state };
    }
    case DELETE_MY_COURSE: {
      let updateArray = [...state.myCourse];
      let index = updateArray.findIndex(
        (course) => course.maKhoaHoc === actions.payload
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.myCourse = [...updateArray];
      return { ...state };
    }
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
