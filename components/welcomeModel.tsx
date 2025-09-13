"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/nc.jpg";
import { motion } from "framer-motion";

interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactMe = () => {
    setIsOpen(false);
    window.location.href = "/chat?query=How%20can%20I%20contact%20you%3F";
  };

  const defaultTrigger = (
    <button
      onClick={() => setIsOpen(true)}
      className="rounded-2xl bg-black p-3 shadow-lg backdrop-blur-lg hover:bg-gray-900"
    >
      <Image src={logo} alt="Logo" width={50} height={50} />
      <span className="sr-only">Open Welcome Modal</span>
    </button>
  );

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl max-w-3xl w-full text-center overflow-y-auto max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6 px-4">
              <div className="text-left">
                <h2 className="text-4xl font-bold tracking-tight">
                  Welcome to AI Portfolio
                </h2>
                <p className="mt-2 text-silver-100 text-base">
                  My interactive AI portfolio experience
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-black p-2 text-white hover:bg-black/80"
              >
                <XIcon />
              </button>
            </div>

            {/* Logo */}
            <Image
              src={logo}
              alt="Welcome Image"
              width={100}
              height={100}
              className="mx-auto mb-6 rounded-full"
            />

            {/* Content Sections */}
            <div className="space-y-8 text-left px-6">
              <section className="bg-black rounded-2xl p-6 space-y-6">
                {/* What Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    What's Inside?
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    I'm so excited to present my{" "}
                    <strong>brand new AI Portfolio.</strong>
                    <br />
                    Whether you're a recruiter, a friend, family member, or just
                    curious, feel free to ask anything you want!
                  </p>
                </div>

                {/* Why Section */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Why This?
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    Traditional portfolios can be limiting.
                    <br />
                    They can't adapt to every visitor's specific needs.
                    <br />
                    My portfolio becomes{" "}
                    <strong>
                      exactly what you're interested in knowing about me and my
                      work.
                    </strong>
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-8 flex flex-col items-center px-6 pb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
              >
                Start Chating
              </button>
              <div
                className="mt-4 text-sm text-silver-600 cursor-pointer hover:underline text-center"
                onClick={handleContactMe}
              >
                If you love it, please share it! Feedback is always welcome.
                Contact me.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

// Inline icon to match lucide-react X
function XIcon() {
  return (
    <svg
      className="h-6 w-6"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
