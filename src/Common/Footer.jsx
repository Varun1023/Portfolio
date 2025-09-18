import React from 'react'

export default function Footer() {
    return (
        <footer className="py-6 text-center bg-gray-200 text-gray-600">
            © {new Date().getFullYear()} Varun | Built with React & TailwindCSS
        </footer>
    )
}
