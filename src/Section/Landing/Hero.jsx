import { useState, useEffect } from "react";

function Hero() {
  const images = [
    "/images/pr.jpg",
    "/images/hero2.jpeg",
    "/images/HERO3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="relative h-[85vh] overflow-hidden">
        <div className="relative h-full">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 text-white">
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl font-medium mb-4">
                LPKS GRAHA EDUKASI NUSANTARA
              </p>
              <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
                Jika ingin mewujudkan mimpi bekerja di Jepang dengan aman dan pasti, pilih LPK GEN!
              </h2>
            </div>
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

export default Hero;
