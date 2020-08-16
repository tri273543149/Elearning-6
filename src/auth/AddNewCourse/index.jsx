import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createCourseSchema } from "../../services/course";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, uploadCourseImage } from "../../store/actions/course";
import { maNhom } from "../../config";

let randomId = require("random-id");

const AddNewCourse = () => {
  const dispatch = useDispatch();
  const taiKhoan = useSelector((state) => state.user.credentials.taiKhoan);

  const handleOnSubmit = (values) => {
    // dispatch(addNewCourse(values));
    const formData = new FormData();
    for(let i in values){
      formData.append(i, values[i])
    }
    // formData.append("hinhAnh", values.hinhAnh);
    dispatch(uploadCourseImage(formData));
  };
  return (
    <section className="add_new_course">
      <div className="content_box">
        <p className="title">Add New Course</p>
        <Formik
          initialValues={{
            maKhoaHoc: randomId(10, "aA0"),
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: Math.floor(Math.random() * 10000),
            danhGia: Math.floor(Math.random() * 10000),
            maNhom: maNhom,
            ngayTao: "30/08/2020",
            hinhAnh: "",
            maDanhMucKhoaHoc: "BackEnd",
            taiKhoanNguoiTao: taiKhoan,
          }}
          enableReinitialize={true}
          validationSchema={createCourseSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleChange, setFieldValue }) => (
            <Form>
              <div className="form_container">
                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Course ID</span>
                    <ErrorMessage name="maKhoaHoc">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    disabled
                    type="text"
                    name="maKhoaHoc"
                    onChange={handleChange}
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
                  />
                </div>

                <div className="form-group">
                  <div className="form_content">
                    <span className="label_name">Course name</span>
                    <ErrorMessage name="tenKhoaHoc">
                      {(msg) => <span className="text-danger">{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <Field
                    className="form-control"
                    type="text"
                    name="tenKhoaHoc"
                    onChange={handleChange}
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
                <div className="btn_style">
                  <button type="submit" className="btn btn-success mr-2">
                    Add new course
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default AddNewCourse;
