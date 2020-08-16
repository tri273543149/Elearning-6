import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createAction, filterAction } from "../../../store/actions";
import { FILTER } from "../../../store/constants/filter";
import { SET_LIST_STATUS } from "../../../store/constants/course";

const ControlBar = ({ listStatus }) => {
  const dispatch = useDispatch();
  const [keySearch, setKeySearch] = useState("");
  const [category, setCategory] = useState("");

  const handleOnChangeSearch = (e) => {
    setKeySearch(e.target.value);
  };
  const handleOnChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    if(category === "") return;
    dispatch(filterAction(FILTER, "category", category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  // -------------------------
  useEffect(() => {
    if(keySearch === "") return;
    dispatch(filterAction(FILTER, "search", keySearch));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keySearch]);
  return (
    <div className="content_box">
      <p className="title">Courses</p>
      <input
        type="text"
        placeholder="What do you want to learn?"
        onKeyUp={handleOnChangeSearch}
      />
      <select onClick={handleOnChangeCategory}>
        <option value="All">Category</option>
        <option value="BackEnd">BackEnd</option>
        <option value="Design">Design</option>
        <option value="DiDong">Mobile</option>
        <option value="FrontEnd">FrontEnd</option>
        <option value="FullStack">FullStack</option>
        <option value="TuDuy">Mentality</option>
      </select>
      <div className="control_icons">
        <i
          className={listStatus ? "fa fa-th active" : "fa fa-th"}
          onClick={() => dispatch(createAction(SET_LIST_STATUS, true))}
        ></i>
        <i
          className={!listStatus ? "fa fa-list active" : "fa fa-list"}
          onClick={() => dispatch(createAction(SET_LIST_STATUS, false))}
        ></i>
      </div>
    </div>
  );
};

export default ControlBar;
