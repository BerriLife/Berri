import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

// Logos array to store images of companies
const logos = [
  {
    img: "/images/landing-page/logos/logo1.png", // Replace with actual logo image paths
    width: 150,
    height: 50,
  },
  {
    img: "/images/landing-page/logos/logo2.png", // Replace with actual logo image paths
    width: 150,
    height: 50,
  },
  {
    img: "/images/landing-page/logos/logo3.png", // Replace with actual logo image paths
    width: 150,
    height: 50,
  },
  {
    img: "/images/landing-page/logos/logo4.png", // Replace with actual logo image paths
    width: 150,
    height: 50,
  },
  {
    img: "/images/landing-page/logos/logo5.png", // Replace with actual logo image paths
    width: 150,
    height: 50,
  },
  {
    img: "/images/landing-page/logos/logo6.png", // Replace with actual logo image paths
    width: 150,
    height: 50,
  },
];

// LogoCard component to display each logo
const LogoCard = ({ img, width, height }: { img: string; width: number; height: number }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden",
      )}
    >
      <Image src={img} alt="Company Logo" width={width} height={height} className="flex items-center object-contain w-full h-auto" />
    </figure>
  );
};

// MarqueeDemo component for displaying the logos in a marquee effect
export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-100">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo, index) => (
          <LogoCard key={index} img={logo.img} width={logo.width} height={logo.height} />
        ))}
      </Marquee>
    </div>
  );
}
