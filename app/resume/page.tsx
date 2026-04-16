"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { Briefcase, Calendar, GraduationCap, User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "About me", value: "about", icon: User },
];

const tabsContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Fullstack Developer",
        Description:
          "I build Fullstack Applications using",
        highlights: ["React/ Next.js", "TypeScript","Tailwind CSS", "HTML", "CSS"],
      },
      {
        role: "Technical/Programmatic Sills",
        Description:
          "Data Structures and Algorithms, System Designs.",
        highlights: ["Python", "C++"],
      },
      {
        role: "Related Coursework",
        Description: "Learnt the following subjects during my academic years:",
        highlights: ["Probability & Statistics", "Discrete Mathematics", "Computer Organization & Assembly Language","Calculus & Analytical Geometry", "Multivariate Calculus", "Operating Systems", "Compiler Construction", "Database Systems", "Computer Networks"]
      },
      {
        role: "Tools",
        Description:
          "Git & GitHub, VScode, Linux",
        highlights: ["Git & GitHub", "VScode", "Linux"],
      },
    ],
  },

  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelors of Computer Science",
        period: "On going",
        Description:
          "Currently persuing bachelors in CS and Robusting my skills in the emerging field of Computer Science and learning new technologies",
        highlights: ["Probability & Statistics", "Discrete Mathematics", "Computer Organization & Assembly Language","Calculus & Analytical Geometry", "Multivariate Calculus", "Operating Systems", "Compiler Construction", "Database Systems", "Computer Networks"]
    ,
      },
      {
        degree: "Intermediate in Computer Science",
        instituation: "Govt. Graduate College",
        description:
          "Started building my base in the emerging field of computer science",
        highlights: [
          "A+ Grade",
          "Stood at 1st position in the class",
          "Topper of the college (Computer Science Department)",
        ],
      },
      {
        degree: "Matriculation in Biology",
        Description:
          "Learnt a lot about different branches of Science such as Biology, Chemistry, Mathematics, Physics and many others",
        highlights: [
          "A+ Grade",
          "Topped the class",
        ],
      },
    ],
  },

  about: {
    title: "About Me",
    bio: "I am a Computer Science undergraduate with huge passion for software development and problem-solving.",
    hobbies: [
      "Badminton", "Chess" , "Traveling", "Sketching"
    ],
    interests: [
      "Software Development",
      "Open Source Contribution",
      "Artificial Intelligence",
      "Ethetical Hacking",
    ],
    Languages: [
      "Urdu (Native)",
      "English (Professional level)",
      "French (beginner)"
    ],
  },
};

const resumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-lightSky hover:bg-lightSky/60 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h[400px] ">
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.experience.title}
              </motion.h2>

              <div className="space-y-6 ">
                {tabsContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5 "
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item?.role}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.education.title}
              </motion.h2>

              <div className="space-y-6 ">
                {tabsContent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6  hover:border-lightSky/30 hover:bg-lightSky/5 "
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item?.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item?.instituation}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item?.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabsContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabsContent.about.bio}</p>
                  <div>
                      <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
                      <div className="flex flex-wrap gap-2">
                          {tabsContent.about.hobbies.map((hobby, i) => (
                            <Badge key={i} variant="secondary">
                              {hobby}
                            </Badge>
                          ))}
                      </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabsContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabsContent.about.Languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default resumePage;
