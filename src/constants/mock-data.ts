import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Engineering",
    description: "Covers basic programming concepts including variables, control structures, functions, and problem-solving using a high-level language.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "BA201",
    name: "Principles of Marketing",
    department: "Business",
    description: "Introduces core marketing concepts such as market research, consumer behavior, branding, and digital marketing strategies.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PSY150",
    name: "General Psychology",
    department: "Social Sciences",
    description: "Explores fundamental psychological theories, human behavior, cognition, emotion, and mental processes.",
    createdAt: new Date().toISOString(),
  },
]