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
    <div>
      <Navbar t={t} />
    </div>
  );
};

export default community;
