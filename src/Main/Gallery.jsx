import Footer from "../composables/Footer";
import Navbar from "../composables/Navbar";
import GalleryHero from "../Section/Gallery/Hero";
import GallerySection from "../Section/Gallery/Photos";


function Gallery() {
  return (
    <>
      <Navbar />
      <GalleryHero/>
      <GallerySection/>
      <Footer/>
    </>
  );
}

export default Gallery;
