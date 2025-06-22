import React from "react";
import about_en from "../public/locales/en/aboutus.json";
import about_hi from "../public/locales/hi/aboutus.json";
import { useRouter } from "next/router";

const AboutUCIL = () => {
  const { locale } = useRouter();
  const rights_translation = { about_en, about_hi };
  const lang = locale === "hi" ? "about_hi" : "about_en";
  const t = rights_translation[lang] || rights_translation.about_en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="p-6 rounded-md shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 space-y-6">
        <h1 className="text-2xl font-bold border-b pb-2">{t.title}</h1>

        <div>
          <h3 className="text-xl font-semibold mb-1">{t.overview.title}</h3>
          <p className="text-base">{t.overview.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">{t.mission.title}</h3>
          <p className="text-base">{t.mission.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">{t.operations.title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-base">
            {t.operations.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <button className="w-full md:w-auto px-5 py-2 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-md hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors">
            {t.contactButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUCIL;
