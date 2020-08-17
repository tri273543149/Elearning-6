import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Barchart = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [
        "America",
        "Europe",
        "Asia",
        "Australia",
        "Africa",
        "America Latina",
      ],
      datasets: [
        {
          label: "Purchase",
          data: [617594, 489375, 863244, 324312, 243567, 451234],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(164, 99, 132, 0.7)",
          ],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="barchart">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
              text: "Total Purchase in Areas",
              display: true,
              fontSize: 40
          },
        }}
      />
    </div>
  );
};

export default Barchart;
