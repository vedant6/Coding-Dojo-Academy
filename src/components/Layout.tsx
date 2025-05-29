"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Center “Secure!” */}
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
        <span className="text-green-400 font-bold uppercase tracking-wide">
          Secure!
        </span>
      </div>

      {/* Left Vertical “Stealth!” */}
      <div className=" fixed left-2 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left z-40">
        <span className="text-green-400 font-bold uppercase tracking-wide">
          Stealth!
        </span>
      </div>

      {/* Right Vertical “Syntax!” */}
      <div className=" fixed right-2 top-1/2 transform -translate-y-1/2 rotate-90 origin-right z-40">
        <span className="text-green-400 font-bold uppercase tracking-wide">
          Syntax!
        </span>
      </div>

      {/* Header & Nav */}
      <header className="bg-slate-900 text-slate-50 sticky top-0 z-30">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center">
            <Image
              src="/websiteLogo.png"
              alt="Coding Dojo Academy Logo"
              width={48}
              height={48}
            />
            <span className="ml-2 text-2xl font-bold text-amber-600">
              Coding Dojo Academy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <Link href="/courses" className="hover:text-amber-600">
              Courses
            </Link>
            <Link href="/about" className="hover:text-amber-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-amber-600">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <Bars3Icon
            className="h-8 w-8 text-amber-600 md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-50">
          <XMarkIcon
            className="h-8 w-8 text-amber-600 absolute top-4 right-4 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            Courses
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-2xl text-white"
          >
            Contact
          </Link>
        </div>
      )}

      {/* Page Content */}
      <main className="relative min-h-[80vh] pb-16">{children}</main>

      {/* Bottom Center Phrase */}
      <div className="w-full bg-amber-600 text-slate-900 text-center py-2 font-semibold uppercase tracking-wide">
        Code like a Ninja, Secure like a Cyber Warrior!
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto p-6 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Coding Dojo Academy. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="mailto:info@codingdojoacademy.com" className="hover:text-amber-600">
              <FaEnvelope size={20} />
            </a>
            <a href="https://wa.me/919250180808" className="hover:text-amber-600">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://facebook.com" className="hover:text-amber-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-amber-600">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-amber-600">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
