import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupUserSchema } from "../../services/user";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE } from "../../store/constants/modal";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/actions/user";
import { maNhom } from "../../config";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector(
    (state) =>
      state.users.userDetail || {
        taiKhoan: "",
        matKhau: "",
        email: "",
        hoTen: "",
        soDt: "",
        maLoaiNguoiDung: "",
      }
  );
  let { taiKhoan, matKhau, hoTen, soDt, email, maLoaiNguoiDung } = userDetail;
  const handleOnSubmit = (values) => {
    console.log(values);
    dispatch(updateUser(values));
  };
  return (
    <section className="add_new_user">
      <div className="content_box">
        <p className="title">UPDATE USER</p>
        <Formik
          initialValues={{
            taiKhoan,
            matKhau,
            hoTen,
            soDT: soDt,
            maNhom: maNhom,
            email: email,
            maLoaiNguoiDung: maLoaiNguoiDung,
          }}
          enableReinitialize={true}
          validationSchema={signupUserSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleChange, setFieldValue, values }) => (
            <Form>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Username</span>
                        <ErrorMessage name="taiKhoan">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="taiKhoan"
                        disabled
                        onChange={handleChange}
                        value={values.taiKhoan ? values.taiKhoan : ""}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Password</span>
                        <ErrorMessage name="matKhau">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="password"
                        name="matKhau"
                        onChange={handleChange}
                        value={values.matKhau ? values.matKhau : ""}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Fullname</span>
                        <ErrorMessage name="hoTen">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="hoTen"
                        onChange={handleChange}
                        value={values.hoTen ? values.hoTen : ""}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Email</span>
                        <ErrorMessage name="email">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={values.email ? values.email : ""}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="form_content">
                        <span className="label_name">Phone</span>
                        <ErrorMessage name="soDT">
                          {(msg) => (
                            <span className="text text-danger">{msg}</span>
                          )}
                        </ErrorMessage>
                      </div>
                      <Field
                        className="form-control"
                        type="text"
                        name="soDT"
                        onChange={handleChange}
                        value={values.soDT ? values.soDT : ""}
                      />
                    </div>
                  </div>
                  <div className="col-6 pt-4">
                    <div className="form-group">
                      <span className="label_name_2">UserType</span>
                      <Field
                        type="radio"
                        value="HV"
                        name="maLoaiNguoiDung"
                        onChange={() => setFieldValue("maLoaiNguoiDung", "HV")}
                        checked={values.maLoaiNguoiDung === "HV"}
                      />
                      <span className="label_name_2">HV</span>
                      <Field
                        type="radio"
                        value="GV"
                        name="maLoaiNguoiDung"
                        onChange={() => setFieldValue("maLoaiNguoiDung", "GV")}
                        checked={values.maLoaiNguoiDung === "GV"}
                      />
                      <span className="label_name_2">GV</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="btn_style">
                      <button type="submit" className="btn btn-success mr-1">
                        Update User
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default UpdateUser;
