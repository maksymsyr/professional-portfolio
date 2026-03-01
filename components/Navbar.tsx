"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full mb-12">
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Maksym Syromolot
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:opacity-70 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>
          <Link href="/writing" className="hover:opacity-70 transition">
            Writing
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-sm" onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-4 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/writing" onClick={() => setOpen(false)}>
            Writing
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
