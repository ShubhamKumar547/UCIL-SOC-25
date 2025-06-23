import React from 'react';
import { useRouter } from 'next/router';
import demand_en from '../public/locales/en/demand.json';
import demand_hi from '../public/locales/hi/demand.json';

const CommunityDemands = () => {
  const { locale } = useRouter();
  const demand_translation = { demand_en, demand_hi };
  const lang = locale === "hi" ? "demand_hi" : "demand_en";
  
  const t = demand_translation[lang] || demand_translation.en;

  return (
    <section className="py-6 bg-gray-50 dark:bg-[var(--color-gray-800)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-normal">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm text-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-normal">
          {t.demands.map((demand, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-amber-400"
            >
              <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-2 text-normal">
                {demand.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-normal">
                {demand.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition-colors text-sm hover:cursor-pointer dark:hover:bg-amber-400">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityDemands;