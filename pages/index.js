import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import Navbar from "@/components/Navbar";
import EnvironmentalRights from "@/components/Rights";
import ren from "../public/locales/en/rights.json";
import rhi from "../public/locales/hi/rights.json";
import AboutUCIL from "@/components/AboutUs";
import EnvironmentalStatsCards from "@/components/Environmental";
import MiningStats from "@/components/ProjectStatistics";

const translations = { en, hi };
const rights_translation = { ren, rhi };

export default function Home() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  const lang = locale === "hi" ? "rhi" : "ren";

  const rt = rights_translation[lang] || translations.en;

  return (
    <>
      <div className="box-border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar t={t} />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Hero t={t} />
        </div>

        <div className="py-8">
          <AboutUCIL />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <EnvironmentalStatsCards />
          <MiningStats/>
        </div>
        <div className="py-8">
          <EnvironmentalRights t={rt} />
        </div>
      </div>
    </>
  );
}
