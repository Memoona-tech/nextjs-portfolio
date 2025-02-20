"use client";

import Container from "@/components/container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/photo";
import Statistics from "@/components/ui/statistics";


export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80 relative">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-7 text-center md:text-start">
          {/* Name & Profession */}
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Digital Assets trading expert
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">
              Hello, I&apos;m
            </h2>
            <h1 className="text-blue text-5xl md:text-7xl tracking-normal">
              ShaelCore
            </h1>
          </div>

          {/* Description */}
          <div className="w-full h-[100px] md:h-[80px] relative md:mt-6">
            <div className="absolute top-0 left-0 w-full h-auto">
              <HomeDescription />
            </div>
          </div>

          {/* Social Links & Statistics */}
          {/*<SocialLinks />*/}
          <Statistics />
        </div>

        {/* Profile Photo */}
        <Photo />
      </Container>
    </div>
  );
}
