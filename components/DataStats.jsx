import React from "react";

import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import eng from "../public/locales/en/stats.json";
import hi from "../public/locales/hi/stats.json";
import { useRouter } from "next/router";

Chart.register(...registerables);

const UraniumMineDashboard = () => {
  const { locale } = useRouter();

  const env_translation_stats = { en: eng, hi };
  const lang = locale === "hi" ? "hi" : "en";

  const lang_t = env_translation_stats[lang] || env_translation_stats.en;
  console.log(lang_t);

  const t = lang_t["overview_titles"];
  const data = lang_t["data"];
  //   console.log(t);
  //   console.log(data);

  const defaultData = {
    healthStats: {
      labels: ["2018", "2019", "2020", "2021", "2022"],
      respiratory: [120, 145, 160, 190, 210],
      cancer: [15, 18, 22, 25, 30],
      birthDefects: [8, 10, 12, 14, 16],
      skinConditions: [45, 50, 55, 60, 65],
    },
    complaints: {
      labels: [
        t.respiratory,
        t.cancer,
        t.birthDefects,
        t.skinConditions,
        t.other,
      ],
      data: [45, 20, 10, 15, 10],
    },
    population: {
      labels: ["0-18", "19-35", "36-50", "51-65", "65+"],
      data: [120, 180, 150, 100, 50],
    },
  };

  const dashboardData = data || defaultData;
  //   console.log(dashboardData);

  const chartOptions = (title) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "magenta",
        },
      },
      title: {
        display: true,
        text: title,
        color: "#00BFFF",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#FF7F50",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#FF7F50",
        },
        grid: {
          color: "rgba(200, 200, 200, 0.1)",
        },
      },
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 mt-4 pt-4 pb-4 dark:bg-gray-900   transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center  mb-8 ">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-normal">
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {t.healthStats}
            </h2>
            <div className="h-80">
              <Bar
                data={{
                  labels: dashboardData.healthStats.labels,
                  datasets: [
                    {
                      label: t.respiratory,
                      data: dashboardData.healthStats.respiratory,
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 1,
                    },
                    {
                      label: t.cancer,
                      data: dashboardData.healthStats.cancer,
                      backgroundColor: "rgba(255, 99, 132, 0.6)",
                      borderColor: "rgba(255, 99, 132, 1)",
                      borderWidth: 1,
                    },
                    {
                      label: t.birthDefects,
                      data: dashboardData.healthStats.birthDefects,
                      backgroundColor: "rgba(153, 102, 255, 0.6)",
                      borderColor: "rgba(153, 102, 255, 1)",
                      borderWidth: 1,
                    },
                    {
                      label: t.skinConditions,
                      data: dashboardData.healthStats.skinConditions,
                      backgroundColor: "rgba(255, 159, 64, 0.6)",
                      borderColor: "rgba(255, 159, 64, 1)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={chartOptions(t.healthStats)}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {t.complaints}
            </h2>
            <div className="h-80">
              <Pie
                data={{
                  labels: dashboardData.complaints.labels,
                  datasets: [
                    {
                      data: dashboardData.complaints.data,
                      backgroundColor: [
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                      ],
                      borderColor: [
                        "rgba(75, 192, 192, 1)",
                        "rgba(255, 99, 132, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                        "rgba(54, 162, 235, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={chartOptions(t.complaints)}
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            {t.population}
          </h2>
          <div className="h-96">
            <Line
              data={{
                labels: dashboardData.population.labels,
                datasets: [
                  {
                    label: t.totalCases,
                    data: dashboardData.population.data,
                    fill: false,
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    tension: 0.1,
                  },
                ],
              }}
              options={chartOptions(t.population)}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries({
            [t.respiratory]: dashboardData.healthStats.respiratory.reduce(
              (a, b) => a + b,
              0
            ),
            [t.cancer]: dashboardData.healthStats.cancer.reduce(
              (a, b) => a + b,
              0
            ),
            [t.birthDefects]: dashboardData.healthStats.birthDefects.reduce(
              (a, b) => a + b,
              0
            ),
            [t.skinConditions]: dashboardData.healthStats.skinConditions.reduce(
              (a, b) => a + b,
              0
            ),
            [t.totalCases]: dashboardData.population.data.reduce(
              (a, b) => a + b,
              0
            ),
          }).map(([key, value]) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-300"
            >
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {key}
              </h3>
              <p className="text-2xl font-bold text-[#00BFFF] dark:text-[#00BFFF]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UraniumMineDashboard;
