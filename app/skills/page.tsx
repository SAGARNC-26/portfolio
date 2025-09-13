/*"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Cpu, Users } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript/TypeScript",
        "Tailwind CSS",

        "Next.js",
        "React",
      ],
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      category: "Backend & Systems",
      icon: <Cpu className="h-5 w-5 text-emerald-600" />,
      skills: ["C", "C++", "Python", "Git", "GitHub"],
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },

    {
      category: "Soft Skills",
      icon: <Users className="h-5 w-5 text-amber-600" />,
      skills: [
        "Communication",
        "Problem-Solving",
        "Adaptability",
        "Learning Agility",
        "Teamwork",
        "Creativity",
        "Focus",
      ],
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      category: "AI & Fullstack Engineering",
      icon: <Cpu className="h-5 w-5 text-purple-600" />,
      skills: [
        "LLM Providers (like ChatGPT)",
        "AI Agents",
        "Prompt engineering",
        "RAG (Retrieval-Augmented Generation)",
        "Hugging Face Transformers",
        "Supabase",
      ],
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-6xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-10 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-4 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-lg font-semibold">{section.category}</h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className={`rounded-lg px-4 py-2 text-sm font-medium border shadow-sm ${section.color} hover:shadow-md transition`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
*/
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Cpu, Users } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript/TypeScript",
        "Tailwind CSS",
        "Next.js",
        "React",
      ],
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      category: "Backend & Systems",
      icon: <Cpu className="h-5 w-5 text-emerald-600" />,
      skills: ["C", "C++", "Python", "Git", "GitHub"],
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      category: "Soft Skills",
      icon: <Users className="h-5 w-5 text-amber-600" />,
      skills: [
        "Communication",
        "Problem-Solving",
        "Adaptability",
        "Learning Agility",
        "Teamwork",
        "Creativity",
        "Focus",
      ],
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      category: "AI & Fullstack Engineering",
      icon: <Cpu className="h-5 w-5 text-purple-600" />,
      skills: [
        "LLM Providers (like ChatGPT)",
        "AI Agents",
        "Prompt engineering",
        "RAG (Retrieval-Augmented Generation)",
        "Hugging Face Transformers",
        "Supabase",
      ],
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1] as const, // ✅ cast as const
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const, // ✅ cast string literal
      },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as const }} // ✅ cast as const
      className="mx-auto w-full max-w-6xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-10 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-4 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-lg font-semibold">{section.category}</h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className={`rounded-lg px-4 py-2 text-sm font-medium border shadow-sm ${section.color} hover:shadow-md transition`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
