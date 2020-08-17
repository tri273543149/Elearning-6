import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Darkmemes = () => {
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
        "Sunday",
      ],
      datasets: [
        {
          label: "Week",
          data: [3000, 2000, 5000, 8000, 4000, 10000, 7000],
          backgroundColor: ["rgba(54, 162, 235, 0.7)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="darkmemes">
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "Total Views Per Weeks",
            display: true,
            fontSize: 40,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Darkmemes;
