import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCourse } from "../../../store/actions/course";
import Swal from "sweetalert2";
import { IS_MODAL_OPEN } from "../../../store/constants/modal";
import { createAction } from "../../../store/actions";
import { getCourseInfo } from "../../../store/actions/course";
import { maNhom } from "../../../config";

const CourseItem = ({ course }) => {
  const dispatch = useDispatch();
  let {
    tenKhoaHoc,
    hinhAnh,
    moTa,
    nguoiTao,
    ngayTao,
    maKhoaHoc,
    danhMucKhoaHoc,
    taiKhoanNguoiTao,
    maDanhMucKhoaHoc,
  } = course;
  const handleOnDeleteCourse = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteCourse(maKhoaHoc));
        Swal.fire("Deleted!", "success");
      }
    });
  };
  const handleOnShowCourseInfo = () => {
    dispatch(getCourseInfo(maKhoaHoc));
    dispatch(createAction(IS_MODAL_OPEN, "UpdateCourse"));
  };
  return (
    <div className="item_box">
      <div className="text-center img_box">
        <img src={hinhAnh} alt="/" />
      </div>
      <div className="course_info">
        <div className="course_name">
          <NavLink
            to={`/admin-course-detail/${maKhoaHoc}`}
          >
            {tenKhoaHoc}
          </NavLink>
        </div>
        <div className="course_desc">{moTa}</div>
        <span className="badge badge-warning px-3">
          {danhMucKhoaHoc ? danhMucKhoaHoc.maDanhMucKhoahoc : maDanhMucKhoaHoc}
        </span>
      </div>
      <div className="text-center align-self-center">
        <div className="course_author">
          {nguoiTao ? nguoiTao.hoTen : taiKhoanNguoiTao}
        </div>
        <span className="badge badge-success px-2">Admin {maNhom}</span>
      </div>
      <div className="text-center align-self-center course_date">{ngayTao}</div>
      <div className="btn_box align-self-center">
        <button className="btn btn-primary" onClick={handleOnShowCourseInfo}>
          <i className="fa fa-cog"></i>
        </button>
        <button className="btn btn-danger ml-1" onClick={handleOnDeleteCourse}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
