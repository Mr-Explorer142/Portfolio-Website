import React, { useEffect, useState } from "react";

const phrases = ["Web applications with Laravel and React", "REST APIs", "clean interfaces"];

export function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setPhraseIndex(0);
      setText(phrases[0]);
      setDeleting(false);
      return undefined;
    }

    const phrase = phrases[phraseIndex];
    const delay = deleting ? 45 : text.length === phrase.length ? 1200 : 85;
    const timeout = window.setTimeout(() => {
      if (deleting) {
        if (text.length === 0) {
          setPhraseIndex((index) => (index + 1) % phrases.length);
          setDeleting(false);
        } else {
          setText((current) => current.slice(0, -1));
        }
      } else if (text.length === phrase.length) {
        setDeleting(true);
      } else {
        setText(phrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, phraseIndex, reducedMotion, text]);

  return (
    <>
      <span className="sr-only">Web applications with Laravel and React, REST APIs, clean interfaces</span>
      <span aria-hidden="true">
        {text}
        <span className="hero-cursor ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-0.5 bg-accent align-baseline" />
      </span>
    </>
  );
}
