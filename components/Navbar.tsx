"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
] as const;

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleClose = () => setOpen(false);

  const handleKeyDownToggle = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={handleClose}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          onClick={handleToggle}
          onKeyDown={handleKeyDownToggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3 w-5">
            {open ? (
              <>
                <span className="absolute left-0 top-1.5 h-0.5 w-full rotate-45 bg-ink" />
                <span className="absolute left-0 top-1.5 h-0.5 w-full -rotate-45 bg-ink" />
              </>
            ) : (
              <>
                <span className="absolute left-0 top-0 h-0.5 w-full bg-ink" />
                <span className="absolute left-0 top-1.5 h-0.5 w-full bg-ink" />
                <span className="absolute left-0 top-3 h-0.5 w-full bg-ink" />
              </>
            )}
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`border-t border-line bg-paper md:hidden ${open ? "block animate-fade-in" : "hidden"}`}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-4"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.14em] text-ink hover:bg-line/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onClick={handleClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
