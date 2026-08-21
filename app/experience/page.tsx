import PageLayout from "@/components/PageLayout";
import Title from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { experienceData } from "@/Constants/index";

import React from "react";

const experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col w-full py-5 md:py-10">
      <PageLayout>
        <Title>Experience I have</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-6 
              bg-lightPurple/5 border
              border-lightPurple/20 
              hover:border-lightPurple/30 
              rounded-lg shadow-md group hover:shadow-lg gap-2.5 hoverEffect"
            >
              <div className="w-full flex ">
                <p className="text-5xl font-extrabold               
                              text-outline text-transparent 
                              group-hover:text-outline-hover 
                              hoverEffect
                            ">
                  {item?.id}
                </p>
              </div>
              <h2 className="font-semibold text-white">{item?.title}</h2>
              <p className="text-sm md:text-base pb-2">{item?.description}</p>
            <Separator className="bg-white/20"/>
            </div>
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default experience;
