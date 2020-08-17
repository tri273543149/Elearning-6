import React from "react";
import "./index.css";
import Darkmemes from "./Darkmemes";
import Barchart from "./Barchart";
import Piechart from "./Piechart";

const Charts = () => {
  return (
    <section className="draw_chart">
      <div className="content_box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 py-5">
              <Barchart />
            </div>
            <div className="col-12 py-5">
              <Darkmemes />
            </div>

            <div className="col-12 py-5">
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
