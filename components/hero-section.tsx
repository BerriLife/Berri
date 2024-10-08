import React from "react";
import { FlipImages } from "@/components/ui/flip-images";
import { Button } from "./ui/button";
import { WavyBackground } from "./ui/wavy-background";

export function HeroSection() {

  const images = [
    "/images/flip1.png",
    "/images/flip2.png",
    "/images/flip3.png",
    "/images/flip5.png",
    "/images/flip4.png",
    "/images/flip6.png",
    "/images/flip7.png",
    "/images/flip8.png",
  ];

  const waveColors = [
    "#a3e5ff",
    "#e4e8ff",
    "#e0fff4",
    "#ffd1e3",
  ]

  return (
    <div>
      <div className="h-[40rem] flex flex-col justify-evenly items-center mt-12 px-6">
          <FlipImages images={images} duration={2000} className="flex items-center"/>
          <div className="p-2 text-sm sm:text-lg md:text-xl max-w-full md:max-w-2xl text-center" style={{fontFamily: 'var(--maxima-nouva-normal)'}}>  
              Stress isn't selective. It touches everyone, every day. At Berri,
              we believe mental wellness should be as routine as going to the
              gym no stigma, no strings attached.
          </div>
          <div className="p-2">
            <Button className="p-2 sm:p-4 md:p-6 text-sm sm:text-md md:text-lg hover:text-black" style={{fontFamily: 'var(--maxima-nouva-normal)'}}>
              <a href="https://www.instagram.com/berri.life?igsh=bDRtN2JieXA1anQz&utm_source=qr" target="_blank" rel="noopener noreferrer">Join Our Community</a>
            </Button>
          </div>
          <WavyBackground
            colors={waveColors}
            waveWidth={100}
            speed="fast"
            waveOpacity={0.7}
            backgroundFill="white"
          />
      </div>
    </div>
  );
}
