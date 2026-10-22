import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Glavna stranica portfolija.
// Ovde povezujemo sve sekcije u jednu celinu.
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3F1] text-[#4E403D]">
      <Navbar />

      <Hero
        name="Sefka Neziri"
        title="Junior Full-Stack Developer"
        subtitle="Software Technology Engineering Student"
      />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}