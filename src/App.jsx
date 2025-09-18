import React from 'react';
import './App.css'
import { motion } from "framer-motion";
import Header from './Common/Header';
import Footer from './Common/Footer';

function App() {


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Header />


      <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-4"
        >
          Hi, I'm Varun 👋
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ✨ I'm a React Native & MERN Stack developer who loves building clean, responsive web and mobile apps. Skilled in React, Node, Express, MongoDB, and great at team collaboration. Always eager to learn and create impactful projects🚀. Focused on writing clean code and delivering user-friendly experiences.
        </p>
      </section>


      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">Projects🚀</h3>
          <div className="grid md:grid-cols-2 gap-8">

            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="public\Images\Myntra.png" alt="Myntra Clone" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Myntra Clone</h4>
              <p className="text-gray-600 mb-3">E-commerce website clone with product listing and cart features.</p>
              <a href="#" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="#" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>


            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="/Images/lee.jpeg" alt="Lee Clone" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lee Clone</h4>
              <p className="text-gray-600 mb-3">Clothing brand website clone with responsive design.</p>
              <a href="#" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="#" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>


            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="/Images/blinkit.png" alt="Blinkit Clone" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Blinkit Clone</h4>
              <p className="text-gray-600 mb-3">Grocery delivery app clone built with React & API integration.</p>
              <a href="#" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="#" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>


            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="/Images/packshift.png" alt="Packshift Clone" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Packshift Clone</h4>
              <p className="text-gray-600 mb-3">Logistics and courier service website clone.</p>
              <a href="https://packshiftclone.vercel.app/" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="https://github.com/Varun1023/Packshift-clone" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>


            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="/Images/Almond.png" alt="Almond Webpage" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Almond Webpage</h4>
              <p className="text-gray-600 mb-3">Landing page for almond products with clean UI.</p>
              <a href="#" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="#" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>


            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="/Images/moviefinder.png" alt="Movie Finder" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Movie Finder</h4>
              <p className="text-gray-600 mb-3">Search movies using a public API with React hooks.</p>
              <a href="https://movie-finder-ten-omega.vercel.app/" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="https://github.com/Varun1023/Movie-finder" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>


            <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6">
              <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                <img src="/Images/weather.png" alt="Weather App" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Weather App</h4>
              <p className="text-gray-600 mb-3">Weather forecast app using live API and responsive UI.</p>
              <a href="https://weather-app-iota-peach-62.vercel.app/" className="text-blue-600 font-medium mr-4">Live Demo</a>
              <a href="https://github.com/Varun1023/Weather-app" className="text-gray-800 font-medium">GitHub</a>
            </motion.div>

          </div>
        </div>
      </section>


      




      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10"> Skills🛠</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {["JavaScript", "React", "React Native", "Node.js", "Express.js", "Next.js", "MongoDB", "GitHub", "Tailwind CSS", "Bootstrap"]
              .map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white shadow-md rounded-xl p-4 font-medium"
                >
                  {skill}
                </motion.div>
              ))}
          </div>
        </div>
      </section>


      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6"> About Me🙋</h3>
          <p className="text-gray-700 text-lg">
            I'm an aspiring <span className="font-semibold">React Native</span> & <span className="font-semibold">MERN Stack</span> developer
            based in Jodhpur, Rajasthan. I love solving problems, learning new technologies,
            and building web apps that make an impact.I enjoy building
            responsive, modern, and user-friendly web applications while continuously
            learning new technologies to improve my skills. I am available for <span className="font-semibold">immediate joining</span>.
          </p>
        </div>
        <div className="certificates max-w-4xl mx-auto px-6 mt-[50px] text-center">
          <h1 className='text-[30px] font-bold  '>CERTIFICATES📜</h1>
          <img
            src="public\Images\certificate.jpg"
            alt="Certificate 1"
            className="m-[15px] w-[75%] mx-auto rounded-lg shadow-md"
          />
          <img
            src="public\Images\ethicalhacking.png"
            alt="Certificate 2"
            className="m-[15px] w-[75%] mx-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact 📬</h3>
          <p className="text-gray-700 mb-4">Feel Free to connect anytime🙌. Let's work together! You can reach me at:</p>
          <p className="text-lg font-medium">📧 varungehlot2310@gmail.com</p>
          <div className="mt-4 space-x-6">
            <a href="https://www.linkedin.com/in/varun-gehlot-19860231b/" className="text-blue-600 font-medium">LinkedIn</a>
            <a href="https://github.com/Varun1023" className="text-blue-600 font-medium">GitHub</a>
            <a href="https://www.instagram.com/varunnn_.23/?igsh=ZDRpNHhncHI1MXcx#" className="text-blue-600 font-medium">Instagram</a>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default App
