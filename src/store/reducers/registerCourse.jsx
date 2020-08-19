import {
  SET_UNREGISTER_COURSE,
  SET_REGISTER_COURSE,
  REGISTER_COURSE,
  UN_REGISTER_COURSE,
} from "../constants/user";

let initialState = {
  registeredCourseList: [],
  unregisteredCourseList: [],
  waitingCourseList: [],
};

const registerCourseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_UNREGISTER_COURSE: {
      return { ...state, unregisteredCourseList: actions.payload };
    }
    case SET_REGISTER_COURSE: {
      return { ...state, registeredCourseList: actions.payload };
    }
    case UN_REGISTER_COURSE: {
      state.unregisteredCourseList = [
        ...state.unregisteredCourseList,
        actions.payload,
      ];
      let updateArray = [...state.registeredCourseList];
      let index = updateArray.findIndex(
        (course) => course.maKhoaHoc === actions.payload.maKhoaHoc
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.registeredCourseList = [...updateArray];
      return { ...state };
    }
    case REGISTER_COURSE: {
      state.registeredCourseList = [
        ...state.registeredCourseList,
        actions.payload,
      ];
      let updateArray = [...state.unregisteredCourseList];
      let index = updateArray.findIndex(
        (course) => course.maKhoaHoc === actions.payload.maKhoaHoc
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.unregisteredCourseList = [...updateArray];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default registerCourseReducer;