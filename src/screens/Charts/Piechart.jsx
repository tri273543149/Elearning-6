import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const Piechart = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thirsday",
        "Friday",
        "Saturday",
        "Monday",
      ],
      datasets: [
        {
          label: "Purchase",
          data: [617594, 489375, 863244, 324312, 243567, 451234, 123456],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(164, 99, 132, 0.7)",
            "rgba(255, 154, 92, 0.7)",
          ],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="piechart">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "Total Users Per Week",
            display: true,
            fontSize: 40,
          },
        }}
      />
    </div>
  );
};

export default Piechart;
