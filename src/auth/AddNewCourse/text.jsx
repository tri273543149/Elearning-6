import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createCourseSchema } from "../../services/course";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse } from "../../store/actions/course";
import { maNhom } from "../../config";

const AddNewCourse = () => {
  const dispatch = useDispatch();
  const taiKhoan = useSelector((state) => state.user.credentials.taiKhoan);
  const handleOnSubmit = (values) => {
    dispatch(addNewCourse(values));
    console.log(values);
  };
  return (
    <section className="add_new_course">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-6 p-0">
            <div className="text_content">
              <p className="title">ADD NEW COURSE</p>
              <p className="sub_title">Look our directions for use!</p>
              <div className="text_scroll">
                <p className="body">
                  1. React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes.
                </p>
                <p className="body">
                  2. Declarative views make your code more predictable and
                  easier to debug.
                </p>
                <p className="body">
                  3. Build encapsulated components that manage their own state,
                  then compose them to make complex UIs.
                </p>
                <p className="body">
                  4. Since component logic is written in JavaScript instead of
                  templates, you can easily pass rich data through your app and
                  keep state out of the DOM.
                </p>
                <p className="body">
                  5. We don’t make assumptions about the rest of your technology
                  stack, so you can develop new features in React without
                  rewriting existing code.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="form_container">
              <Formik
                initialValues={{
                  maKhoaHoc: "",
                  biDanh: "",
                  tenKhoaHoc: "",
                  moTa: "",
                  luotXem: 0,
                  danhGia: 0,
                  maNhom: maNhom,
                  ngayTao: "",
                  hinhAnh: "./imageplaceholder.png",
                  maDanhMucKhoaHoc: "BackEnd",
                  taiKhoanNguoiTao: taiKhoan,
                }}
                enableReinitialize={true}
                validationSchema={createCourseSchema}
                onSubmit={handleOnSubmit}
              >
                {({ handleChange }) => (
                  <Form>
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Course ID</span>
                        <ErrorMessage name="maKhoaHoc">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
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
                        <span className="label_name">Views</span>
                        <ErrorMessage name="luotXem">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="number"
                        name="luotXem"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Rating</span>
                        <ErrorMessage name="danhGia">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="number"
                        name="danhGia"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Creating Date</span>
                        <ErrorMessage name="ngayTao">
                          {(msg) => <span className="text-danger">{msg}</span>}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="ngayTao"
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
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewCourse;
