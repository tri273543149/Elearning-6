import {
  FETCH_USER_LIST,
  ADD_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_DETAIL,
} from "../constants/user";

let initialState = {
  userArray: [],
  userDetail: {},
};

const usersReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USER_LIST:
      return { ...state, userArray: actions.payload };
    case ADD_NEW_USER:
      state.userArray = [...state.userArray, actions.payload];
      return { ...state };
    case UPDATE_USER: {
      let updateArray = [...state.userArray];
      let index = updateArray.findIndex(
        (user) => (user.taiKhoan === actions.payload.taiKhoan)
      );
      if (index !== -1) {
        updateArray[index] = actions.payload;
      }

      state.userArray = [...updateArray];
      return { ...state };
    }
    case DELETE_USER: {
      let updateArray = [...state.userArray];
      let index = updateArray.findIndex(
        (user) => (user.taiKhoan === actions.payload)
      );
      if (index !== -1) {
        updateArray.splice(index, 1);
      }
      state.userArray = [...updateArray];
      return { ...state };
    }
    case USER_DETAIL:
      state.userDetail = actions.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default usersReducer;
