"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Contact() {
  const contactInfo = {
    name: "Sagar NC",
    email: "sagarnc26@gmail.com",
    handle: "@Sagar_nc",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sagar-nc-642323294/",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/sagarnc/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sagar_nc_26/",
      },
      {
        name: "GitHub",
        url: "https://github.com/SAGARNC-26",
      },
    ],
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-10 md:px-12 lg:px-16">
      <div className="bg-gray-900 text-white rounded-3xl shadow-xl p-8 md:p-12 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Contact Me
          </h2>
          <span className="mt-2 sm:mt-0 text-sm text-gray-400">
            {contactInfo.handle}
          </span>
        </div>

        {/* Email */}
        <motion.div
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => openLink(`mailto:${contactInfo.email}`)}
        >
          <span className="text-lg font-medium text-blue-400 group-hover:underline">
            {contactInfo.email}
          </span>
          <ChevronRight className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.div>

        {/* Socials */}
        <div className="flex flex-wrap gap-4">
          {contactInfo.socials.map((social) => (
            <button
              key={social.name}
              onClick={() => openLink(social.url)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              title={social.name}
            >
              {social.name}
            </button>
          ))}
        </div>

        {/* About Me */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Hi, I'm{" "}
            <span className="font-semibold text-yellow-400">Sagar NC</span>, a
            full-stack developer and AI enthusiast with a passion for building
            intelligent, user-centric web applications. My journey began with
            mastering the fundamentals—
            <span className="text-blue-300">C, C++, and Python</span>—and has
            evolved into crafting scalable frontend experiences using
            <span className="text-blue-300">
              {" "}
              Next.js, Tailwind CSS, and React
            </span>
            .
          </p>

          <p>
            I actively solve competitive programming challenges on platforms
            like
            <span className="text-green-300"> LeetCode</span> and
            <span className="text-green-300"> CodeChef</span>, which sharpen my
            algorithmic thinking and problem-solving skills.
          </p>

          <p>
            Outside of coding, I enjoy watching movies, bingeing series,
            following cricket, and exploring emerging technologies. I'm always
            eager to learn, collaborate, and build something impactful.
            <span className="text-yellow-400 font-medium">
              {" "}
              Let's connect and create something amazing together!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
