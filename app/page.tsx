"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import m1 from "@/public/me_avatar - Copy1.jpg";
import avatar from "@/public/avatar-landing.png";
import WelcomeModal from "@/components/welcomeModel";
import Chat from "@/app/api/Chat";
import sagar from "@/public/sagar.jpg";
import AIAgent from "@/components/AIAgent";

export default function Home() {
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.8 }, // ✅ fixed here
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 ">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        {/* Modal Trigger */}
        <div className="z-50">
          <WelcomeModal />
        </div>

        {/* Animated Text */}
        <motion.div
          variants={topElementVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <h2 className="text-xl sm:text-2xl font-medium text-zinc-50">
            Hey, I'm Sagar 👋
          </h2>
          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-100">
            AI Portfolio
          </h1>
        </motion.div>

        <div className="relative h-52 w-48 sm:h-72 sm:w-72 overflow-hidden rounded-full  flex items-center justify-center">
          <Image
            src={avatar}
            alt="Hero memoji"
            width={2000}
            height={2000}
            priority
            className="scale-[0.8] object-contain "
          />
        </div>
        <AIAgent />
      </div>
    </div>
  );
}
