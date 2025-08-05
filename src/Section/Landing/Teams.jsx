const staffMembers = [
  {
    name: "ABDI WIJAYA",
    imgSrc: "../images/wijaya.jpg",
    alt: "Abdi Wijaya",
  },
  {
    name: "LIRAWATI",
    imgSrc: "../images/wati.jpg",
    alt: "Lirawati",
  },
  {
    name: "WIDI NUGROHO",
    imgSrc: "../images/2e11b25399757991b7d78d0695ff826cef7ee3de.jpg",
    alt: "Widi Nugroho",
  },
  {
    name: "DARMAYANTI DWI PAMUNGKAS",
    imgSrc: "../images/darma.jpg",
    alt: "Darmayanti Dwi Pamungkas",
    isTwoLines: true,
  },
  {
    name: "LISTMONO",
    imgSrc: "../images/lis.jpg",
    alt: "Listmono",
  },
];

function TeamSection() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 pb-4 border-b border-gray-600">
          <h1 className="text-2xl font-semibold text-white">02 - Team</h1>
        </div>

        {/* Director Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img
                src="../images/direk.jpg"
                alt="Suliswanto"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="md:col-span-3 space-y-8">
              <p className="text-sm text-gray-300 leading-relaxed">
                Sebagai kami bertujuan untuk memberikan para peserta didik yang ingin bekerja di Jepang agar dapat bekerja dengan aman, nyaman dan sesuai dengan harapan yang diinginkan. Kami berkomitmen untuk memberikan pelatihan terbaik dan bimbingan yang komprehensif agar setiap peserta dapat mencapai kesuksesan dalam karir mereka di Jepang secara profesional.
              </p>

              <div>
                <div className="text-xs text-gray-400 mb-3">DIREKTUR</div>
                <h3 className="text-4xl font-bold mb-6">SULISWANTO</h3>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Kami menjunjung tinggi nilai-nilai kejujuran, kerja keras, dan kepercayaan, serta berkomitmen penuh untuk membantu setiap peserta dalam mencapai impian mereka bekerja di Jepang dengan aman dan berkelanjutan, dan berkomitmen di Jepang, kami yakin hal tersebut akan menjadi bekal berharga dalam kehidupan.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed">
                Ke depannya, kami akan terus berupaya menjadi jembatan antara Indonesia dan Jepang yang memperkuat hubungan kerja sama kedua negara melalui pengiriman tenaga kerja profesional yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="grid grid-cols-5 gap-6">
          {staffMembers.map(({ name, imgSrc, alt, isTwoLines }, index) => (
            <div key={index} className="text-center">
              <img
                src={imgSrc}
                alt={alt}
                className="w-full h-84 object-cover mb-4"
              />
              {isTwoLines ? (
                <div className="text-xs font-bold">
                  {name.split(" ").map((part, i) => (
                    <div key={i}>{part}</div>
                  ))}
                </div>
              ) : (
                <h4 className="text-sm font-bold">{name}</h4>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
