import React from "react";

function Gallery() {
  const galleryData = [
    {
      id: 1,
      imgSrc: "../images/Rectangle 33.png",
      imgAlt: "tentang Bahasa dan budaya Jepang",
      title: "tentang Bahasa dan budaya Jepang",
      subtitle: "日本語・日本文化について",
    },
    {
      id: 2,
      imgSrc: "../images/Rectangle 33.png",
      imgAlt: "tentang Bahasa dan budaya Jepang",
      title: "tentang Bahasa dan budaya Jepang",
      subtitle: "日本語・日本文化について",
    },
    {
      id: 3,
      imgSrc: "../images/Rectangle 33.png",
      imgAlt: "tentang Bahasa dan budaya Jepang",
      title: "tentang Bahasa dan budaya Jepang",
      subtitle: "日本語・日本文化について",
    },
  ];

  return (
    <section className="bg-[#262626] text-white py-20">
      <div className="max-w-7xl mx-auto px-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 pb-4 border-b border-gray-600">
          <h1 className="text-2xl font-semibold text-white">04 - Galeri</h1>
        </div>

        {/* Featured Video Profile */}
        <div className="mb-8">
          <div className="bg-[#262626] outline outline-[1px] outline-gray-500 overflow-hidden">
            <img
              src="../images/Rectangle 33.png"
              alt="Video Profile"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Video Profile</h3>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryData.map(({ id, imgSrc, imgAlt, title, subtitle }) => (
            <div
              key={id}
              className="bg-[#262626] outline outline-gray-500 outline-[1px] rounded-lg overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button className="bg-[#262626] outline outline-[1px] outline-gray-500 hover:bg-gray-600 text-white px-8 py-3 transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
