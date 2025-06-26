import React from "react";
import env_en from "../public/locales/en/envimpacts.json";
import env_hi from "../public/locales/hi/envimpacts.json";
import { useRouter } from "next/router";

const EnvironmentalStatsCards = () => {
  const { locale } = useRouter();
  const env_translation = { env_en, env_hi };
  const lang = locale === "hi" ? "env_hi" : "env_en";
  const t = env_translation[lang] || env_translation.en;

  // Common classes for improvement and smooth transitions
  const cardClass =
    "pt-6 pb-6 bg-white dark:bg-[var(--color-gray-800)] border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-colors duration-300 ease-in-out";
  const headingClass =
    "mb-2 text- font-semibold text-gray-900 dark:text-white pl-2";
  const valueClass =
    "font-normal text-xl text-gray-700 dark:text-gray-300 pl-2";
  const subtitleClass = "font-normal text-gray-600 dark:text-gray-400 pl-2";
  const trendClass = (trend) =>
    `${trend >= 0 ? "text-green-500" : "text-red-500"}`;

  return (
    <div className="w-full pt-4 pb-4">
      <header className="bg-white mb-2 dark:bg-gray-900 py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-amber-500 dark:text-amber-400">
            Environmental-Health Impacts
          </h1>
        </div>
      </header>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={cardClass}>
          <h3 className={headingClass}>{t.waterContamination.title}</h3>
          <p className={valueClass}>{t.waterContamination.value}</p>
          <p className={subtitleClass}>
            <span className={trendClass(t.waterContamination.trend)}>
              {t.waterContamination.trend}%
            </span>{" "}
            {t.sinceLastMonth}
          </p>
        </div>

        <div className={cardClass}>
          <h3 className={headingClass}>{t.radiationExposure.title}</h3>
          <p className={valueClass}>{t.radiationExposure.value}</p>
          <p className={subtitleClass}>
            <span className={trendClass(t.radiationExposure.trend)}>
              {t.radiationExposure.trend}%
            </span>{" "}
            {t.sinceLastWeek}
          </p>
        </div>

        <div className={cardClass}>
          <h3 className={headingClass}>{t.airPollution.title}</h3>
          <p className={valueClass}>{t.airPollution.value}</p>
          <p className={subtitleClass}>
            <span className={trendClass(t.airPollution.trend)}>
              {t.airPollution.trend}%
            </span>{" "}
            {t.sinceYesterday}
          </p>
        </div>

        <div className={cardClass}>
          <h3 className={headingClass}>{t.chemicalToxicity.title}</h3>
          <p className={valueClass}>{t.chemicalToxicity.value}</p>
          <p className={subtitleClass}>
            <span className={trendClass(t.chemicalToxicity.trend)}>
              {t.chemicalToxicity.trend}%
            </span>{" "}
            {t.sinceLastMonth}
          </p>
        </div>

        <div className={cardClass}>
          <h3 className={headingClass}>{t.landDegradation.title}</h3>
          <p className={valueClass}>{t.landDegradation.value}</p>
          <p className={subtitleClass}>
            <span className={trendClass(t.landDegradation.trend)}>
              {t.landDegradation.trend}%
            </span>{" "}
            {t.sinceLastMonth}
          </p>
        </div>

        <div className={cardClass}>
          <h3 className={headingClass}>{t.radonLevel.title}</h3>
          <p className={valueClass}>{t.radonLevel.value}</p>
          <p className={subtitleClass}>
            <span className={trendClass(t.radonLevel.trend)}>
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
