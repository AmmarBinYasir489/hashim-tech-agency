import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Projects from "@/components/sections/Projects";
import Finance from "@/components/sections/Finance";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/sections/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedServices />
      <Finance />
      <Projects />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Stats />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
