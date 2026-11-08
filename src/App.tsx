import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Circuitao from "./sections/Circuitao/Circuitao";
import Partners from "./sections/Partners/Partners";
import Contact from "./sections/Contact/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Circuitao />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
