import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";

const translations = { en, hi };

export default function Home() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <>
      <div className="p-8 min-h-screen flex flex-col">
        <div className="w-full flex justify-start mb-8">
          <LanguageSwitcher />
        </div>
        <Hero t={t} />
      </div>
    </>
  );
}
