import { userService } from "../../services";
import { createAction } from ".";
import setHeaders from "../../helpers/setHeaders";
import Swal from "sweetalert2";
import {
  FETCH_CREDENTIALS,
  ADD_NEW_USER,
  USER_DETAIL,
  UPDATE_USER,
  DELETE_USER,
  SET_REGISTER_USER_LIST,
  SET_UNREGISTER_USER_LIST,
  FETCH_USER_LIST,
  SET_REGISTER_COURSE,
  SET_UNREGISTER_COURSE,
  SET_WAITING_LIST,
  SET_WAITING_COURSE,
} from "../constants/user";
import { FETCH_MY_COURSE } from "../constants/course";
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

export const fetchMyCourse = (taiKhoan) => {
  let data = { taiKhoan };
  return (dispatch) => {
    userService
      .thongTinTaiKhoan(data)
      .then((res) => {
        dispatch(createAction(FETCH_MY_COURSE, res.data.chiTietKhoaHocGhiDanh));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("credentials");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("cart");
    dispatch(createAction(FETCH_CREDENTIALS, null));
    dispatch(createAction(FETCH_MY_COURSE, []));
  };
};

export const getUserList = () => {
  return (dispatch) => {
    userService
      .layDanhSachNguoiDung("")
      .then((res) => {
        dispatch(createAction(FETCH_USER_LIST, res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const addNewUser = (data) => {
  return (dispatch) => {
    userService
      .themNguoiDung(data)
      .then((res) => {
        dispatch(createAction(ADD_NEW_USER, res.data));
        dispatch(createAction(IS_MODAL_CLOSE));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Add user succeeded",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
        });
      });
  };
};

export const findUser = (taiKhoan) => {
  return (dispatch) => {
    userService
      .timKiemNguoiDung(taiKhoan)
      .then((res) => {
        dispatch(createAction(USER_DETAIL, res.data[0]));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const updateUser = (data) => {
  return (dispatch) => {
    userService
      .capNhatThongTinNguoiDung(data)
      .then((res) => {
        dispatch(createAction(UPDATE_USER, res.data));
        dispatch(createAction(IS_MODAL_CLOSE));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update user succeeded",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
        });
      });
  };
};

export const deleteUser = (taiKhoan) => {
  return (dispatch) => {
    userService
      .xoaNguoiDung(taiKhoan)
      .then((res) => {
        dispatch(createAction(DELETE_USER, taiKhoan));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Delete user succeeded",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
        });
      });
  };
};

export const getUnregiteredUserList = (maKhoaHoc) => {
  return (dispatch) => {
    userService
      .layDanhSachNguoiDungChuaGhiDanh(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(SET_UNREGISTER_USER_LIST, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const getRegisteredUserList = (maKhoaHoc) => {
  return (dispatch) => {
    userService
      .layDanhSachHocVienKhoaHoc(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(SET_REGISTER_USER_LIST, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};
export const getUserWaitingList = (maKhoaHoc) => {
  return (dispatch) => {
    userService
      .layDanhSachHocVienChoXetDuyet(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(SET_WAITING_LIST, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};
///////////////////////////////////////////////
export const getCoursesUserRegistered = (taiKhoan) => {
  return (dispatch) => {
    userService
      .layDanhSachKhoaHocDaXetDuyet(taiKhoan)
      .then((res) => {
        dispatch(createAction(SET_REGISTER_COURSE, res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const getCoursesUserUnregistered = (taiKhoan) => {
  return (dispatch) => {
    userService
      .layDanhSachKhoaHocChuaGhiDanh(taiKhoan)
      .then((res) => {
        dispatch(createAction(SET_UNREGISTER_COURSE, res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const getCourseWaitingList = taiKhoan => {
  return dispatch => {
    userService
    .layDanhSachKhoaHocChoXetDuyet(taiKhoan)
    .then(res => {
      dispatch(createAction(SET_WAITING_COURSE, res.data))
    })
    .catch((err) => console.log(err));
  }
}
