import React, { useState } from 'react'
import { motion } from "framer-motion";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="p-4 shadow-md bg-white sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
               <a href="/">
                 <h1 className="text-xl sm:text-2xl font-bold text-blue-600">Varun Gehlot</h1>
               </a>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-md border border-gray-300"
                >
                    ☰
                </button>
                <div className="hidden md:flex space-x-6 font-medium">
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#skills" className="hover:text-blue-600">Skills</a>
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </div>
            </nav>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white shadow-md mt-2 rounded-lg p-4 space-y-4 text-center font-medium"
                >
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Projects</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Skills</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">About</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contact</a>
                </motion.div>
            )}
        </header>
    )
}



// Varun | MERN & React Native Dev
