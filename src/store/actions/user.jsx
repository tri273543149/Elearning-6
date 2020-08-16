import { userService } from "../../services";
import { createAction } from ".";
import setHeaders from "../../helpers/setHeaders";
import Swal from "sweetalert2";
import { FETCH_CREDENTIALS } from "../constants/user";
import { IS_MODAL_CLOSE } from "../constants/modal";

export const login = (user) => {
  return (dispatch) => {
    userService
      .dangNhap(user)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login succed",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        dispatch(createAction(IS_MODAL_CLOSE));
        localStorage.setItem("credentials", JSON.stringify(res.data));
        localStorage.setItem("accessToken", res.data.accessToken);
        setHeaders(res.data.accessToken);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Username or password is wrong!",
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("credentials");
    localStorage.removeItem("accessToken");
    dispatch(createAction(FETCH_CREDENTIALS, null));
  };
};
