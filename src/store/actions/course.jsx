import {
  FETCH_COURSES,
  DELETE_COURSE,
  FETCH_COURSE_DETAIL,
  ADD_MY_COURSE,
  DELETE_MY_COURSE,
} from "../constants/course";
import { courseService } from "../../services";
import { createAction } from ".";
import { IS_MODAL_CLOSE } from "../constants/modal";
import Swal from "sweetalert2";
import {
  REGISTER_USER,
  UN_REGISTER_USER,
  REGISTER_COURSE,
  UN_REGISTER_COURSE,
} from "../constants/user";

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
  let { hinhAnh, tenKhoaHoc } = data;
  let file = hinhAnh;
  let formData = new FormData();
  formData.append("file", file);
  formData.append("tenKhoaHoc", tenKhoaHoc);
  data = { ...data, hinhAnh: hinhAnh.name };
  return (dispatch) => {
    courseService
      .themKhoaHoc(data)
      .then((res) => {
        dispatch(uploadCourseImage(formData));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Succeeded!",
          showConfirmButton: false,
          timer: 1500,
        });
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
        dispatch(fetchCoursesList());
      })
      .catch((err) => console.log(err));
  };
};

export const updateCourse = (data) => {
  let { hinhAnh, tenKhoaHoc } = data;
  let file = hinhAnh;
  let formData = new FormData();
  formData.append("file", file);
  formData.append("tenKhoaHoc", tenKhoaHoc);
  data = { ...data, hinhAnh: hinhAnh.name };
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
        dispatch(uploadCourseImage(formData));
        dispatch(createAction(IS_MODAL_CLOSE));
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

export const registerUserToCourse = (course, user) => {
  let { taiKhoan } = user;
  let { maKhoaHoc } = course;
  let data = { taiKhoan, maKhoaHoc };
  return (dispatch) => {
    courseService
      .ghiDanhKhoaHoc(data)
      .then((res) => {
        dispatch(createAction(REGISTER_USER, user));
        dispatch(createAction(REGISTER_COURSE, course));
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const unregisterUserFromCourse = (course, user) => {
  let { taiKhoan } = user;
  let { maKhoaHoc } = course;
  let data = { taiKhoan, maKhoaHoc };
  return (dispatch) => {
    courseService
      .huyGhiDanh(data)
      .then((res) => {
        dispatch(createAction(UN_REGISTER_USER, user));
        dispatch(createAction(UN_REGISTER_COURSE, course));
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const registerNewCourse = (taiKhoan, course) => {
  let { maKhoaHoc } = course;
  let data = { maKhoaHoc, taiKhoan };
  return dispatch => {
    courseService
      .dangKyKhoaHoc(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(ADD_MY_COURSE, course))
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
          showConfirmButton: true,
        });
      });
  }
}
export const unregisterCourse = (taiKhoan, maKhoaHoc) => {
    let data = { maKhoaHoc, taiKhoan }
    return dispatch => {
      courseService
      .huyGhiDanh(data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(DELETE_MY_COURSE, maKhoaHoc))
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
          showConfirmButton: true,
        });
      });
    }
}