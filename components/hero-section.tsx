import React from "react";
import { FlipImages } from "@/components/ui/flip-images";
import { Button } from "./ui/button";
import { WavyBackground } from "./ui/wavy-background";

export function HeroSection() {
  const images = [
    "/images/landing-page/hero-section/flip1.png",
    "/images/landing-page/hero-section/flip2.png",
    "/images/landing-page/hero-section/flip3.png",
    "/images/landing-page/hero-section/flip5.png",
    "/images/landing-page/hero-section/flip4.png",
    "/images/landing-page/hero-section/flip6.png",
    "/images/landing-page/hero-section/flip7.png",
    "/images/landing-page/hero-section/flip8.png",
  ];

  const waveColors = ["#a3e5ff", "#e4e8ff", "#e0fff4", "#ffd1e3"];

  return (
    <div>
      <div className="h-screen max-h-full flex flex-col justify-evenly items-center mt-12 px-6">
        <FlipImages
          images={images}
          duration={2000}
          className="flex items-center"
        />
        <div
          className="p-2 text-sm sm:text-lg md:text-xl max-w-full md:max-w-2xl text-center"
          style={{ fontFamily: "var(--maxima-nouva-normal)" }}
        >
          Stress isn't selective. It touches everyone, every day. At Berri, we
          believe mental wellness should be as routine as going to the gym no
          stigma, no strings attached.
        </div>
        <div className="p-2">
          <Button
            className="px-4 py-2 md:px-6 md:py-6 text-center text-sm sm:text-base md:text-lg text-white font-semibold rounded-xl shadow-md hover:text-black transition-colors duration-200"
            style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
          >
            <a
              href="https://www.instagram.com/berri.life?igsh=bDRtN2JieXA1anQz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Community
            </a>
          </Button>
        </div>
        <WavyBackground
          colors={waveColors}
          waveWidth={100}
          speed="fast"
          waveOpacity={0.7}
          backgroundFill="white"
          canvasClassName="max-h-72"
        />
      </div>
    </div>
  );
}
