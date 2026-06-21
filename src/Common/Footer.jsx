import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0F1B2D] text-center py-10 border-t border-[#1E2C45]">
      <p className="ft-mono text-[11px] uppercase tracking-[0.2em] text-[#5C7398] mb-2">// eof</p>
      <p className="text-sm text-[#9FB3D6]">
        © {new Date().getFullYear()} Varun Gehlot — Built with React &amp; Tailwind CSS
      </p>
    </footer>
  )
}