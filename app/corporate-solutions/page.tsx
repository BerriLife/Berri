import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { NavBar } from "@/components/navbar";
import CardSkew from "@/components/skew-card";
import CorporateSolutionsForm from "@/components/corporate-solutions-form";
import Image from "next/image";
import Link from "next/link";
import { MarqueeDemo } from "@/components/moving-card";

export default function CorporateSolutions() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="mt-24 flex justify-evenly items-center flex-col md:flex-row max-w-6xl mx-auto">
        <div className="m-2 p-4 h-[] max-h-full flex flex-col justify-evenly items-start">
          <div
            className="p-2 max-h-fit"
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              src="/images/corporate-solutions/image2.png"
              alt="Heading Text"
              width={500}
              height={200}
              className="object-cover max-w-full"
            />
          </div>
          <div className="relative p-2">
            <Link
              href="#corporate-solutions-form"
              className="relative px-4 py-2 md:px-6 md:py-3 text-center text-[8px] sm:text-base md:text-lg w-20 sm:w-32 md:w-44 bg-primary text-white font-semibold rounded-xl shadow-md hover:bg-neutral-100 hover:text-black transition-colors duration-200"
              style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
            >
              Talk to us
            </Link>
          </div>
        </div>
        <div
          className="p-4 floating-image max-w-fit"
          style={{ width: "50%", height: "100%" }}
        >
          <Image
            src="/images/corporate-solutions/image1.png"
            alt="Corporate Solutions Illustration"
            width={350}
            height={350}
            className="object-cover max-w-full"
          />
        </div>
      </div>

      <div className="bg-neutral-100 py-24 flex flex-col items-center">
        <div
          className="m-5 mb-10 p-2 max-h-fit flex items-center justify-evenly"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/images/corporate-solutions/image3.png"
            alt="Heading Text"
            width={500}
            height={200}
            className="object-cover max-w-full flex justify-center items-center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-evenly items-center max-w-fit mx-auto">
          <CardSkew image="/images/corporate-solutions/cards/card1.png" />
          <CardSkew image="/images/corporate-solutions/cards/card2.png" />
          <CardSkew image="/images/corporate-solutions/cards/card3.png" />
          <CardSkew image="/images/corporate-solutions/cards/card4.png" />
        </div>
      </div>

      <div className="mt-12" id="corporate-solutions-form">
        <div
          className="mb-10 p-2 flex items-center justify-evenly"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/images/corporate-solutions/image4.png"
            alt="Heading Text"
            width={700}
            height={350}
            className="object-cover max-w-full flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly items-center max-w-6xl mx-auto mt-24">
          <div className="p-8">
            <div className="grid grid-cols-1 justify-evenly items-center max-w-6xl mx-auto">
              <div
                className="flex justify-start items-center"
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src="/images/corporate-solutions/image5.png" // Replace with actual image path
                  alt="Corporate Solutions Illustration"
                  width={400}
                  height={400}
                  className="object-cover max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="p-2 w-2/3 md:w-[40%]">
            <CorporateSolutionsForm />
          </div>
        </div>
      </div>

      <div className="h-[30rem] mt-24 bg-neutral-100 flex flex-col justify-evenly items-center">
        <div
          className="p-2 text-sm sm:text-lg md:text-xl"
          style={{ fontFamily: "var(--maxima-nouva-normal)" }}
        >
          Aiming to Empower Employees at Leading Companies Like
        </div>
        <MarqueeDemo />
        <div className="p-2 flex flex-col items-center">
          <div
            className="text-center text-sm sm:text-md md:text-lg"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
          >
            Inspired by the wellness-focused leadership at leading companies
            like these.
          </div>
          <div
            className="text-center text-sm sm:text-md md:text-lg"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
          >
            Berri is here to support the next wave of growth.
          </div>
        </div>
      </div>

      <div>
        <GetStarted />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
