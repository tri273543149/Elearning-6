import { FETCH_CREDENTIALS } from "../constants/user";

let initialState = {
  credentials: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
