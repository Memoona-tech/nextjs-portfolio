import { useOutsideClick } from "@/hooks/use-outside-click";
import { X } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { navbarData } from "@/Constants";
import Link from "next/link";
import SocialLinks from "./ui/socialLinks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pathName: string;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose, pathName }: Props) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-l
         border-l-hoverColor/50 shadow-xl transform ${
           isOpen ? "translate-x-0" : "translate-x-full"
         } 
         transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button
          className="hover:text-red-600 hoverEffect"
          aria-label="Close Sidebar"
          onClick={onClose}
        >
          <X />
        </button>
      </div>


      <nav className="flex flex-col px-5 gap-7 uppercase text-sm tracking-wide font-medium mt-2">
        <Logo title="Memoona" subtitle="." />


        {navbarData?.map((item) => (
          <Link
            className={`hover:text-hoverColor hoverEffect ${
              pathName === item?.href && "text-hoverColor"
            }`}
            key={item?.title}
            href={item?.href}
            onClick={onClose}
          >
            {item?.title}         
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

          <SocialLinks/>
          
      </nav>
    </div>
  );
};

export default Sidebar;
