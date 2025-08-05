function ProfileSection() {
  return (
    <section className="bg-stone-100 min-h-screen">
      <div className="w-full h-1 bg-yellow-400"></div>
      
      <div className="max-w-7xl mx-auto px-16 py-20">
        <div className="flex justify-between items-center mb-12 pb-4 border-b border-gray-400">
          <h1 className="text-2xl font-semibold text-gray-900">01 - Profil</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <img
                src="../images/Rectangle 33.png"
                alt="Training session"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-900 leading-relaxed text-justify">
                Saat ini, minat para pemuda Indonesia untuk bekerja di luar negeri semakin tinggi, dan Jepang menjadi salah satu negara tujuan yang paling diminati.
              </p>
              <p className="text-sm text-gray-900 leading-relaxed text-justify">
                Di sisi lain, Jepang tengah menghadapi tantangan penurunan jumlah penduduk dan kekurangan tenaga kerja muda.
              </p>
            </div>
            
            <div className="mt-20">
              <p className="text-sm text-gray-900 leading-relaxed text-justify">
                LPK GEN hadir untuk menjawab kebutuhan tersebut dengan memberikan pendidikan bahasa Jepang dan pelatihan keterampilan khusus (tokutei ginou) kepada para pemuda yang memiliki semangat tinggi untuk mengubah masa depan mereka ke arah yang lebih baik.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm text-gray-900 leading-relaxed text-justify">
                <strong>LPK GEN</strong> adalah lembaga pelatihan kerja yang berlokasi di Kota Pati, Jawa Tengah, Indonesia, dan telah resmi berdiri sejak Juli 2022.
              </p>
              <p className="text-xs text-gray-500">
                Nomor Izin terdaftar: 055.2/8052/2022/8300001
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-900 leading-relaxed text-justify">
                Sebagai lembaga pelatihan resmi dan legal yang telah diakui oleh pemerintah, LPK GEN menyediakan layanan pelatihan kerja sesuai dengan standar yang ditetapkan.
              </p>
            </div>
            
            <div className="mt-16">
              <img
                src="../images/Rectangle 33.png"
                alt="Professional team"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-900 leading-relaxed text-justify">
                Kami berharap para pemuda Indonesia dapat menjadi tenaga kerja profesional di Jepang, mampu memenuhi harapan perusahaan penerima, dan memperkuat hubungan kerja sama antara Indonesia dan Jepang secara berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
