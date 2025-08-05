const steps = [
  {
    id: 1,
    title: "Pendaftaran dan Registrasi",
    description:
      "Peserta melakukan pendaftaran dan registrasi untuk mengikuti program pelatihan keterampilan khusus sesuai dengan bidang yang diminati.",
    side: "left",
    bgColor: "bg-red-600",
    outline: "outline-gray-500",
    border: "border-2",
    numberStyle: "text-white font-bold text-lg px-3 py-1 rounded-full mr-3",
    numberBg: "",
  },
  {
    id: 2,
    title: "Seleksi Tahap Awal",
    description:
      "Proses seleksi awal untuk menentukan kelayakan peserta dalam mengikuti program pelatihan berdasarkan kriteria yang telah ditetapkan.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
    numberBg: "bg-white",
  },
  {
    id: 3,
    title: "Pengelolaan Ujian Keterampilan Terkait",
    description:
      "Pelaksanaan ujian keterampilan untuk mengukur kemampuan dasar peserta sebelum mengikuti program pelatihan lanjutan.",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 4,
    title: "Penyiapan Dokumen dan Wawancara",
    description:
      "Tahap persiapan dokumen lengkap dan pelaksanaan wawancara untuk menentukan kesesuaian peserta dengan program.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 5,
    title: "Penyelenggaraan Kontrak Kerja",
    description:
      "Proses penandatanganan kontrak kerja dan kesepakatan mengenai hak dan kewajiban selama mengikuti program pelatihan.",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 6,
    title: "Pengajuan Status Tinggal di Jalan",
    description:
      "Proses pengajuan dan pengurusan status tinggal sementara bagi peserta yang memerlukan akomodasi selama pelatihan.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 7,
    title: "Registrasi di Sistem SIPROTIM",
    description:
      "Pendaftaran peserta dalam sistem SIPROTIM untuk monitoring dan evaluasi progress pelatihan secara berkelanjutan.",
    side: "left",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 8,
    title: "Pengajuan Visa di Instansi",
    description:
      "Proses pengajuan visa dan dokumen perjalanan yang diperlukan untuk keperluan pelatihan di luar negeri jika diperlukan.",
    side: "right",
    bgColor: "bg-red-700",
    border: "border-white",
    numberStyle: "bg-white text-red-600 font-bold text-lg px-3 py-1 rounded-full mr-3",
  },
  {
    id: 9,
    title: "Berangkat ke Jepang dan Memulai Pekerjaan",
    description:
      "Tahap akhir dimana peserta berangkat ke lokasi pelatihan dan memulai program keterampilan khusus yang telah ditetapkan.",
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
                Pelatihan keterampilan khusus merupakan program pelatihan yang dirancang untuk meningkatkan kemampuan dan keahlian peserta dalam bidang tertentu. Program ini
                mencakup berbagai aspek pembelajaran yang disesuaikan dengan kebutuhan industri dan perkembangan teknologi terkini. Melalui pendekatan yang komprehensif,
                peserta akan mendapatkan pengetahuan teoritis dan praktis yang dapat langsung diaplikasikan dalam dunia kerja.
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
