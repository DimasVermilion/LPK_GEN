import React from "react";

const FEATURED_IMAGE = {
  src: "/images/pr.jpg",
  alt: "Video Profile",
  title: "Video Profile",
  subtitle: "ビデオプロフィール",
};

const GALLERY_IMAGES = [
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Bahasa dan budaya Jepang",
    subtitle: "日本語・日本文化について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Bahasa dan budaya Jepang",
    subtitle: "日本語・日本文化について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Bahasa dan budaya Jepang",
    subtitle: "日本語・日本文化について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Keterampilan Khusus",
    subtitle: "特定技能について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Keterampilan Khusus",
    subtitle: "特定技能について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Keterampilan Khusus",
    subtitle: "特定技能について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Orientasi Budaya",
    subtitle: "文化オリエンテーション",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Orientasi Budaya",
    subtitle: "文化オリエンテーション",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Orientasi Budaya",
    subtitle: "文化オリエンテーション",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Persiapan Keberangkatan",
    subtitle: "出発準備について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Persiapan Keberangkatan",
    subtitle: "出発準備について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Persiapan Keberangkatan",
    subtitle: "出発準備について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Simulasi Kerja",
    subtitle: "作業シミュレーション",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Simulasi Kerja",
    subtitle: "作業シミュレーション",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Simulasi Kerja",
    subtitle: "作業シミュレーション",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Evaluasi Akhir",
    subtitle: "最終評価について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Evaluasi Akhir",
    subtitle: "最終評価について",
  },
  {
    src: "/images/Rectangle 33.png",
    alt: "Training Session",
    title: "Training - Evaluasi Akhir",
    subtitle: "最終評価について",
  },
];

const JAPANESE_BANNER = ["公式プログラム", "高収入", "将来性のあるキャリア"];

function GallerySection() {
  return (
    <>
      <section className="bg-[#262626] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="mb-16">
            <div className="bg-[#262626] outline outline-[1px] outline-gray-500 overflow-hidden rounded-lg">
              <img
                src={FEATURED_IMAGE.src}
                alt={FEATURED_IMAGE.alt}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{FEATURED_IMAGE.title}</h3>
                <p className="text-sm text-gray-300">{FEATURED_IMAGE.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((item, index) => (
              <div
                key={index}
                className="bg-[#262626] outline outline-gray-500 outline-[1px] rounded-lg overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-300">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="bg-[#262626] outline outline-[1px] outline-gray-500 hover:bg-gray-600 text-white px-12 py-4 transition-colors rounded-lg">
              Load More Images
            </button>
          </div> */}
        </div>
      </section>

      <section className="bg-red-600 text-white py-6">
        <div className="max-w-full mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-2xl md:text-4xl lg:text-5xl font-black">
            {JAPANESE_BANNER.map((text, index) => (
              <React.Fragment key={index}>
                <span>{text}</span>
                {index < JAPANESE_BANNER.length - 1 && (
                  <span className="text-yellow-300">✱</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GallerySection;
