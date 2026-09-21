"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Solutions from "@/components/Solutions";
import PastWork from "@/components/PastWork";
import OnItSpotlight from "@/components/OnItSpotlight";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import StickyQuoteBar from "@/components/StickyQuoteBar";
import Footer from "@/components/Footer";

export default function HomeClient() {
  const [selectedPackage, setSelectedPackage] = useState("pro-platinum"); // Default featured
  const [selectedSolutions, setSelectedSolutions] = useState([]);

  // IntersectionObserver reveal effect
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 1200);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  const handleToggleSolution = (solId) => {
    setSelectedSolutions((prev) =>
      prev.includes(solId) ? prev.filter((id) => id !== solId) : [...prev, solId]
    );
  };

  handleToggleSolution.setPackage = (pkgId) => setSelectedPackage(pkgId);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Packages onSelectPackage={(pkgId) => setSelectedPackage(pkgId)} />
        <Solutions
          selectedSolutions={selectedSolutions}
          onToggleSolution={handleToggleSolution}
        />
        <PastWork />
        <OnItSpotlight />
        <Process />
        <FAQ />
        <ContactForm
          selectedPackage={selectedPackage}
          selectedSolutions={selectedSolutions}
          onToggleSolution={handleToggleSolution}
        />
      </main>
      <StickyQuoteBar solutionCount={selectedSolutions.length} />
      <Footer />
    </>
  );
}
