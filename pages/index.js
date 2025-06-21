import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import Navbar from "@/components/Navbar";
import EnvironmentalRights from "@/components/Rights";
import ren from "../public/locales/en/rights.json";
import rhi from "../public/locales/hi/rights.json";



const translations = { en, hi };
const rights_translation={ren,rhi};

export default function Home() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  const lang=locale==="hi"?"rhi":"ren";


  const rt=rights_translation[lang] || translations.en;

  return (
    <>
      <Navbar t={t} />
      <div className="box-border min-h-screen flex flex-col">
        <Hero t={t} />
      </div>
      <EnvironmentalRights t={rt}/>
    </>
  );
}
