import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import TrustValueStrip from "../components/home/TrustValueStrip";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Destinations from "../components/home/Destinations";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import EnquiryForm from "../components/home/EnquiryForm";

import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--ivory)",
        color: "var(--charcoal)",
      }}
    >
      <Navbar />

      <main>
        <Hero />

        <TrustValueStrip />

        <About />

        <Services />

        <Destinations />

        <WhyChooseUs />

        <Testimonials />

        <EnquiryForm />
      </main>

      <Footer />
    </div>
  );
};

export default Home;