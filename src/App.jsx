import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import FloatingImage from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Inspired by: https://github.com/adrianhajdin/award-winning-website

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
