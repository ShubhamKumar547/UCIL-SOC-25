import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import en from "../public/locales/en/common.json";
import hi from "../public/locales/hi/common.json";

const translations = { en, hi };

export default function Home() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <div className="p-8 min-h-screen flex flex-col">
      <div className="w-full flex justify-start mb-8">
        <LanguageSwitcher />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">{t.welcome}</h1>
        <p className="my-4">{t.description}</p>
        <button className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-transparent hover:text-white hover:border-white transition border border-transparent">
          {t.contact}
        </button>
      </div>
    </div>
  );
}
