import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface props {
  className?: string;
  title: string;
  subtitle: string;
}

const Logo = ({title, subtitle }: props) => {
  return (
    <div className="text-2xl group">
      <Link href={"/"}>
        <h2
          className={cn(
            "font-semibold hover:text-hoverColor tracking-wide hoverEffect"
          )}
        >
          {title} <span className="text-lightPurple group-hover:text-white hoverEffect">{subtitle}</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
