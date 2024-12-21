import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const BarChartComponent = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [categories, setCategories] = useState([]);
  const colors = [
    "#43AFFF",
    "#43AFFF",
    "#43AFFF",
    "#43AFFF",
    "#43AFFF",
    "#43AFFF",
    "#43AFFF",
  ];

  useEffect(() => {
    const generateDates = () => {
      const dates = [];
      const today = new Date();
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dates.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
      }
      setCategories(dates);
    };

    generateDates();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/ripple/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: 7,
              interval: "daily",
            },
          }
        );

        const prices = response.data.prices.map((price) => price[1].toFixed(2));
        setSeries([{ data: prices }]);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      height: 300,
      type: "bar",
      toolbar: { show: false },
      events: {
        click: (chart, w, e) => console.log(chart, w, e),
      },
      background: "transparent",
    },
    colors: colors,
    plotOptions: {
      bar: { columnWidth: "12px", distributed: true, borderRadius: 6 },
    },
    dataLabels: {
      enabled: false,
      style: { colors: ["#fff"] },
    },
    xaxis: {
      categories: categories,
      labels: { style: { fontSize: "12px", color: "#fff" } },
    },
    grid: {
      show: true,
      borderColor: "#1A1A1A",
      strokeDashArray: 15,
      yaxis: { lines: { show: true, lineWidth: 5 } },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value}`,
        style: { color: "#fff" },
      },
    },
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" />
    </div>
  );
};

export default BarChartComponent;
