import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <h1 className="text-xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
        Lazy<span className="font-semibold">Programmer</span>
      </h1>
    </Link>
  );
}
