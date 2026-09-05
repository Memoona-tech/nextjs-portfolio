import GoogleAI from "../app/certifications/images/GoogleAI.png";
import AIWorkshop from "../app/certifications/images/workshop.png";

export const navbarData = [
  { title: "Home", href: "/" },
  { title: "Resume", href: "/resume" },
  { title: "Projects", href: "/projects" },
  { title: "Certifications", href: "/certifications" },
  { title: "Contact", href: "/contact" },
];

export const certificationsData = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    description: "",
    image: GoogleAI,
    date: "Aug 2025",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/Q5AUKJHN2XMA",
  },
  {
    title: "AI Replacing Coding Worshop",
    issuer: "WebDev Masters",
    image: AIWorkshop,
    description: "Add an optional description for this certification.",
    date: "Jan 2026",
    credentialUrl: "Credential ID WORKSHOP-176",
  },
];

export const statsData = [
  { num: 1.5, title: "Year(s) of Experience" },
  { num: 7, title: "Projects Completed" },
  { num: 6, title: "Technologies mastered" },
];
