export default function Hero() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[420px] sm:h-[540px] flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/background-hero.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70 dark:from-black/95 dark:via-black/80 dark:to-black/90"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 mt-16 sm:mt-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Empowering India’s Nuclear Future
        </h1>
        <p className="text-lg sm:text-2xl text-white mb-12 drop-shadow">
          UCIL is committed to safe and sustainable uranium mining, powering the
          nation’s energy needs with responsibility and innovation.
        </p>
        <a
          href="#mission"
          className="inline-block bg-white text-black font-semibold px-10 py-3 rounded-full shadow-xl border-2 border-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/50 hover:bg-transparent hover:text-white hover:border-white hover:scale-105 hover:shadow-2xl mt-8"
        >
          Learn About Our Mission
        </a>
      </div>
    </section>
  );
}
