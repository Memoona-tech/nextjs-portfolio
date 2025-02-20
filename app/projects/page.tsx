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
// project2 from "./images/project2.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import project3 from "./images/project3.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import project4 from "./images/project4.png";
import { Separator } from "@radix-ui/react-separator";


const Projects = [
  {
    id: "01",
    title: "Crypto Hedge Portfolio",
    category: "Asset Management",
    description:
      "Manages a hedge portfolio of 6 accounts with a total of 10 crypto assets. The portfolio was designed to hedge against the volatility of the cryptocurrency market while turning in periodic profits.",
    //stack: ["HTML", "CSS", "JavaScript"],
    image: project1,
    //githubUrl: "https://github.com/Memoona-tech/Crypto-Hedge-Portfolio",
  },
];

/**
 * Component representing the Project Page.
 *
 * @component
 * @returns {JSX.Element} The rendered Project Page component.
 *
 * @example
 * // Usage example:
 * <ProjectPage />
 *
 * @description
 * The `ProjectPage` component renders a page layout containing a carousel of project cards.
 * Each card displays project details such as the project ID, category, description, and an image.
 * The carousel allows users to navigate through different projects.
 *
 * @remarks
 * - The component uses the `useState` hook to manage the current index of the carousel.
 * - The `handleSlideChange` function updates the current index when the carousel slide changes.
 * - The `Carousel` component is configured with options for alignment and looping.
 * - Each project card includes a link to the project's GitHub repository.
 *
 * @returns {JSX.Element} The rendered Project Page component.
 */
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
                <Card className="bg-bodyColor border-lightSky/20 hover:border-lightSky/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <div>
                            <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                              {project?.id}
                            </h2>

                            <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                              {project?.category} Project
                            </h3>
                            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal py-4 ">
                              {project?.description}
                            </p>
                            <Separator className="bg-gray-700 h-px my-4" />

                            
                          </div>
                        </div>
                      </div>
                      {/* image */}

                      <div className="w-full md:w-1/2 order-1 md:order-2 ">
                        <div className="relative h-64  md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project?.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
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
            border border-lightSky/50 
            hover:bg-lightSky/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
            <CarouselNext className="rounded-md bg-transparent 
            border border-lightSky/50 
            hover:bg-lightSky/10 
            hover:border-hoverColor/80 
            hoverEffect hover:text-white p-5"/>
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default ProjectPage;
