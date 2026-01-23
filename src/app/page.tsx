'use client';

import { useEffect, useState } from "react";
import WelcomeGate from "@/components/Greeting";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setShowContent(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <WelcomeGate onComplete={handleWelcomeComplete} />
      
      {showContent && (
        <main>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}