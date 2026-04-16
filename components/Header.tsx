"use client";
import { usePathname } from "next/navigation";
import Container from "./container";
import Logo from "./Logo";
import { navbarData } from "@/Constants";
import Link from "next/link";
import { TbMenu2 } from "react-icons/tb";
import Sidebar from "./sidebar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className="border-b
     border-b-hoverColor/50
      bg-bodyColor
       text-white
       sticky top-0 z-50"
    >
      <Container
        className="py-5 flex
       items-center
        justify-between"
      >
        <Logo title="Memoona" subtitle="." />

        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {navbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect relative group
                overflow-x-hidden
            ${pathname === item?.href && "text-hoverColor"}`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}

          <Link
            href="Memoona-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire Me
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"
        >
          <TbMenu2 className="text-3xl" />
        </button>
      </Container>
      {isSidebarOpen && (
        <div className="md:hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            pathName={pathname}
          />

        </div>
      )}
    </header>
  );
};
export default Header;
