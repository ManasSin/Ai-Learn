"use client";

import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Learn With US", href: "/learn" },
  { name: "Blogs", href: "/blog" },
];

const Header = () => {
  return (
    <header className="sticky max-w-7xl w-full mx-auto z-50 h-24 px-5 py-2 flex items-center border-b-gray-200/30 border-b-[.5px]">
      <nav className="min-w-full flex justify-between items-baseline">
        <div>
          <Link href="/">
            <span className="font-black text-2xl">Company</span>
          </Link>
        </div>
        <ul className="flex gap-8 items-center h-full">
          {navigation.map((link) => (
            <li key={link}>
              <Link href={link.href}>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-700">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <button className="py-1.5 px-6 bg-indigo-600 rounded-md">
            <p className="text-white">Log in</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
