import Image from "next/image";
import Navbar from "./com/navbar";
import Hero from "./com/hero-section"
import HeroSecondSection from "./com/hero-second-section";
import TrustBuildSection from "./com/trustbuild-section";
import AboutUsTestimonials from "./com/aboutus";
import VisionExpertiseSection from "./com/your-vision";
import OfferingSection from "./com/our-offering";
import HowWeWork from "./com/work-with-you";
import ContactSection from "./com/contectus";
import Footer from "./com/footer";
export default function Home() {
  return (<>
    <Navbar></Navbar>
    <Hero></Hero>
    <HeroSecondSection/>
    <TrustBuildSection></TrustBuildSection>
    <AboutUsTestimonials/>
    <VisionExpertiseSection></VisionExpertiseSection>
    <OfferingSection></OfferingSection>
    <HowWeWork></HowWeWork>
    <ContactSection/>
    <Footer></Footer>
   </>
  );
}
