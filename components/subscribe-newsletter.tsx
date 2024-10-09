"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { subscribeToNewsletter } from "@/lib/newsletter";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    if (email) {
      try {
        await subscribeToNewsletter({email});
        console.log("Subscribed to the newsletter");
        setError("Subscribed to the newsletter!"); // clear any previous errors on success
      } catch (error) {
        console.error("Error submitting the form:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    } else {
      setError("Email cannot be blank.");
    }
  };

  return (
    <>
      <div className="flex flex-col">
          <div className="flex flex-row gap-x-4">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-white focus:border-primary text-sm sm:text-md p-4"
                style={{ fontFamily: "var(--maxima-nova-bold)" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="p-4 hover:bg-neutral-100 hover:text-black text-center text-sm sm:text-md hover:no-underline transition-colors duration-500"
                style={{ fontFamily: "var(--maxima-nouva-normal)" }}
                onClick={handleSubscribe} // Fixed the function call here
                >
                Subscribe
              </Button>
          </div>
          <div className="p-2">
            {error && <div className="text-red-500 my-2">{error}</div>}
          </div>
      </div>
    </>
  );
}
