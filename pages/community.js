import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import CommunityDemands from "@/components/Demands";


const community = () => {
  const translations = { en, hi };
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <div>
        <Navbar t={t} />
      </div>
      <div className="max-w-7xl mx-auto px-4  pt-2 ">
        <CommunityDemands />
      </div>
      
    </>
  );
};

export default community;
