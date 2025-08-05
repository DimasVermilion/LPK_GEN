const steps = [
  {
    id: 1,
    title: "Pendaftaran dan Registrasi",
    description:
      "Kandidat mendaftar di LPK GEN dan mengikuti sesi penjelasan program.",
    side: "left",
    bgColor: "bg-red-600",
    outline: "outline-gray-500",
    border: "border-2",
    numberStyle: "text-white font-bold text-lg px-3 py-1 rounded-full mr-3",
    numberBg: "",
  },
  {
    id: 2,
    title: "Belajar Bahasa Jepang",
    description:
      "Untuk bekerja dengan status Tokutei Ginou, kandidat harus lulus ujian Bahasa Jepang Dasar (JFT-Basic level A2) atau JLPT N4 ke atas..",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
    numberBg: "bg-white",
  },
  {
    id: 3,
    title: "Mengikuti Ujian Keterampilan Tokutei Ginou",
    description:
      "Mengikuti ujian keterampilan bidang yang diinginkan dan dinyatakan lulus.",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 4,
    title: "Penyiapan Dokumen dan Wawan Persiapan Dokumen dan Wawancara (5 bulan sebelum keberangkatan)",
    description:
      "Menyiapkan dokumen yang diperlukan seperti CV dan dokumen pendukung lainnya, lalu mengikuti wawancara dengan perusahaan penerima di Jepang.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 5,
    title: "Penandatanganan Kontrak Kerja (5 bulan sebelum keberangkatan)",
    description:
      "Setelah lulus wawancara, kandidat menandatangani kontrak kerja resmi dengan perusahaan di Jepang. Melakukan pembuatan paspor dan pemeriksaan kesehatan.",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 6,
    title: "Pengajuan Status Tinggal (4 bulan sebelum keberangkatan)",
    description:
      "Lembaga pengirim dan lembaga penerima bekerja sama mengajukan permohonan penerbitan Certificate of Eligibility (COE) ke Imigrasi Jepang untuk mendapatkan izin masuk.Waktu pemeriksaan imigrasi biasanya memakan waktu sekitar 2–3 bulan.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 7,
    title: "Registrasi di Sistem SISKOP2MI (1 bulan sebelum keberangkatan)",
    description:
      "Tenaga kerja migran Indonesia akan didaftarkan di sistem layanan pengelolaan pekerja migran (SISKOP2MI) dan akan mendapatkan Kartu Tenaga Kerja Luar Negeri (E-KTKLN).",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 8,
    title: "Pengajuan Visa (2 minggu sebelum keberangkatan)",
    description:
      "Mengajukan visa Tokutei Ginou ke Kedutaan Besar Jepang.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 9,
    title: "Berangkat ke Jepang dan Memulai Pekerjaan",
    description:
      "Setelah visa diterbitkan, kandidat berangkat ke Jepang dan memulai pekerjaan di perusahaan penerima.",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
];

function PelatihanKeterampilan() {
  return (
    <section className="bg-[#F5F0E1] font-sans py-20">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">05 - pelatiga keterampilan khusus</h1>

          <div className="bg-[#F5F0E1] outline outline-[1px] rounded-lg shadow-sm overflow-hidden mb-8">
            <img
              src="../images/4c88c78926ffab278d85916c3f556b1e8917a5fc.jpg"
              alt="Training Session"
              className="w-full h-94 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Pelatiga Keterampilan Khusus</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Program Tokutei Ginou (TG/SSW) adalah skema yang diperuntukkan bagi warga negara asing yang ingin bekerja di Jepang. 
                 Melalui program ini, peserta dapat bekerja di perusahaan Jepang pada 14 bidang industri seperti keperawatan, restoran, pengolahan makanan, pertanian, dan lainnya, 
                 dengan syarat memiliki kemampuan bahasa Jepang dan keterampilan khusus sesuai bidang yang dipilih.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-black text-center mb-12">Alur Pemeriksaan Terkait Girus</h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-red-600 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              {steps.map(({ id, title, description, side, bgColor, outline, border, numberStyle }) => (
                <div key={id} className={`flex flex-col md:flex-row items-center gap-8`}>
                  {side === "left" ? (
                    <>
                      <div className="md:w-1/2 order-2 md:order-1">
                        <div className={`${bgColor} ${outline ? `outline ${outline} outline-[1px]` : ""} p-6 ${border}`}>
                          <div className="flex items-center mb-3">
                            <span className={numberStyle}>{id}</span>
                            <h3 className="text-white font-semibold">{title}</h3>
                          </div>
                          <p className="text-white text-sm">{description}</p>
                        </div>
                      </div>
                      <div className="md:w-1/2 order-1 md:order-2"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 order-2"></div>
                      <div className="md:w-1/2 order-1 md:order-2">
                        <div className={`${bgColor} p-6 rounded-lg ${border}`}>
                          <div className="flex items-center mb-3">
                            <span className={numberStyle}>{id}</span>
                            <h3 className="text-white font-semibold">{title}</h3>
                          </div>
                          <p className="text-white text-sm">{description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PelatihanKeterampilan;
