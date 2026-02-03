import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 98, yearsOfExperience: 8 },
  { name: "Next.js", category: "frontend", level: 95, yearsOfExperience: 5 },
  { name: "TypeScript", category: "frontend", level: 90, yearsOfExperience: 7 },
  { name: "Vue.js", category: "frontend", level: 75, yearsOfExperience: 5 },
  { name: "Angular", category: "frontend", level: 89, yearsOfExperience: 4 },
  { name: "JavaScript", category: "frontend", level: 96, yearsOfExperience: 14 },
  { name: "HTML5/CSS3", category: "frontend", level: 99, yearsOfExperience: 14 },
  { name: "Tailwind CSS", category: "frontend", level: 87, yearsOfExperience: 4 },
  { name: "Redux/Zustand", category: "frontend", level: 70, yearsOfExperience: 6 },
  { name: "Framer Motion", category: "frontend", level: 82, yearsOfExperience: 3 },

  // Backend
  { name: "Node.js", category: "backend", level: 98, yearsOfExperience: 9 },
  { name: "Express.js", category: "backend", level: 87, yearsOfExperience: 9 },
  { name: "Python", category: "backend", level: 77, yearsOfExperience: 7 },
  { name: "Django", category: "backend", level: 65, yearsOfExperience: 5 },
  { name: "FastAPI", category: "backend", level: 54, yearsOfExperience: 3 },
  { name: "Java", category: "backend", level: 98, yearsOfExperience: 5 },
  { name: "C#/.NET", category: "backend", level: 81, yearsOfExperience: 4 },
  { name: "GraphQL", category: "backend", level: 67, yearsOfExperience: 4 },
  { name: "REST APIs", category: "backend", level: 99, yearsOfExperience: 10 },

  // Mobile
  { name: "React Native", category: "mobile", level: 90, yearsOfExperience: 6 },
  { name: "Flutter", category: "mobile", level: 88, yearsOfExperience: 3 },
  { name: "Expo", category: "mobile", level: 57, yearsOfExperience: 5 },
  { name: "iOS/Android", category: "mobile", level: 78, yearsOfExperience: 6 },

  // Database
  { name: "PostgreSQL", category: "database", level: 90, yearsOfExperience: 8 },
  { name: "MongoDB", category: "database", level: 87, yearsOfExperience: 7 },
  { name: "MySQL", category: "database", level: 98, yearsOfExperience: 9 },
  { name: "Redis", category: "database", level: 74, yearsOfExperience: 5 },
  { name: "Firebase", category: "database", level: 89, yearsOfExperience: 6 },
  { name: "Supabase", category: "database", level: 92, yearsOfExperience: 2 },

  // DevOps & Tools
  { name: "Docker", category: "devops", level: 90, yearsOfExperience: 6 },
  { name: "Kubernetes", category: "devops", level: 42, yearsOfExperience: 3 },
  { name: "AWS", category: "devops", level: 84, yearsOfExperience: 7 },
  { name: "Azure", category: "devops", level: 61, yearsOfExperience: 4 },
  { name: "CI/CD", category: "devops", level: 75, yearsOfExperience: 6 },
  { name: "Git", category: "devops", level: 99, yearsOfExperience: 12 },
  { name: "Linux", category: "devops", level: 87, yearsOfExperience: 10 },
  { name: "Nginx", category: "devops", level: 77, yearsOfExperience: 7 },

  // AI & ML
  { name: "OpenAI API", category: "ai", level: 92, yearsOfExperience: 2 },
  { name: "LangChain", category: "ai", level: 67, yearsOfExperience: 2 },
  { name: "Claude API", category: "ai", level: 88, yearsOfExperience: 1 },
  { name: "TensorFlow", category: "ai", level: 89, yearsOfExperience: 3 },
  { name: "PyTorch", category: "ai", level: 64, yearsOfExperience: 2 },
  { name: "Machine Learning", category: "ai", level: 77, yearsOfExperience: 3 },
  { name: "Prompt Engineering", category: "ai", level: 89, yearsOfExperience: 2 },

  // Marketing Digital
  { name: "Meta Ads", category: "marketing", level: 90, yearsOfExperience: 5 },
  { name: "Google Ads", category: "marketing", level: 67, yearsOfExperience: 5 },
  { name: "SEO", category: "marketing", level: 78, yearsOfExperience: 8 },
  { name: "Google Analytics", category: "marketing", level: 55, yearsOfExperience: 7 },
  { name: "Meta Business Suite", category: "marketing", level: 56, yearsOfExperience: 5 },
  { name: "Email Marketing", category: "marketing", level: 76, yearsOfExperience: 6 },

  // Other
  { name: "Agile/Scrum", category: "other", level: 98, yearsOfExperience: 8 },
  { name: "UI/UX Design", category: "other", level: 89, yearsOfExperience: 10 },
  { name: "Testing (Jest/Cypress)", category: "other", level: 64, yearsOfExperience: 6 },
  { name: "Hardware/PC Building", category: "other", level: 97, yearsOfExperience: 12 },
];

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter((skill) => skill.category === category);
};

export const getFeaturedSkills = () => {
  return skills.filter((skill) => skill.level >= 90);
};
