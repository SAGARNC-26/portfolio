import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const portfolioData = {
  name: "Sagar nc",
  email: "sagarnc26@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-nc-642323294/",
  github: "https://github.com/SAGARNC-26",
  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "Next.js",
      "React",
    ],
    backend: [
      "C",
      "C++",
      "Python",
      "TypeScript",
      "Git",
      "GitHub",
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "FastAPI",
    ],
    ai_ml: [
      "LLM Providers (ChatGPT, Whisper, Groq, Mistral & Claude)",
      "AI Agents",
      "Prompt engineering",
      "Vector databases (Weaviate, Pinecone)",
      "RAG (Retrieval-Augmented Generation)",
      "Tool routing & calling",
      "Hugging Face Transformers",
    ],
    soft_skills: [
      "Communication",
      "Problem-Solving",
      "Adaptability",
      "Learning Agility",
      "Teamwork",
      "Creativity",
      "Focus",
    ],
  },
  projects: [
    {
      title: "The Wild Oasis",
      description:
        "A luxury retreat website concept highlighting family heritage, cozy cabins, and a deep connection with nature in the Italian Dolomites. Built with Next.js, TailwindCSS, and Supabase.",
      tags: ["Next.js", "TailwindCSS", "Supabase"],
    },
    {
      title: "Omnifood",
      description:
        "A responsive landing page for an AI-powered meal subscription service, built with modern HTML/CSS to showcase features, pricing, and customer trust.",
      tags: ["HTML", "CSS", "Responsive Design"],
    },
    {
      title: "Natours.dev",
      description:
        "A fictional adventure tour booking platform built as part of a Node.js bootcamp project, featuring curated tours, pricing, and user flows.",
      tags: ["Node.js", "Express", "MongoDB", "JWT Auth"],
    },
    {
      title: "FastAPI AI Chatbot",
      description:
        "A FastAPI-based chatbot integrated with Ollama LLMs, supporting form input and real-time WebSocket streaming for AI conversations.",
      tags: ["FastAPI", "Python", "AI"],
    },
  ],
  experience:
    "Sagar has experience in fullstack development, focusing on modern web technologies and increasingly in AI engineering, building interactive and intelligent applications.",
  about_me:
    "Sagar is a passionate developer with a strong focus on creating engaging and functional web applications. He's currently exploring the exciting world of AI to build innovative solutions.",
};
export async function POST(req) {
  try {
    const { message } = await req.json();
    const aboutMe = `
You are Sagar's AI assistant, designed to answer questions about his professional portfolio.
Please answer the user's questions based *only* on the information provided below. If the question cannot be answered from this information, kindly state that you don't have enough information or suggest asking about Sagar's skills, projects, or contact details. Be concise and helpful.

Here is Sagar's professional information:

Name: ${portfolioData.name}
Email: ${portfolioData.email}
LinkedIn: ${portfolioData.linkedin}
GitHub: ${portfolioData.github}
Education:pursuing B.E in Computer Science and Engineering at Siddaganga Institute of Technology,Tumkur(CGPA:8.89)
Location:chitradurga,karnataka
Mother Name:chandrakala
Mother occupation:housewife
Father Name:Nataraj
Father occupation:farmer
Age:20
DATE OF BIRTH:26-09-2005
Skills:
Frontend Development: ${portfolioData.skills.frontend.join(", ")}
Backend & Systems: ${portfolioData.skills.backend.join(", ")}
AI & Fullstack Engineering: ${portfolioData.skills.ai_ml.join(", ")}
Soft Skills: ${portfolioData.skills.soft_skills.join(", ")}

Projects:
${portfolioData.projects
  .map(
    (p) => `- ${p.title}: ${p.description} Technologies: ${p.tags.join(", ")}`
  )
  .join("\n")}

Experience: ${portfolioData.experience}
About Me: ${portfolioData.about_me}
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent([aboutMe, message]);

    const reply = result.response.text();
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ API Error:", error); // log to server terminal
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
