"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function TopMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed top-4 left-4 z-50 p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu overlay */}
      {open && (
        <div className="fixed top-16 left-4 z-40 w-56 bg-indigo-900 text-white rounded-xl shadow-lg p-4 flex flex-col space-y-3">
          <Link href="/" className="hover:text-cyan-300">Home</Link>
          <Link href="/services" className="hover:text-cyan-300">Services</Link>
          <Link href="/dashboard" className="hover:text-cyan-300">Dashboard</Link>
          <Link href="/about" className="hover:text-cyan-300">About</Link>
          <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
        </div>
      )}
    </>
  );
}
