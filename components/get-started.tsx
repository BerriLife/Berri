import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="relative">
      <div className="relative" style={{ width: "100%", height: "100%" }}>
        <Image
          src="/images/landing-page/misc/image6.jpg" // Replace with actual image path
          alt="Berri App Illustration"
          width={1080}
          height={720}
          objectFit="cover"
          className="object-cover w-full max-w-screen"
        />
        {/* Positioned Button */}
        <div className="absolute z-10 bottom-1/4 top-3/4 left-[38%]">
          <Link 
            href="/get-started" 
            className="px-4 py-2 md:px-6 md:py-3 text-center text-[8px] sm:text-base md:text-lg w-20 sm:w-32 md:w-44 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-neutral-100 transition-colors duration-200"
            style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
