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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            {t.grievance_heading || "Raise Your Voice"}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t.grievance_subtext ||
              "Share your grievance regarding UCIL’s operations. All entries are recorded anonymously and used only for awareness and advocacy."}
          </p>
        </div>
        <div>
          <GrievanceForm t={t} />
        </div>
      </div>
    </>
  );
}
