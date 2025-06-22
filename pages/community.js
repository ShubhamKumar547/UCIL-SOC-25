import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";

const community = () => {
  const translations = { en, hi };
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar t={t} />
    </div>
  );
};

export default community;
