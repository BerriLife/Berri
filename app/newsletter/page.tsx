import NewsletterForm from "@/components/newsletter-form";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import CardSkew from "@/components/skew-card";
import Link from "next/link";

export default function Newsletter() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="mt-24 flex items-center flex-col md:flex-row max-w-6xl mx-auto">
        <div className="m-2 p-4 h-[400px] max-h-full flex flex-col justify-evenly items-start">
          <div className="p-2" style={{ width: "100%", height: "30%" }}>
            <Image
              src="/images/newsletter/image4.png"
              alt="Newsletter Illustration"
              width={1500}
              height={50}
              className="object-cover max-w-full"
            />
          </div>
          <div
            className="p-2"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
          >
            Come hang out with our awesome community and get monthly tips,
            expert advice, and inspiring stories sent directly to your inbox.
          </div>
          <div className="p-2">
            <Link
              href="#newsletter-form"
              className="px-4 py-2 md:px-6 md:py-3 text-center text-[8px] sm:text-base md:text-lg w-20 sm:w-32 md:w-44 bg-primary text-white font-semibold rounded-xl shadow-md hover:bg-neutral-100 hover:text-black transition-colors duration-200"
              style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="p-4 floating-image" style={{ width: "100%", height: "100%" }}>
          <Image
            src="/images/newsletter/image2.png"
            alt="Newsletter Illustration"
            width={350}
            height={350}
            className="object-cover max-w-full"
          />
        </div>
      </div>

      <div className=" bg-neutral-100 px-8 py-24 flex flex-col sm:flex-row justify-evenly items-center">
        <CardSkew image="/images/newsletter/cards/card1.png" />
        <CardSkew image="/images/newsletter/cards/card2.png" />
        <CardSkew image="/images/newsletter/cards/card3.png" />
      </div>

      <div
        className="flex flex-col sm:flex-row justify-evenly items-center max-w-6xl mx-auto mt-24"
        id="newsletter-form"
      >
        <div className="p-8">
          <div className="grid grid-cols-1 justify-evenly items-center max-w-6xl mx-auto">
            <div
              className="flex justify-start items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src="/images/newsletter/image1.png" // Replace with actual image path
                alt="Newsletter Illustration"
                width={400}
                height={400}
                className="object-cover max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="p-2 w-2/3 md:w-[40%]">
          <NewsletterForm />
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
