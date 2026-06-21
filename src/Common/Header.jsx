import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#D7DEE8]">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <a href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-2 w-2" title="Open to opportunities">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#6FAE7C] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6FAE7C]" />
          </span>
          <h1 className="ft-display text-lg sm:text-xl font-bold text-[#0F1B2D] group-hover:text-[#2F5FA8] transition-colors">
            Varun Gehlot
          </h1>
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-md border border-[#D7DEE8]"
        >
          <span className={`block h-0.5 w-5 bg-[#0F1B2D] transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[#0F1B2D] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-[#0F1B2D] transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ft-mono text-xs uppercase tracking-[0.15em] text-[#5C6B7E] hover:text-[#2F5FA8] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[#0F1B2D] text-white text-xs ft-mono uppercase tracking-[0.1em] hover:bg-[#2F5FA8] transition-colors"
          >
            Hire me
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#D7DEE8] bg-white px-6 py-6 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block ft-mono text-sm uppercase tracking-[0.1em] text-[#0F1B2D] py-3 border-b border-[#ECF1F7] last:border-b-0 hover:text-[#2F5FA8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}