import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import FeaturedServices from "@/components/sections/FeaturedServices";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import Finance from "@/components/sections/Finance";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CTABanner from "@/components/sections/CTABanner";
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
      <BusinessSolutions />
      <Finance />
      <WhyChooseUs />
      <Process />
      <Stats />
      <Projects />
      <Testimonials />
      <Contact />
      <CTABanner />
      <Footer />
      <BackToTop />
    </main>
  );
}
