"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  setSelectedImage,
  setSelectedText,
  setIsService,
  className,
}: {
  items: {
    image: string;
    service: string;
    text: string;
    link: string;
  }[];
  setSelectedImage: (image: string) => void;
  setSelectedText: (text: string) => void; 
  setIsService: any;// Function to update the selected image
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => {
            setSelectedImage(item.service); // Update selected image on click
            setSelectedText(item.text); // Update selected text on click
            if(item.image === "/images/landing-page/cards/card4.png") {
              setIsService(true);
            }else{
              setIsService(false);
            }
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image
              src={item.image}
              alt="Card Image"
              width={300}
              height={200}
              className="object-cover rounded-lg w-full h-auto"
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-4 overflow-hidden bg-white border-4 border-transparent dark:border-white/[0.2] group-hover:border-primary relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};
