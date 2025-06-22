import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div className="relative inline-block w-20 h-8">
      {/* Invisible checkbox to control the toggle */}
      <input
        type="checkbox"
        checked={router.locale === "hi"}
        onChange={() => {
          const newLocale = router.locale === "en" ? "hi" : "en";
          router.push(
            { pathname: router.pathname, query: router.query },
            undefined,
            { locale: newLocale }
          );
        }}
        className="absolute w-full h-full opacity-0 z-10 cursor-pointer"
      />

      {/* Background toggle */}
      <div
        className={`
        absolute inset-0 rounded-full 
        ${router.locale === "hi" ? "bg-black" : "bg-white"}
        dark:${router.locale === "hi" ? "bg-white" : "bg-black"}
        border border-gray-300 dark:border-gray-600 transition-all duration-300
      `}
      ></div>

      {/* Texts */}
      <div className="relative flex items-center h-full px-2">
        <span
          className={`text-xs font-bold ${
            router.locale === "en"
              ? "text-black dark:text-white"
              : "text-gray-400 dark:text-gray-200"
          }`}
        >
          EN
        </span>
        <span
          className={`text-xs font-bold ml-auto ${
            router.locale === "hi"
              ? "text-white dark:text-black"
              : "text-gray-400 dark:text-gray-200"
          }`}
        >
          हिन्दी
        </span>
      </div>

      {/* Circle */}
      <div
        className={`
        absolute top-1 w-6 h-6 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full shadow-md
        transform transition-transform duration-300
        ${router.locale === "hi" ? "translate-x-12" : "translate-x-1"}
      `}
      ></div>
    </div>
  );
}