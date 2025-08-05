function GalleryHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden h-[30vh]">
        {/* Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pr.jpg"
            alt="Gallery Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Galeri & Portfolio
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-6">
        <div className="max-w-full mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-2xl md:text-4xl lg:text-5xl font-black">
            <span>公式プログラム</span>
            <span className="text-yellow-300">✱</span>
            <span>高収入</span>
            <span className="text-yellow-300">✱</span>
            <span>将来性のあるキャリア</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryHero;
