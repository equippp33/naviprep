import { CodeXml, GitFork, Database, BrainCircuit } from 'lucide-react';

export const courseCategories = [
  {
    icon: CodeXml,
    title: "Software Courses",
    courses: [
      "Back-end Engineering",
      "Full Stack Engineering",
      "Front-end Engineering",
      "Test Engineering",
      "iOS Engineering",
      "Android Engineering",
      "Early Engineering",
    ],
  },
  {
    icon: GitFork,
    title: "Tech Management Courses",
    courses: [
        "Engineering Manager",
        "Technical Program Manager",
        "Product Manager (Tech)"
    ],
  },
  {
    icon: Database,
    title: "Data Courses",
    courses: [
        "Machine Learning",
        "Data Engineering",
        "Data Science",
        "Data Analyst & Business Analyst"
    ],
  },
  {
    icon: BrainCircuit,
    title: "Systems Courses",
    courses: [
        "Embedded Systems",
        "AWS Cloud Solutions Architect",
        "Site Reliability Engineering",
        "Cyber Security"
    ],
  },
];
