"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function CorporateSolutionsForm() {
  const [errors, setErrors] = useState({
    companyName: "",
    companyAuthorityName: "",
    companyAuthorityContact: "",
    companyAuthorityEmail: "",
    companyAuthorityDesignation: "",
  });

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="w-full rounded-none shadow-input bg-white"
      style={{ fontFamily: "var(--maxima-nouva-bold)" }}
    >
      <form className="my-8" onSubmit={handleSubmit}>
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
            <span className="text-primary">*</span>
          </Label>
          <Input
            id="companyAuthorityName"
            placeholder="Name of Authority Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
            required
            onBlur={handleBlur}
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm ml-2">
              {errors.companyAuthorityName}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="companyAuthorityContact">
            Company Authority Contact Number{" "}
            <span className="text-primary">*</span>
          </Label>
          <Input
            id="companyAuthorityContact"
            placeholder="Contact Number of Authority Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
            required
            onBlur={handleBlur}
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm ml-2">
              {errors.companyAuthorityContact}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="companyAuthorityEmail">
            Company Authority Email{" "}
            <span className="text-primary">*</span>
          </Label>
          <Input
            id="companyAuthorityEmail"
            placeholder="Email Address of Contact Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
            required
            onBlur={handleBlur}
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm ml-2">
              {errors.companyAuthorityEmail}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="companyAuthorityDesignation">
            Company Authority Designation{" "}
            <span className="text-primary">*</span>
          </Label>
          <Input
            id="companyAuthorityDesignation"
            placeholder="Designation of Contact Person"
            style={{ fontFamily: "var(--maxima-nouva-normal)" }}
            type="text"
            required
            onBlur={handleBlur}
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm ml-2">
              {errors.companyAuthorityDesignation}
            </span>
          )}
        </LabelInputContainer>

        <Button
          className="w-full"
          type="submit"
          style={{ fontFamily: "var(--maxima-nouva-normal)" }}
        >
          Request a Call Back
        </Button>
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