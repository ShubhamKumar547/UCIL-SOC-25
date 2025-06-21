/*
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import GrievanceForm from "@/components/GrievanceForm";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";

const translations = { en, hi };

export default function GrievancePage() {
  const { locale } = useRouter();
  const [t, setT] = useState(translations[locale] || translations.en);

  // 👇 Add this to update `t` whenever locale changes
  useEffect(() => {
    setT(translations[locale] || translations.en);
  }, [locale]);

  return (
    <>
      <Navbar t={t} />
      <div className="min-h-screen bg-gray-100 px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            {t.grievance_heading || "Raise Your Voice"}
          </h1>
          <p className="text-gray-600">
            {t.grievance_subtext ||
              "Share your grievance regarding UCIL’s operations. All entries are recorded anonymously and used only for awareness and advocacy."}
          </p>
        </div>
        <GrievanceForm key={locale} t={t} />
      </div>
    </>
  );
}
*/
import GrievanceForm from "@/components/GrievanceForm";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";

const translations = { en, hi };

export default function GrievancePage() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <Navbar t={t} />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-3">
            {t.grievance_heading || "Raise Your Voice"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t.grievance_subtext ||
              "Share your grievance regarding UCIL’s operations. All entries are recorded anonymously and used only for awareness and advocacy."}
          </p>
        </div>
        <GrievanceForm t={t} />
      </div>
    </>
  );
}
