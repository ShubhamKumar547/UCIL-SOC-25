import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import CommunityDemands from "@/components/Demands";
import UraniumMineDashboard from "@/components/DataStats";
import TestimonialCarousel from "@/components/Testimonials";
import Footer from "@/components/Footer";

const community = () => {
  const translations = { en, hi };
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <div className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar t={t} />

        {/* Testimonials section with same layout as others */}
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <TestimonialCarousel />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <CommunityDemands />
          <UraniumMineDashboard />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default community;
