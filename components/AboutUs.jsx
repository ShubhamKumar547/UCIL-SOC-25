import React from "react";
import about_en from "../public/locales/en/aboutus.json";
import about_hi from "../public/locales/hi/aboutus.json";
import { useRouter } from "next/router";

const AboutUCIL = () => {
  const { locale } = useRouter();
  const rights_translation = { about_en, about_hi };
  const lang = locale === "hi" ? "about_hi" : "about_en";

  const t = rights_translation[lang] || translations.en;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="p-6 bg-[#1f2937] text-white rounded-md space-y-5">
        <h1 className="text-xl font-bold">{t.title}</h1>

        <div>
          <h3 className="text-lg font-medium mb-1">{t.overview.title}</h3>
          <p className="font-normal">{t.overview.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">{t.mission.title}</h3>
          <p className="font-normal">{t.mission.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">{t.operations.title}</h3>
          <ul className="list-disc pl-5 font-normal space-y-1">
            {t.operations.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <button className="px-5 py-1.5 bg-white text-black font-normal font-extrabold rounded hover:bg-gray-200 transition-colors text-sm hover:cursor-pointer">
            {t.contactButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUCIL;
