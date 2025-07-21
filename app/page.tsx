import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Dock from "./components/Dock";

export default function Home() {
  return (
    <main className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Dock />
    </main>
  );
}
