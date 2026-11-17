"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "./HomeBackground.css";

const GhostFibers = dynamic(() => import("./GhostFibers/GhostFibers"), {
  ssr: false,
});

export default function HomeBackground() {
  const [preferences, setPreferences] = useState<{
    dark: boolean;
    compact: boolean;
    reducedMotion: boolean;
  } | null>(null);

  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    const compact = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPreferences({
      dark: dark.matches,
      compact: compact.matches,
      reducedMotion: reducedMotion.matches,
    });
    update();
    const queries = [dark, compact, reducedMotion];
    queries.forEach((query) => query.addEventListener("change", update));
    return () => queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  if (!preferences) return null;

  return (
    <div className="home-fibers-background" aria-hidden="true">
      <GhostFibers
        glowColor="#e3e1e6"
        lineColor="#c8c4cf"
        secondaryColor="#b5b4bb"
        layers={3}
        twist={1.2}
        threads={preferences.compact ? 36 : 72}
        density={preferences.compact ? 0.45 : 0.7}
        fiberStyle="dots"
        depthOfField={0.85}
        hoverEffect="focus"
        intro={!preferences.reducedMotion}
        mouseInteraction={!preferences.compact && !preferences.reducedMotion}
        pulseOnClick={false}
        waves={1.1}
        spread={0.9}
        speed={0.2}
        particles={0.2}
        grain={0.015}
        dpr={1}
        lightMode={!preferences.dark}
        paused={preferences.reducedMotion}
      />
    </div>
  );
}
