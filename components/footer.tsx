import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-4 md:px-8">
      {/* Top part with logo and navigation */}
      <div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto my-auto border-b"
        style={{ fontFamily: "var(--maxima-nouva-bold)" }}
      >
        {/* Logo on the left */}
        <Link href="/" className="flex items-center hover:bg-neutral-100 p-2 rounded-xl mb-4 md:mb-0">
          <Image
            src="/images/logo.png" // Replace with actual path to the Berri logo
            alt="Berri Logo"
            width={70}
            height={30}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation links and social icons on the right */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/#faq-about" className="hover:bg-neutral-100 p-2 rounded-xl">
            About
          </Link>
          <Link href="/newsletter" className="hover:bg-neutral-100 p-2 rounded-xl">
            Newsletter
          </Link>
          <Link href="/corporate-solutions" className="hover:bg-neutral-100 p-2 rounded-xl">
            Corporate Solutions
          </Link>

          {/* Social media icons */}
          <div className="flex space-x-4">
            <Link href="https://linkedin.com/company/berrilife" target="_blank">
              <FaLinkedin className="h-8 w-8 text-primary hover:bg-neutral-100 p-2 rounded-xl"/>
            </Link>
            <Link href="https://www.instagram.com/berri.life?igsh=bDRtN2JieXA1anQz&utm_source=qr" target="_blank">
              <FaInstagram className="h-8 w-8 text-primary hover:bg-neutral-100 p-2 rounded-xl"/>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mt-6 text-sm text-neutral-600"
        style={{ fontFamily: "var(--maxima-nouva-normal)" }}
      >
        {/* Copyright text on the left */}
        <p className="mb-4 md:mb-0">© Copyright 2024, All Rights Reserved</p>
        {/* Privacy links on the right */}
        <div className="flex space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}