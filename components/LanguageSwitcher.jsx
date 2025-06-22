import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div className="relative inline-block w-28 h-10">
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
        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
      />

      {/* Background toggle */}
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          router.locale === "hi"
            ? "bg-green-600 dark:bg-green-500"
            : "bg-gray-300 dark:bg-gray-500"
        }`}
      ></div>

      {/* Text labels */}
      <div className="relative flex items-center h-full px-3">
        <span
          className={`text-sm font-semibold transition-colors duration-300 ${
            router.locale === "en"
              ? "text-gray-100 dark:text-blue"
              : "text-gray-200"
          }`}
        >
          EN
        </span>
        <span
          className={`text-sm font-semibold ml-auto transition-colors duration-300 ${
            router.locale === "hi"
              ? "text-gray-100 dark:text-gray-900"
              : "text-black dark:text-gray-200"
          }`}
        >
          हिन्दी
        </span>
      </div>

      {/* Toggle knob */}
      <div
        className={`absolute top-1 left-1 w-8 h-8 bg-white dark:bg-black border-2 border-gray-400 dark:border-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${
          router.locale === "hi" ? "translate-x-16" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}
