import {
  FETCH_COURSES,
  DELETE_COURSE,
  ADD_NEW_COURSE,
  FETCH_COURSE_DETAIL,
} from "../constants/course";
import { REGISTER_USER, UNREGISTER_USER } from "../constants/course";
import { courseService } from "../../services";
import { createAction } from ".";
import { IS_MODAL_CLOSE } from "../constants/modal";
import Swal from "sweetalert2";

export const fetchCoursesList = () => {
  return (dispatch) => {
    courseService
      .layDanhSachKhoaHoc()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const getCourseInfo = (maKhoaHoc) => {
  return (dispatch) => {
    courseService
      .layThongTinKhoaHoc(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const addNewCourse = (data) => {
  return (dispatch) => {
    courseService
      .themKhoaHoc(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Succeeded!",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(ADD_NEW_COURSE, res.data));
        dispatch(createAction(IS_MODAL_CLOSE));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
        });
      });
  };
};

export const uploadCourseImage = (data) => {
  return (dispatch) => {
    courseService
      .themHinhAnhKhoaHoc(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
};

export const updateCourse = (data) => {
  return (dispatch) => {
    courseService
      .capNhatKhoaHoc(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data);
        // dispatch(createAction(UPDATE_COURSE, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const deleteCourse = (maKhoaHoc) => {
  return (dispatch) => {
    courseService
      .xoaKhoaHoc(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(DELETE_COURSE, maKhoaHoc));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const getUserOfCourse = (maKhoaHoc) => {
  return (dispatch) => {
    courseService
      .layThongTinHocVienKhoaHoc(maKhoaHoc)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => console.log(err.response.data));
  };
};

export const registerUserToCourse = (maKhoaHoc, user) => {
  let { taiKhoan } = user;
  let data = { taiKhoan, maKhoaHoc };
  return (dispatch) => {
    courseService
      .ghiDanhKhoaHoc(data)
      .then((res) => {
        dispatch(createAction(REGISTER_USER, user));
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
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

export const unregisterUserFromCourse = (maKhoaHoc, taiKhoan) => {
  let data = { maKhoaHoc, taiKhoan};
  return dispatch => {
    courseService
    .huyGhiDanh(data)
    .then((res) => {
      dispatch(createAction(UNREGISTER_USER, taiKhoan));
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data,
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
  }
}