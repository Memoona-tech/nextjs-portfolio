import React from "react";

const Footer = () => {
  return (
    <footer className="h-[50px] border-t border-lightPurple/20 py-2 shrink-0 bottom-0 bg-bodyColor">
      <div className="container mx-auto px-4 flex h-full items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Memoona Saleem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;