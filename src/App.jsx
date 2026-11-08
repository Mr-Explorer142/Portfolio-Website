import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Homepage } from "./pages/Homepage";
import { Catalog } from "./pages/Catalog";
import { ContactSection } from "./components/ContactSection";

// Helper component to auto-scroll to top when route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-background relative overflow-x-hidden">
        
        {/* Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Catalog />} />
            <Route path="/contact" element={<ContactSection />} />
            {/* Fallback to homepage */}
            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>

        {/* System Footer */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
