import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import Stats from "@/components/Stats";
import MusicVideos from "@/components/MusicVideos";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
        <Stats />
        <MusicVideos />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
