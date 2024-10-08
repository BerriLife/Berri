"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image for optimized images

export const FlipImages = ({
  images,
  duration = 3000,
  className,
}: {
  images: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const image = images[images.indexOf(currentImage) + 1] || images[0];
    setCurrentImage(image);
    setIsAnimating(true);
  }, [currentImage, images]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <div className={`relative ${className}`} style={{ width: "100%", height: "100px" }}>
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.div
          key={currentImage}
          initial={{
            opacity: 1,
            y: "35%", // Start from below (offscreen)
          }}
          animate={{
            opacity: 1,
            y: "0%", // Move to the center
          }}
          exit={{
            opacity: 0,
            y: "-35%", // Exit upwards (roll up effect)
            filter: "blur(8px)", // Add blur effect
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8, // Adjust duration for smoother rolling effect
          }}
          className="absolute inset-0 flex justify-center items-center" // Ensures content is centered
        >
          <Image
            src={currentImage} // The current image being animated
            alt="Animated Image"
            width={1000} // Adjust the width according to your design
            height={150} // Adjust the height according to your design
            className="object-contain max-w-full" // Make the image responsive and centered
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
