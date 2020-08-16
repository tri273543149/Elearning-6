import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { updateCourse } from "../../store/actions/course";

const UpdateCourse = () => {
  const dispatch = useDispatch();
  const courseDetail = useSelector((state) => state.courseDetail);
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
    nguoiTao,
    danhMucKhoaHoc,
  } = courseDetail;
  let maDanhMucKhoaHoc = danhMucKhoaHoc ? danhMucKhoaHoc.maDanhMucKhoahoc : "";
  const handleOnSubmit = (values) => {
    dispatch(updateCourse(values));
  };
  return (
    <section className="update_course">
      <div className="content_box">
        <p className="title">COURSE INFORMATION</p>
        <div className="row m-0">
          <div className="col-4 p-0">
            <div className="left_box">
              <img src={hinhAnh} alt="/" />
              <div className="item">
                <i className="fa fa-clock mr-2"></i>
                Published at: {ngayTao}
              </div>
              <div className="item">
                <i className="fa fa-user-graduate mr-2"></i>
                Author: {nguoiTao ? nguoiTao.hoTen : ""}
              </div>
              <div className="item">
                <i className="fa fa-eye mr-2"></i>
                Views: {luotXem}
              </div>
              <div className="course_star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <div className="col-8 p-0">
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
                  nguoiTao,
                  danhMucKhoaHoc,
                  maDanhMucKhoaHoc,
                }}
                enableReinitialize={true}
                onSubmit={handleOnSubmit}
              >
                {({ handleChange, values }) => (
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
          <div className="col-12 p-0">
            <div className="bottom_box">
              <p className="sub_title">Registed students</p>
              <div className="table_box">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Name</th>
                      <th>Register Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyen Van Anh</td>
                      <td>25/05/2019</td>
                      <td>
                        <button className="btn btn-danger">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Nguyen Van Anh</td>
                      <td>25/05/2019</td>
                      <td>
                        <button className="btn btn-danger">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Nguyen Van Anh</td>
                      <td>25/05/2019</td>
                      <td>
                        <button className="btn btn-danger">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Nguyen Van Anh</td>
                      <td>25/05/2019</td>
                      <td>
                        <button className="btn btn-danger">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateCourse;
