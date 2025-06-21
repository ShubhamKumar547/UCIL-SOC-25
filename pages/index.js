import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";
import Navbar from "@/components/Navbar";

const translations = { en, hi };

export default function Home() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <Navbar t={t} />
      <div className="p-8 min-h-screen flex flex-col">
        <Hero t={t} />
      </div>
    </>
  );
}
