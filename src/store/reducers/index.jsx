import { combineReducers } from "redux";
import cartReducer from "./cart";
import modalReducer from "./modal";
import userReducer from "./user";
import filterReducer from "./filter";
import courseReducer from "./course";
import courseDetailReducer from "./courseDetail";
import usersReducer from "./users";

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  user: userReducer,
  filter: filterReducer,
  course: courseReducer,
  courseDetail: courseDetailReducer,
  users: usersReducer,
});

export default rootReducer;
