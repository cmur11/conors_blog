// import { useContext } from "react"
import React, { useContext } from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md-float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Conors Blog
            </span>
          </Link>
        </div>
        <div className="hidden md: float-left md:contents"></div>
      </div>
    </div>
  );
};

export default Header;
