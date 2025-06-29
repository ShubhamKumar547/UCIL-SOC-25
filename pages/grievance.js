import GrievanceForm from "@/components/GrievanceForm";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import GrievanceStatusChecker from "@/components/GrievanceTracker";
import Footer from "@/components/Footer";

const translations = { en, hi };

export default function GrievancePage() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <div className="min-h-screen mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar t={t} />
        <div className="max-w-2xl mx-auto text-center mb-12 mt-10">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-normal">
            {t.grievance_heading || "Raise Your Voice"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm text-normal">
            {t.grievance_subtext ||
              "Share your grievance regarding UCIL’s operations. All entries are recorded anonymously and used only for awareness and advocacy."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 box-border">
          <div className="mb-6">
            <GrievanceForm t={t} />
          </div>
          <div className="flex items-start justify-center">
            <GrievanceStatusChecker />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
