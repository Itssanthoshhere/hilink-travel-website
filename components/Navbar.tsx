"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative z-30 py-5 flexBetween max-container padding-container">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-3 text-white transition border rounded-full border-white/10 bg-white/5 hover:bg-white/10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
      >
        <Image
          src="/menu.svg"
          alt=""
          width={32}
          height={32}
          aria-hidden="true"
          className="pointer-events-none"
        />
      </button>

      {isMenuOpen && (
        <div className="absolute inset-x-6 top-full z-20 mt-3 rounded-[32px] bg-slate-950 p-6 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="block px-4 py-3 transition-colors rounded-2xl regular-16 text-gray-50 hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              full
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
