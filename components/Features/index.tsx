"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function Feature() {
  return (
    <div className="max-w-5xl justify-center item-center mt-10 mx-auto px-8">
      <HoverEffect items={legalServices} />
    </div>
  );
}

export const legalServices = [
  {
    title: "LegalIQ",
    description:
      "A software solution designed to solve legal problems and empower individuals by providing comprehensive legal information and resources.",
    link: "https://www.google.com",
  },
  {
    title: "Know your Rights",
    description:
      "Get informed about your legal rights and gain a deeper understanding of the legal system with our user-friendly platform.",
    link: "https://www.google.com"
  },
  {
    title: "Dashboard",
    description:
      "Access a centralized dashboard that provides a holistic view of your legal matters, allowing you to manage and track your cases efficiently.",
    link: "https://www.google.com"
  },
];
