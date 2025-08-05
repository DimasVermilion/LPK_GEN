import Navbar from "../composables/Navbar";
import ProfileSection from "../Section/Landing/prof";
import Hero from "../Section/Landing/Hero";
import TeamSection from "../Section/Landing/Teams";
import ProgramSection from "../Section/Landing/Program";
import Gallery from "../Section/Landing/Gallery";
import PelatihanKeterampilan from "../Section/Landing/Pelatihan";
import PendaftaranPelatihan from "../Section/Landing/Pendaftaran";
import Footer from "../composables/Footer";


function Landing() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProfileSection/>
      <TeamSection/>
      <ProgramSection/>
      <Gallery/>
      <PelatihanKeterampilan/>
      <PendaftaranPelatihan/>
      <Footer/>
    </>
  );
}
export default Landing;
