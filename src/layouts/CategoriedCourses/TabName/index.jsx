import React from "react";

const TabName = ({ category, index, activeIndex, onChangeMaDanhMuc }) => {
  let { maDanhMuc } = category;
  let tenDanhMuc = "";
  switch (maDanhMuc) {
    case "BackEnd":
      tenDanhMuc = "Backend";
      break;
    case "Design":
      tenDanhMuc = "Design";
      break;
    case "DiDong":
      tenDanhMuc = "Mobile";
      break;
    case "FrontEnd":
      tenDanhMuc = "Frontend";
      break;
    case "FullStack":
      tenDanhMuc = "Fullstack";
      break;
    case "TuDuy":
      tenDanhMuc = "Mentality";
      break;
    default:
      break;
  }
  return (
    <li onClick={() => onChangeMaDanhMuc(maDanhMuc, index)}>
      <span className={activeIndex === index ? "nav_a active" : "nav_a"}>
        {tenDanhMuc}
      </span>
    </li>
  );
};

export default TabName;
