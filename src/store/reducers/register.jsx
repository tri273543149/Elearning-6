import {
  SET_REGISTER_USER_LIST,
  SET_UNREGISTER_USER_LIST,
  REGISTER_USER,
  UN_REGISTER_USER,
} from "../constants/user";

let initialState = {
  registeredStudentList: [],
  unregisteredStudentList: [],
  waitingList: [],
};

const registerReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_UNREGISTER_USER_LIST: {
      return { ...state, unregisteredStudentList: actions.payload };
    }
    case SET_REGISTER_USER_LIST: {
      return { ...state, registeredStudentList: actions.payload };
    }
    case UN_REGISTER_USER: {
      state.unregisteredStudentList = [
        ...state.unregisteredStudentList,
        actions.payload,
      ];
      let updateArray = [...state.registeredStudentList];
      let index = updateArray.findIndex(
        (user) => user.taiKhoan === actions.payload.taiKhoan
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.registeredStudentList = [...updateArray];
      return { ...state };
    }
    case REGISTER_USER: {
      state.registeredStudentList = [
        ...state.registeredStudentList,
        actions.payload,
      ];
      let updateArray = [...state.unregisteredStudentList];
      let index = updateArray.findIndex(
        (user) => user.taiKhoan === actions.payload.taiKhoan
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.unregisteredStudentList = [...updateArray];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default registerReducer;
