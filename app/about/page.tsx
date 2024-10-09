import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import AnimatedSVG from '@/components/animate-svg'; // Import the AnimatedSVG component

export default function About() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        <div className="z-0">
          <AnimatedSVG />
        </div>

        <div
          className="p-2 max-h-fit z-10 flex justify-center items-center"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/images/about/image1.png"
            alt="Heading Text"
            width={500}
            height={200}
            className="object-cover max-w-full"
          />
        </div>
      </div>

      <div className="mt-24">
        <GetStarted />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}