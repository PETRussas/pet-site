import Header from "./components/layout/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
