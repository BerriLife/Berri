"use client";
import { AccordionDemo } from "@/components/accordian";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import { HeroSection } from "@/components/hero-section";
import { MarqueeDemo } from "@/components/moving-card";
import { NavBar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const items = [
    {
      image: "/images/landing-page/cards/card1.png",
      service: "/images/landing-page/service/service1.png",
      text: "Instant support whenever you need it. Chat with professionals 24/7 or 15mins-focused call sessions. It's like having a personal wellness coach-confidential, secure, and right at your fingertips. Whether it's work stress, life balance, or just needing someone to listen, Berri Buddies are here to make you feel heard and supported, anytime.",
      link: "https://example.com",
    },
    {
      image: "/images/landing-page/cards/card2.png",
      service: "/images/landing-page/service/service2.png",
      text: "Share your thoughts, ask questions, or vent in a completely anonymous forum. Whether it's work stress, personal struggles, or just something on your mind, Talk Berri is your private, safe space to connect with others from your organization. It's all about real, honest conversations without fear of judgment-because sometimes, just talking helps. Your identity is protected, and your voice matters.",
      link: "https://example.com",
    },
    {
      image: "/images/landing-page/cards/card3.png",
      service: "/images/landing-page/service/service3.png",
      text: "A fresh perspective delivered to you every day. Berri Daily Insights offers quick tips, mindset shifts, and thoughtful prompts to help you manage stress, boost your well-being, and change how you approach life's challenges. It's your daily mental boost-easy, actionable, and designed to keep you feeling balanced and in control. Swipe through daily insights and make them part of your routine.",
      link: "https://example.com",
    },
    {
      image: "/images/landing-page/cards/card4.png",
      service: "/images/landing-page/service/service4.png",
      text: "Stay ahead with weekly insights on mental wellness, personal growth, and tips to manage daily challenges. Delivered straight to your inbox, our newsletter covers everything from stress management to building better habits and fostering positive change. It's not just al Madhav Aggarwal mental health-it's about shaping a healthier, more balanced life, one email at a time.",
      link: "https://example.com",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(
    "/images/landing-page/service/service1.png"
  );
  const [selectedText, setSelectedText] = useState(
    "Instant support whenever you need it. Chat with professionals 24/7 or 15mins-focused call sessions. It's like having a personal wellness coach-confidential, secure, and right at your fingertips. Whether it's work stress, life balance, or just needing someone to listen, Berri Buddies are here to make you feel heard and supported, anytime."
  );
  const [isService, setIsService] = useState(false);

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div className="bg-neutral-100 flex flex-col items-center">
        <div className="p-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-evenly items-center gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col justify-evenly">
              <div
                className="flex justify-start items-center"
                style={{ width: "50%", height: "20%" }}
              >
                <Image
                  src="/images/landing-page/misc/image2.png" // Replace with actual image path
                  alt="Berri illustration"
                  width={225}
                  height={100}
                  className="object-cover rounded-lg max-w-full"
                />
              </div>
              <div
                className="p-2 text-sm sm:text-lg md:text-xl"
                style={{ fontFamily: "var(--maxima-nouva-normal)" }}
              >
                At Berri, we aim to make mental wellness as normal and essential
                as going to the gym or grabbing a coffee. We believe that taking
                care of your mind should be a natural, daily part of life-
                accessible, stigma-free, and routine. By providing tools and
                guidance, we're helping to create a culture where mental health
                is valued, fostering a positive and safe environment for
                everyone, from the workplace to everyday life. Let's shift the
                mindset toward well-being for all.
              </div>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ width: "100%", height: "400px" }}
            >
              <Image
                src="/images/landing-page/misc/image1.png" // Replace with actual image path
                alt="Bottle illustration"
                width={400}
                height={400}
                className="object-cover rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="p-8 pt-16">
          <div className="relative flex flex-col justify-evenly items-center gap-6 max-w-6xl mx-auto">
            <div
              className="absolute bottom-[20%] left-[50%] right-[40%] mb-2"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src="/images/landing-page/misc/image3.png" // Static image
                alt="Services by Berri"
                width={375}
                height={150}
                className="object-cover rounded-lg max-w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-x-2">
              <div className="flex min-w-[50%] justify-center items-end">
                <HoverEffect
                  items={items}
                  setSelectedImage={setSelectedImage}
                  setSelectedText={setSelectedText}
                  setIsService={setIsService}
                />
              </div>
              <div className="flex flex-col justify-evenly items-start gap-y-4">
                <div
                  className="flex justify-start items-center ml-2 mt-2"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Image
                    src={selectedImage} // Selected image from the card hover effect
                    alt="Service Name"
                    width={120}
                    height={100}
                    className="object-cover max-w-full"
                  />
                </div>
                <div
                  className="p-2 text-sm sm:text-lg md:text-xl"
                  style={{ fontFamily: "var(--maxima-nouva-normal)" }}
                >
                  {selectedText}
                </div>
                <div
                  className={`justify-center items-center flex-row gap-x-6 ${
                    isService ? "flex" : "hidden"
                  }`}
                >
                  <Input
                    placeholder="Enter your email"
                    className="bg-white focus:border-primary text-sm sm:text-md p-4"
                    style={{ fontFamily: "var(--maxima-nova-bold)" }}
                  />
                  <Button
                    className="p-4 hover:bg-neutral-100 hover:text-black text-center text-sm sm:text-md hover:no-underline transition-colors duration-500"
                    style={{ fontFamily: "var(--maxima-nouva-normal)" }}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="faq-about" className="bg-white flex flex-col items-center mt-24">
        <div
          className="flex justify-center items-center"
          style={{ width: "50%", height: "100%" }}
        >
          <Image
            src="/images/landing-page/misc/image4.png" // Replace with actual image path
            alt="FAQ illustration"
            width={225}
            height={225}
            className="object-cover rounded-lg max-w-full"
          />
        </div>
        <div
          className="mt-5 p-2 text-2xl sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--maxima-nouva-extra-bold)" }}
        >
          Frequently asked <span className="text-primary">questions</span>
        </div>
        <div
          className="mt-5 mb-10 p-2 text-lg text-center sm:text-xl md:text-2xl text-secondary"
          style={{ fontFamily: "var(--maxima-nouva-normal)" }}
        >
          Everything you need to know about the Berri & what it offers.
        </div>
        <AccordionDemo />
      </div>

      <div className="mt-24">
        <div
          className="flex justify-center items-center"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/images/landing-page/misc/image5.png" // Replace with actual image path
            alt="Berri Location Illustration"
            width={1080}
            height={720}
            className="object-cover max-w-full"
          />
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
