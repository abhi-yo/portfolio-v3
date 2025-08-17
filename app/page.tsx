import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dock from "./components/Dock";

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-28">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Dock />
    </main>
  );
}
