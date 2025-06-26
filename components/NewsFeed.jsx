"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import news_en from "../public/locales/en/news.json";
import news_hi from "../public/locales/hi/news.json";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  const { locale } = useRouter();
  const { theme } = useTheme();

  const translationMap = { en: news_en, hi: news_hi };
  const t = translationMap[locale] || translationMap["en"];

  useEffect(() => {
    fetch("/data/latestNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => console.error("Failed to fetch news data"));
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="bg-white dark:bg-gray-900 py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-amber-500 dark:text-amber-400">
            {t.sectionTitle}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {news.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">{t.noNews}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                  {new Date(item.date).toLocaleDateString(locale)}
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  {item.content}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  {t.readMore}
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default NewsFeed;
