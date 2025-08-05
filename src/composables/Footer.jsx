import { FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";

const FOOTER_ADDRESS = [
  "Sukolilo 102 Pati",
  "Jl. Wedana 3 Kecamatan",
  "Jl. Minangkabau No. 3 Kecamatan",
];

const FOOTER_CONTACT = [
  { text: "081 230 111 597", href: "tel:081230111597" },
  { text: "085 226 299 222", href: "tel:085226299222" },
  { text: "grahaedukasinus@gmail.com", href: "mailto:grahaedukasinus@gmail.com" },
];

const SOCIALS = [
  {
    name: "TikTok",
    icon: <FaTiktok size={20} />,
    href: "https://www.tiktok.com/@lpksgrahaedukasi",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={20} />,
    href: "https://www.facebook.com/lpksgrahaedukasi",
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={20} />,
    href: "https://www.youtube.com/@lpksgrahaedukasi",
  },
];

function Footer() {
  return (
    <footer className="bg-red-600 text-white py-16">
      <div className="bg-red-600 text-white py-6 mb-12">
        <div className="max-w-full mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-2xl md:text-4xl lg:text-5xl font-black">
            <span>公式プログラム</span>
            <span className="text-yellow-300">✱</span>
            <span>高収入</span>
            <span className="text-yellow-300">✱</span>
            <span>将来性のあるキャリア</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Info Alamat</h3>
            <div className="space-y-2 text-sm">
              {FOOTER_ADDRESS.map((line, i) => (
                <p key={i}>• {line}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Kontak</h3>
            <div className="space-y-2 text-sm">
              {FOOTER_CONTACT.map(({ text, href }, i) => (
                <p key={i}>
                  •{" "}
                  <a
                    href={href}
                    className="hover:text-yellow-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text}
                  </a>
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Media Sosial</h3>
            <div className="flex flex-col space-y-4 text-sm">
              {SOCIALS.map(({ name, icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-3 hover:text-yellow-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  {icon}
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
