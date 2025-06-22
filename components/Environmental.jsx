// components/EnvironmentalStatsCards.jsx
import React from "react";
import env_en from "../public/locales/en/envimpacts.json";
import env_hi from "../public/locales/hi/envimpacts.json";
import { useRouter } from "next/router";

const EnvironmentalStatsCards = () => {
  const { locale } = useRouter();
  const env_translation = { env_en, env_hi };
  const lang = locale === "hi" ? "env_hi" : "env_en";

  const t = env_translation[lang] || env_translation.en;

  return (
    <div className="w-full px-0">
        <div className="text-2xl font-bold mb-2 text-black ">
            Environmental-Health Impacts

        </div>
         
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
       
        {/* Water Contamination Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {t.waterContamination.title}
          </h3>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {t.waterContamination.value}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span
              className={
                t.waterContamination.trend >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {t.waterContamination.trend}%
            </span>{" "}
            {t.sinceLastMonth}
          </p>
        </div>

        {/* Radiation Exposure Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {t.radiationExposure.title}
          </h3>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {t.radiationExposure.value}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span
              className={
                t.radiationExposure.trend >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {t.radiationExposure.trend}%
            </span>{" "}
            {t.sinceLastWeek}
          </p>
        </div>

        {/* Air Pollution Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {t.airPollution.title}
          </h3>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {t.airPollution.value}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span
              className={
                t.airPollution.trend >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {t.airPollution.trend}%
            </span>{" "}
            {t.sinceYesterday}
          </p>
        </div>

        {/* Chemical Toxicity Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {t.chemicalToxicity.title}
          </h3>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {t.chemicalToxicity.value}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span
              className={
                t.chemicalToxicity.trend >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {t.chemicalToxicity.trend}%
            </span>{" "}
            {t.sinceLastMonth}
          </p>
        </div>

        {/* Land Degradation Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {t.landDegradation.title}
          </h3>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {t.landDegradation.value}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span
              className={
                t.landDegradation.trend >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {t.landDegradation.trend}%
            </span>{" "}
            {t.sinceLastMonth}
          </p>
        </div>

        {/* Radon Level Card */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {t.radonLevel.title}
          </h3>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {t.radonLevel.value}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span
              className={
                t.radonLevel.trend >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {t.radonLevel.trend}%
            </span>{" "}
            {t.sinceLastWeek}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalStatsCards;
