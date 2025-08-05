import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#262626] text-white sticky top-0 z-50">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <img
              src="../images/2c0a9a05b9f6943f4c4c991c9d36dff92a789682.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-lg sm:text-xl font-semibold leading-tight">
            LPKS GRAHA EDUKASI NUSANTARA
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm sm:text-base">
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Profil
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Program
          </a>
          <a href="gallery.html" className="hover:text-yellow-400 transition-colors">
            Galeri
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Pendaftaran
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#262626] px-6 pb-4 space-y-4 text-sm sm:text-base">
          <a href="#" className="block hover:text-yellow-400 transition-colors">
            Profil
          </a>
          <a href="#" className="block hover:text-yellow-400 transition-colors">
            Program
          </a>
          <a href="gallery.html" className="block hover:text-yellow-400 transition-colors">
            Galeri
          </a>
          <a href="#" className="block hover:text-yellow-400 transition-colors">
            Pendaftaran
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
