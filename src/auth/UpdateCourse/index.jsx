import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { updateCourse } from "../../store/actions/course";
import { createCourseSchema } from "../../services/course";

const UpdateCourse = () => {
  const dispatch = useDispatch();
  const courseDetail = useSelector((state) => state.courseDetail);
  const taiKhoan = useSelector((state) => state.user.credentials.taiKhoan);
  let {
    maKhoaHoc,
    tenKhoaHoc,
    biDanh,
    moTa,
    luotXem,
    danhGia,
    maNhom,
    hinhAnh,
    ngayTao,
    danhMucKhoaHoc,
  } = courseDetail;
  let maDanhMucKhoaHoc = danhMucKhoaHoc ? danhMucKhoaHoc.maDanhMucKhoahoc : "";
  const handleOnSubmit = (values) => {
    dispatch(updateCourse(values));
  };
  return (
    <section className="update_course">
      <div className="content_box">
        <p className="title">Update Course</p>
        <div className="form_container">
          <Formik
            initialValues={{
              maKhoaHoc,
              tenKhoaHoc,
              biDanh,
              moTa,
              luotXem,
              maNhom,
              danhGia,
              hinhAnh,
              ngayTao,
              taiKhoanNguoiTao: taiKhoan,
              maDanhMucKhoaHoc,
            }}
            validationSchema={createCourseSchema}
            enableReinitialize={true}
            onSubmit={handleOnSubmit}
          >
            {({ handleChange, values, setFieldValue }) => (
              <Form>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Name</span>
                    <ErrorMessage name="tenKhoaHoc">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="text"
                    name="tenKhoaHoc"
                    onChange={handleChange}
                    value={values.tenKhoaHoc ? values.tenKhoaHoc : ""}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Alias</span>
                    <ErrorMessage name="biDanh">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="text"
                    name="biDanh"
                    onChange={handleChange}
                    value={values.biDanh ? values.biDanh : ""}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Description</span>
                    <ErrorMessage name="moTa">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="text"
                    name="moTa"
                    onChange={handleChange}
                    value={values.moTa ? values.moTa : ""}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Image</span>
                    <ErrorMessage name="hinhAnh">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <input
                    className="form-control"
                    type="file"
                    name="hinhAnh"
                    onChange={(e) => {
                      setFieldValue("hinhAnh", e.target.files[0].name);
                    }}
                  />
                </div>
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Category</span>
                    <ErrorMessage name="maDanhMucKhoaHoc">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    component="select"
                    className="form-control"
                    name="maDanhMucKhoaHoc"
                    onChange={handleChange}
                  >
                    <option value="BackEnd">Backend</option>
                    <option value="Design">Design</option>
                    <option value="DiDong">Mobile</option>
                    <option value="FrontEnd">Frontend</option>
                    <option value="FullStack">Fullstack</option>
                    <option value="TuDuy">Mentality</option>
                  </Field>
                </div>
                <div className="btn_style">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger ml-2"
                    onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                  >
                    Close
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default UpdateCourse;
