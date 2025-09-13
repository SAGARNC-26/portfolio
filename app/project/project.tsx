"use client";

import Image from "next/image";
import Omnifood from "@/public/Omnifood.png";
import Oasis from "@/public/Oasis.png";
import Natour from "@/public/Natour.png";
import Email from "@/public/Email.png";
//import Chatbot from "@public/FastAPI.png"; // ✅ add a proper image for chatbot

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "The Wild Oasis",
    description:
      "A luxury retreat website concept highlighting family heritage, cozy cabins, and a deep connection with nature in the Italian Dolomites.",
    image: Oasis, // ✅ directly reference the import
    buttons: [
      {
        label: "GitHub",
        href: "https://github.com/SAGARNC-26",
        style: "bg-gray-200 text-black hover:bg-gray-300",
      },
    ],
    tags: ["Next.js", "TailwindCSS", "Supabase"],
  },
  {
    id: 2,
    title: "Omnifood",
    description:
      "A responsive landing page for an AI-powered meal subscription service, built with modern HTML/CSS to showcase features, pricing, and customer trust.",
    image: Omnifood, // ✅
    buttons: [
      {
        label: "GitHub",
        href: "https://github.com/SAGARNC-26",
        style: "bg-gray-200 text-black hover:bg-gray-300",
      },
    ],
    tags: ["HTML", "CSS", "Responsive Design"],
  },
  {
    id: 3,
    title: "Natours.dev",
    description:
      "A fictional adventure tour booking platform built as part of a Node.js bootcamp project, featuring curated tours, pricing, and user flows.",
    image: Natour, // ✅
    buttons: [
      {
        label: "GitHub",
        href: "https://github.com/SAGARNC-26",
        style: "bg-gray-200 text-black hover:bg-gray-300",
      },
    ],
    tags: ["Node.js", "Express", "MongoDB", "JWT Auth"],
  },
  {
    id: 4,
    title: "Cold Email Generator",
    description:
      "A Streamlit-based app that scrapes job postings, extracts roles and required skills using Gemini AI, and generates personalized cold emails.",
    image: Email, // ✅ use dedicated image instead of Oasis
    buttons: [
      {
        label: "GitHub",
        href: "https://github.com/SAGARNC-26",
        style: "bg-gray-200 text-black hover:bg-gray-300",
      },
    ],
    tags: ["pandas", "Python", "Gemini AI", "streamlit"],
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-500 mt-2">
          Playground - Small MVP to Production Apps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <CardContent className="pt-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 items-start">
                <div className="flex gap-2">
                  {project.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      target="_blank"
                      className={`px-3 py-1.5 text-sm rounded-md font-medium transition ${btn.style}`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
