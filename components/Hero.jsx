export default function Hero() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center text-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')",
        }}
        aria-hidden="true"
      />
      {/* Overlay*/}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
      {/* Content*/}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Welcome to UCIL
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8">
          UCIL is dedicated to empowering innovation, technology, and collaboration.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-transparent hover:text-white hover:border-white transition border border-transparent"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}