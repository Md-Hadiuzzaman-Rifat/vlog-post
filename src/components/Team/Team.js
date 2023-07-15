"use client";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Team = () => {
  const background = {
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="tracking-widest text-[500%] md:text-[800%] lg:text-[2000%] sm:font-[900] md:text-8xl text-white font-thin">
          TEAM
        </h1>
      </div>
    ),
  };

  const foreground = {
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-#1f1f1f" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900 mb-32"
    />
  );
};

export default Team;
