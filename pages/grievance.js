import GrievanceForm from "@/components/GrievanceForm";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import GrievanceStatusChecker from "@/components/GrievanceTracker";

const translations = { en, hi };

export default function GrievancePage() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <Navbar t={t} />

      <div className="max-w-7xl mx-auto px-4  mt-2 pt-10 py-6 bg-gray-50 dark:bg-[var(--color-gray-800)] ">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-2xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-normal">
            {t.grievance_heading || "Raise Your Voice"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm text-normal">
            {t.grievance_subtext ||
              "Share your grievance regarding UCIL’s operations. All entries are recorded anonymously and used only for awareness and advocacy."}
          </p>
        </div>

        <div className=" grid grid-cols-[45%_45%] justify-evenly box-border">
          <div>
            <GrievanceForm t={t} />
          </div>
          <div>
            <GrievanceStatusChecker />
          </div>
        </div>
      </div>
    </>
  );
}
