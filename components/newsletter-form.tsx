"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { subscribeToNewsletterForm } from "@/lib/newsletter-form";

export default function NewsletterForm() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    companyName: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.currentTarget.userName.value;
    const email =  e.currentTarget.email.value;
    const companyName =  e.currentTarget.companyName.value;
    const companyAuthorityName =  e.currentTarget.companyAuthorityName?.value || null;
    const companyAuthorityEmail =  e.currentTarget.companyAuthorityEmail?.value || null;
    const companyAuthorityDesignation =  e.currentTarget.companyAuthorityDesignation?.value || null;

    // console.log("Form data:", name, email, companyName);
    if(name && email && companyName) {
      try{
        await subscribeToNewsletterForm({name, email, companyName, companyAuthorityName, companyAuthorityEmail, companyAuthorityDesignation});
        console.log("Subscribed to the newsletter");
        setError("Subscribed to the newsletter!");
      }catch(error){
        console.error("Error submitting the form:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    }else{
      setError("Name, email, and company name cannot be blank.");
    }
  };

  return (
    <div
      className="w-full rounded-none shadow-input bg-white"
      style={{ fontFamily: "var(--maxima-nouva-bold)" }}
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="userName">
            Nick Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="userName"
            placeholder="Your Name"
            type="text"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            required
            onBlur={handleBlur}
          />
          {errors.name && (
            <span className="text-red-500 text-sm ml-2">{errors.name}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">
            Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            placeholder="Your Email"
            type="email"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            required
            onBlur={handleBlur}
          />
          {errors.email && (
            <span className="text-red-500 text-sm ml-2">{errors.email}</span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="companyName">
            Company Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="companyName"
            placeholder="Your Company Name"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
            required
            onBlur={handleBlur}
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm ml-2">
              {errors.companyName}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="companyAuthorityName">
            Company Authority Name{" "}
            <span className="text-primary">(Optional)</span>
          </Label>
          <Input
            id="companyAuthorityName"
            placeholder="Name of Authority Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="companyAuthorityEmail">
            Company Authority Email{" "}
            <span className="text-primary">(Optional)</span>
          </Label>
          <Input
            id="companyAuthorityEmail"
            placeholder="Email Address of Contact Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="companyAuthorityDesignation">
            Company Authority Designation{" "}
            <span className="text-primary">(Optional)</span>
          </Label>
          <Input
            id="companyAuthorityDesignation"
            placeholder="Designation of Contact Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
          />
        </LabelInputContainer>

        <Button
          className="w-full"
          type="submit"
          style={{ fontFamily: "var(--maxima-nouva-normal)" }}
        >
          Get me on board
        </Button>
        {error && <div className="text-red-500 my-2">{error}</div>}
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
