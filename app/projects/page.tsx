"use client";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";
import { useState } from "react";
import Image from "next/image";

import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import xuolingo from "./images/xuolingo.png";
import portfolio from "./images/portfolio.png";
import journalApp from "./images/journalApp.png";
import momentum from "./images/momentum.png";

import { Separator } from "@radix-ui/react-separator";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = [
  {
    id: "01",
    title: "Momentum",
    category: "Full Stack",
    description:
      "Momentum is a local-first habit tracker.Track daily habits, streaks, milestones, notes, analytics, and personal progress in a single browser-based app. It keeps your data private and local by default, while still supporting JSON backup and restore flows for moving between devices.",
    stack: ["Nextjs 15","React 18", "Tailwind CSS", "TypeScript", "date-fns","jsPDF","lucide-react"],
    image: momentum,
    githubUrl: "https://github.com/Memoona-tech/momentum",
    demoUrl: "https://firstmomentum.vercel.app",
  },
  {
    id: "02",
    title: "Xuolingo",
    category: "Full Stack",
    description:
      "Duolinog-inspired language learning app. To give the app a unique touch, an AI-tutor is integrated to help users learn languages in a more interactive way.",
    stack: ["React / Nextjs", "Tailwind CSS", "TypeScript"],
    image: xuolingo,
    githubUrl: "https://github.com/Memoona-tech/xuolingo",
    demoUrl: "https://xuolingo.vercel.app/",
  },
  {
    id: "03",
    title: "Memoona's Portfolio",
    category: "Full Stack",
    description:
      "A personal portfolio website to showcase my skills, projects, and experiences. It is designed to be visually appealing and user-friendly.",
    stack: ["React / Nextjs", "Tailwind CSS", "TypeScript"],
    image: portfolio,
    githubUrl: "https://github.com/Memoona-tech/",
    demoUrl: "https://memoonasaleem.vercel.app/",
  },
  {
    id: "04",
    title: "Journal App",
    category: "Full Stack",
    description:
      "A cute journaling app to keep your secrets inside a 4-digit PIN-ed locker",
    stack: ["React / Nextjs", "Tailwind CSS", "TypeScript"],
    image: journalApp,
    githubUrl: "https://github.com/Memoona-tech/JournalApp",
    demoUrl: "https://my-journal-app-eight.vercel.app/",
  },
  {
    id: "05",
    title: "Notes App",
    category: "Full Stack",
    description:
      "A simple and aesthetic notes app that allows users to create, edit, and delete notes. Using the cool features of JavaScript to make it happen while using HTML and CSS to make it interactive for user.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: project1,
    githubUrl: "https://github.com/Memoona-tech/Notes-App",
  },
  {
    id: "06",
    title: "Analog Clock",
    category: "Full Stack",
    description:
      "A simple and clean analogue clock that displays the current time. Using mathematical formula to measure the actual time but making it happen through JS, design provided by CSS.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: project2,
    githubUrl: "https://github.com/Memoona-tech/Analog-Clock",
  },
  {
    id: "07",
    title: "Weather App",
    category: "Full Stack",
    description:
      "Weather app that allows users to search for the weather of any city in the world. Huge role of API and functionality of JavaScript combined with the beauty oh HTML and CSS. ",
    stack: ["HTML", "CSS", "JavaScript" , "API"],
    image: project3,
    githubUrl: "https://github.com/Memoona-tech/Weather-App",
  },
  {
    id: "08",
    title: "Calculator App",
    category: "Full Stack",
    description:
      "A simple and clean calculator app that performs basic arithmetic operations on interger as well as floating point numbers.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: project4,
    githubUrl: "https://github.com/Memoona-tech/Calculator",
  },
];

const ProjectPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {Projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightPurple/20 hover:border-lightPurple/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-stretch md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-[46%] order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-4 mt-4 md:mt-0 pr-3">
                          <div>
                            <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                              {project?.id}
                            </h2>

                            <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightPurple hoverEffect">
                              {project?.category} Project
                            </h3>
                            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal py-4 ">
                              {project?.description}
                            </p>

                            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 text-lightPurple/80">
                              {project?.stack?.map((item, index) => (
                                <li
                                  key={index}
                                  className="text-xs md:text-sm lg:text-base leading-none list-none"
                                >
                                  {item}
                                  {index !== project?.stack?.length - 1 && (
                                    <span className="ml-2">•</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                            <Separator className="bg-gray-700 h-px my-4" />

                            <div className="flex items-center gap-3">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      asChild
                                      size="icon"
                                      className="items-center text-lightPurple border border-hoverColor/30 hover:bg-lightPurple/10 hover:border-lightPurple/70 cursor-pointer"
                                    >
                                      <Link
                                        href={project?.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.title} GitHub repository`}
                                      >
                                        <Github />
                                      </Link>
                                    </Button>
                                  </TooltipTrigger>
                                </Tooltip>
                              </TooltipProvider>

                              {project.demoUrl && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        asChild
                                        size="icon"
                                        className="items-center text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-400/70 cursor-pointer"
                                      >
                                        <Link
                                          href={project.demoUrl}
                                          target="_blank"
                                          rel="noreferrer"
                                          aria-label={`Open ${project.title} live demo`}
                                        >
                                          <ExternalLink />
                                        </Link>
                                      </Button>
                                    </TooltipTrigger>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* image */}

                      <div className="w-full md:w-[54%] order-1 md:order-2">
                        <div className="relative h-64 md:h-[420px] lg:h-[460px] bg-gray-700 rounded-lg overflow-hidden">
                          {project.demoUrl ? (
                            <Link
                              href={project.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="block h-full w-full cursor-pointer"
                              aria-label={`Open ${project.title} live demo`}
                            >
                              <Image
                                src={project?.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-200 hover:scale-[1.02]"
                              />
                            </Link>
                          ) : (
                            <Image
                              src={project?.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 ">
            <CarouselPrevious className="rounded-md bg-transparent 
            border border-lightPurple/50 
            hover:bg-lightPurple/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
            <CarouselNext className="rounded-md bg-transparent 
            border border-lightPurple/50 
            hover:bg-lightPurple/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default ProjectPage;
