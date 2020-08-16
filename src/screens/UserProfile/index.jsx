import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/user";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import UserImage from "./usericon.png";
import MyCourses from "../../layouts/MyCourses";
import Footer from "../../components/Footer";

const myCertifications = [
  { id: 1, name: "Leadership: Practical Leadership Skills" },
  {
    id: 2,
    name: "Blogging Masterclass: How To Build A Successful Blog In 2020",
  },
  { id: 3, name: "The Complete SQL Bootcamp 2020: Go from Zero to Hero" },
  {
    id: 4,
    name: "An Entire MBA in 1 Course:Award Winning Business School Prof",
  },
  { id: 5, name: "The Web Developer Bootcamp" },
  { id: 6, name: "The Complete JavaScript Course 2020: Build Real Projects!" },
  { id: 7, name: "Angular - The Complete Guide (2020 Edition)" },
  {
    id: 8,
    name: "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp",
  },
  { id: 9, name: "Get personal learning recommendations" },
];

const UserProfile = ({ history }) => {
  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.user.credentials) || {};

  const onLogOut = () => {
    dispatch(logout());
    history.push("/");
  };
  if (!localStorage.getItem("credentials")) {
    Swal.fire({
      icon: "error",
      title: "You have to login!",
    });
    return <Redirect to="/" />;
  }
  let { hoTen, email } = credentials;
  return (
    <section className="user_profile">
      <div className="top_content">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="title">My profile</p>
          <p className="logout" onClick={onLogOut}>
            <i className="fa fa-power-off mr-2"></i>
            <span>Log out</span>
          </p>
        </div>
      </div>
      <div className="mid_content">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="left_content">
                <img src={UserImage} alt="/" />
                <p className="name">{hoTen}</p>
                <p className="job">Frontend Developer</p>
                <div className="left_item">
                  <div
                    className="nav flex-column nav-pills text-left"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i className="fa fa-home mr-2"></i>
                      My Courses
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i className="fa fa-medal mr-2"></i>
                      Certifications
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i className="fa fa-user-check mr-2"></i>
                      Account
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i className="fa fa-cog mr-2"></i>Edit profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="right_content">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <MyCourses />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="container-fluid">
                      <div className="row certification">
                        <div className="col-12 item background">
                          <div className="font-weight-bold">Course</div>
                          <div className="font-weight-bold">Certification</div>
                        </div>
                        {myCertifications.map((cert, key) => (
                          <div className="col-12 item" key={key}>
                            <div className="cert_name">{cert.name}</div>
                            <div className="text-right text-primary">
                              Download
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12">
                          <p className="account_title">My account</p>
                          <hr />
                          <p className="account_body">
                            Your email address is:{" "}
                            <span className="text-primary">{email}</span>
                          </p>
                          <div className="account_form">
                            <p className="change_password">
                              Change your password
                            </p>
                            <input
                              type="text"
                              placeholder="Enter your old password"
                            />
                            <input
                              type="text"
                              placeholder="Enter your new password"
                            />
                            <input
                              type="text"
                              placeholder="Confirm your password"
                            />
                            <button className="btn btn-danger mt-2">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12 edit_profile">
                          <p className="account_title">Edit profile</p>
                          <hr />
                          <div className="edit_form">
                            <input
                              type="text"
                              placeholder="Enter your first name"
                            />
                            <input
                              type="text"
                              placeholder="Enter your last name"
                            />
                            <input
                              className="position"
                              type="text"
                              placeholder="Enter your position"
                            />
                            <textarea
                              type="text"
                              placeholder="Enter your Biology"
                            />
                          </div>
                        </div>
                        <div className="col-12 mt-3 social">
                          <p className="account_title">Social</p>
                          <hr />
                          <p className="social_body">
                            Add your social profile links, they will be shown on
                            your public profile.
                          </p>
                          <div className="social_form">
                            <div className="item">
                              <i className="fab fa-facebook"></i>
                              <span>Facebook</span>
                              <input
                                type="text"
                                placeholder="Enter your facebook link"
                              />
                            </div>
                            <div className="item">
                              <i className="fab fa-twitter"></i>
                              <span>Twitter</span>
                              <input
                                type="text"
                                placeholder="Enter your twitter link"
                              />
                            </div>
                            <div className="item">
                              <i className="fab fa-google-plus"></i>
                              <span>Google</span>
                              <input
                                type="text"
                                placeholder="Enter your google link"
                              />
                            </div>
                            <div className="item">
                              <i className="fab fa-skype"></i>
                              <span>Skype</span>
                              <input
                                type="text"
                                placeholder="Enter your skype link"
                              />
                            </div>
                          </div>
                          <button className="btn btn-danger mt-3">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default UserProfile;
