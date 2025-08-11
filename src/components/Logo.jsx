import React from "react";
import logoImage from "/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <img
        src={logoImage}
        alt="Logo"
        className="w-[30px] lg:w-[40px] h-[40px] lg:h-[50px]"
      />
      <h1 className="text-slate-500 text-xl lg:text-3xl font-bold">
        Lazy<span className="text-sky-400">Programmer</span>
      </h1>
    </Link>
  );
};

export default Logo;
