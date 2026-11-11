import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Homepage } from "./pages/Homepage";
import { Catalog } from "./pages/Catalog";
import { PublicationSection } from "./components/PublicationSection";
import { ContactSection } from "./components/ContactSection";

function AnimatedRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observedElements = new WeakSet();
    const observer =
      !prefersReducedMotion && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries, currentObserver) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.remove("scroll-reveal-pending");
                  entry.target.classList.add("is-visible");
                  currentObserver.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
          )
        : null;

    const observeElement = (element) => {
      if (observedElements.has(element)) return;
      observedElements.add(element);

      if (observer) {
        element.classList.add("scroll-reveal-pending");
        observer.observe(element);
      } else {
        element.classList.add("is-visible");
      }
    };

    const observeTargets = (node) => {
      if (!(node instanceof Element)) return;

      if (node.matches("[data-scroll-reveal]")) {
        observeElement(node);
      }

      node.querySelectorAll("[data-scroll-reveal]").forEach(observeElement);
    };

    observeTargets(main);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(observeTargets);
      });
    });
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return (
    <main key={pathname} className="flex-1 route-enter">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Catalog />} />
        <Route path="/research" element={<PublicationSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </main>
  );
}

// Helper component to auto-scroll to top when route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";

    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
          behavior,
          block: "start",
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, behavior });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useLayoutEffect(() => {
    document.documentElement.classList.remove("app-preloading");
  }, []);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      document.getElementById("boot-loader")?.classList.add("boot-loader-leaving");
    }, 2500);
    const removeTimer = window.setTimeout(() => {
      document.getElementById("boot-loader")?.remove();
    }, 3000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-background relative overflow-x-hidden">
        
        {/* Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <AnimatedRoutes />

        {/* System Footer */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}
