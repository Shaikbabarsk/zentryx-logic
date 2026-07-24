import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Careers from "./components/sections/Careers";
import Contact from "./components/sections/Contact";


export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Projects />

      <Careers />

      <Contact />

      <Footer />

      <WhatsApp />

    </main>

  );

}