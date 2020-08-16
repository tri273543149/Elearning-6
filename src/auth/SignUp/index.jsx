import React from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { signupUserSchema } from "../../services/user";
import { userService } from "../../services";
import { useDispatch } from "react-redux";
import { createAction } from "../../store/actions";
import { IS_MODAL_CLOSE, IS_MODAL_OPEN } from "../../store/constants/modal";
import { maNhom } from "../../config";

const SignUp = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = (values) => {
    userService
      .dangKy(values)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up succeed",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(createAction(IS_MODAL_OPEN, "SignIn"));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Email exist",
        });
      });
  };
  return (
    <div className="sign_up">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 item_left">
            <div className="content_box">
              <p className="title">Sign Up and Start Learning</p>
              <hr />
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  soDT: "",
                  maNhom: maNhom,
                  email: "",
                }}
                validationSchema={signupUserSchema}
                onSubmit={handleOnSubmit}
              >
                {({ handleChange }) => (
                  <Form>
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
                        onChange={handleChange}
                      />
                    </div>
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
                      />
                    </div>
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
                      />
                    </div>
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
                      />
                    </div>
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
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn_signup">
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-5 item_right">
            <div className="content_box">
              <p className="title">A Great Place For Education. A Great Place To Learn.</p>
              <p className="body mt-5">Already have an account?</p>
              <p
                className="btn_signin"
                onClick={() => dispatch(createAction(IS_MODAL_OPEN, "SignIn"))}
              >
                Log in
              </p>
              <div className="text-right">
                <button
                  className="btn btn-danger mt-5"
                  onClick={() => dispatch(createAction(IS_MODAL_CLOSE))}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
