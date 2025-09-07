
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Distributors", href: "/distributors" },
  { label: "Blogs", href: "/blogs" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-signal text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <Link href="/" className="font-mokoto text-lg tracking-wide">WILLRISE <span className="opacity-80">UNLIMITED</span></Link>
        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-80">{l.label}</Link>
          ))}
          <Link href="/contact" className="rounded-md bg-white/10 px-3 py-1.5 hover:bg-white/20">Contact</Link>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-white relative">
            <span className="block absolute -translate-y-1.5 h-0.5 w-5 bg-white"></span>
            <span className="block absolute translate-y-1.5 h-0.5 w-5 bg-white"></span>
          </span>
        </button>
      </div>

      {/* Fullscreen drawer styled like reference */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="mx-auto flex max-w-6xl items-start justify-between px-6 py-4 md:px-8">
            <Link href="/" onClick={() => setOpen(false)} className="font-mokoto">WILLRISE</Link>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg border border-white/40 p-2"
              aria-label="Close menu"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-white"></span>
                <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-white"></span>
              </span>
            </button>
          </div>

          <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-md flex-col items-stretch px-6 pt-8 md:px-0">
            <div className="mx-auto w-full space-y-6 text-center">
              {NAV_LINKS.map((l) => (
                <div key={l.href} className="px-4">
                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg tracking-[0.2em]">
                    {l.label.toUpperCase()}
                  </Link>
                  <div className="mx-auto h-px w-40 bg-white/10"></div>
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-lg bg-white/15 px-6 py-3 font-bicubik tracking-[0.2em] hover:bg-white/25"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Footer links inside drawer */}
            <div className="mt-auto flex flex-col items-center gap-6 pb-10">
              <div className="flex items-center gap-6 text-sm opacity-80">
                <Link href="/patents" onClick={() => setOpen(false)} className="underline underline-offset-4">Patents</Link>
                <Link href="/licensing" onClick={() => setOpen(false)} className="underline underline-offset-4">Licensing</Link>
              </div>
              <div className="flex items-center gap-5 opacity-80">
                <a href="#" aria-label="Instagram" className="h-5 w-5 rounded-full border border-white/40"></a>
                <a href="#" aria-label="X" className="h-5 w-5 rounded-full border border-white/40"></a>
                <a href="#" aria-label="YouTube" className="h-5 w-5 rounded-full border border-white/40"></a>
                <a href="#" aria-label="LinkedIn" className="h-5 w-5 rounded-full border border-white/40"></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
