export default function Hero({ t }) {
  return (
    <section className="relative w-full h-[420px] sm:h-[540px] flex items-center justify-center text-center bg-gray-900">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/background-hero.jpg')",
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 mx-auto mt-16 sm:mt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {t.hero_title}
          </h1>
          <p className="text-lg sm:text-2xl text-white mb-12 drop-shadow">
            {t.hero_description}
          </p>
          <a
            href="#mission"
            className="inline-block bg-white text-black font-semibold px-10 py-3 rounded-full shadow-xl border-2 border-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-transparent hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl mt-8"
          >
            {t.hero_cta}
          </a>
        </div>
      </div>
    </section>
  );
}