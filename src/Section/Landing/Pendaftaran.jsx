import React from "react";

const HEADER_TITLE = "07 - Pendaftaran Pelatihan";

const SUBTITLE = [
  "Syarat pendaftaran pelatihan bahasa jepang dan SSW",
  "Persyaratan Pendaftaran",
];

const TRAINING_REQUIREMENTS_LEFT = [
  "1 - Pria/Wanita",
  "3 - Minimal Lulusan SMA/SMK Sederajat",
  "5 - Siap dan Mau Belajar yang Baik",
];

const TRAINING_REQUIREMENTS_RIGHT = [
  {
    title: "2 - Usia 17 - 30 tahun",
    description: null,
  },
  {
    title: "4 - Sehat Fisik dan Mental",
    description:
      "dan tidak memiliki penyakit menular dan yang dapat mengganggu aktivitas kerja",
  },
  {
    title:
      "6 - Bersedia mengikuti pelatihan bahasa Jepang dan SSW/kerja minimal 6 bulan di LPK GEN",
    description: null,
  },
];

const METHODOLOGY = [
  ["Belajar Lisan/Oral", "KTP"],
  ["KTP", "Akta Kelahiran"],
];

const REGISTRATION_PROCESS = [
  "1 - Mengajukan berkas-berkas persyaratan pendaftaran (Foto copy dan Asli)",
  "2 - Datang langsung ke LPK GEN",
  "3 - Mengisi Formulir pendaftaran",
  "4 - Mengumpulkan berkas-berkas persyaratan pendaftaran(Foto Copy)",
  "5 - Mengikuti Instruktur Pelaksanaan Pemeriksaan kesehatan di Rumah sakit/klinik (jika medical)",
  "6 - Mengikuti Instruktur pelaksanaan Psikotes/matematika dasar dan wawancara sebelum penerimaan siswa baru",
  "7 - Mengikuti Instruktur pelaksanaan pembelajaran bahasa jepang sesuai jadwal yang ditentukan",
];

function PendaftaranPelatihan() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-16">
        <div className="flex justify-between items-center mb-12 pb-4 border-b border-gray-600">
          <h1 className="text-2xl font-semibold text-white">{HEADER_TITLE}</h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-300 text-lg">{SUBTITLE[0]}</p>
          <p className="text-gray-400 text-sm">{SUBTITLE[1]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            {TRAINING_REQUIREMENTS_LEFT.map((item, i) => (
              <div key={i} className="bg-red-600 p-6 rounded-lg min-h-[120px]">
                <h3 className="text-white font-semibold text-lg mb-2">{item}</h3>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {TRAINING_REQUIREMENTS_RIGHT.map(({ title, description }, i) => (
              <div key={i} className="bg-red-600 p-6 rounded-lg min-h-[120px]">
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                {description && (
                  <p className="text-white text-sm">{description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-600 p-8 rounded-lg mb-12">
  <h3 className="text-white font-bold text-xl mb-6 text-center">7 - Metodologi</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {METHODOLOGY.map((list, i) => (
      <div key={i} className="bg-red-600 p-4 rounded-lg">
        <ul className="text-white space-y-1">
          {list.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
        <div className="bg-gray-700 p-8 rounded-lg">
          <h3 className="text-white font-bold text-xl mb-8 text-center">
            Alur pendaftaran pemeriksaan adalah baru :
          </h3>

          <div className="space-y-6">
            {REGISTRATION_PROCESS.map((step, i) => (
              <div key={i} className="bg-red-600 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PendaftaranPelatihan;
