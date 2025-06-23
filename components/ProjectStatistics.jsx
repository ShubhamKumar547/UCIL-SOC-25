// components/MiningStats.js
import { useTheme } from "next-themes";
import env_en from "../public/locales/en/projectstats.json";
import env_hi from "../public/locales/hi/projectstats.json";
import { useRouter } from "next/router";

const MiningStats = () => {
  const { locale } = useRouter();
  const env_translation = { env_en, env_hi };
  const lang = locale === "hi" ? "env_hi" : "env_en";
  const data = env_translation[lang] || env_translation.en;

  const { theme } = useTheme();

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="bg-white dark:bg-gray-900 py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500 dark:text-amber-400">
            {data.pageTitle}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-5">
          <h2 className="text-xl font-semibold mb-6 text-black-600 dark:text-white-400  dark:border-green-400 pb-2">
            {data.keyStats}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-green-600 dark:text-green-400">
                {data.miningSites.title}
              </h3>
              <ul className="space-y-4">
                {data.miningSites.sites.map((site, index) => (
                  <li
                    key={index}
                    className="border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-1"
                  >
                    <h4 className="font-medium">{site.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {site.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-green-600 dark:text-green-400">
                {data.population.title}
              </h3>
              <ul className="space-y-3">
                {data.population.data.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 dark:text-amber-400 mr-2">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4 text-green-600 dark:text-green-400">
                {data.healthIssues.title}
              </h3>
              <ul className="space-y-3">
                {data.healthIssues.data.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 dark:text-amber-400 mr-2">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MiningStats;
