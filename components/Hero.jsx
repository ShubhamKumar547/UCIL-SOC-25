export default function Hero({ t }) {
  return (
    <section className="relative w-full h-[420px] sm:h-[540px] flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-105 dark:brightness-75"
        style={{
          backgroundImage: "url('/background-hero.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Semi-transparent Overlay for better contrast */}
      <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-30 dark:opacity-50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 mx-auto mt-16 sm:mt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg text-white transition-colors duration-300">
            {t.hero_title}
          </h1>
          <p className="text-lg sm:text-2xl mb-12 drop-shadow transition-colors duration-300 text-gray-200">
            {t.hero_description}
          </p>
          <a
            href="#mission"
            className="inline-block bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold px-10 py-3 rounded-full shadow-xl border-2 border-white dark:border-gray-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-transparent hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl mt-8"
          >
            {t.hero_cta}
          </a>
        </div>
      </div>
    </section>
  );
}