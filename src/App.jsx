import React from 'react';
import './App.css'
import { motion } from "framer-motion";
import Header from './Common/Header';
import Footer from './Common/Footer';

/* ---------- small shared pieces ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Eyebrow({ children, light = false }) {
  return (
    <span className={`ft-mono text-xs uppercase tracking-[0.2em] ${light ? 'text-[#9FB3D6]' : 'text-[#2F5FA8]'}`}>
      {children}
    </span>
  );
}

function IconArrowUpRight({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function IconCode({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconMail({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconPhone({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconCheck({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconAward({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function WindowChrome({ label }) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#ECF1F7] border-b border-[#D7DEE8]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#E5675B]/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#E8B34D]/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#6FAE7C]/70" />
      <span className="ml-2 ft-mono text-[11px] text-[#5C6B7E] truncate">{label}</span>
    </div>
  );
}

/* ---------- content ---------- */

// "Featured" = real, original, full-stack-ish projects — shown big, shown first.
const featuredProjects = [
  {
    title: 'QuickMark',
    tagline: 'QR Code Generator & Scanner',
    description:
      'Full-stack app to generate and scan QR codes, with a login flow for managing access to shared links.',
    image: '/Images/quickmark.png',
    alt: 'QuickMark',
    demo: 'https://quickmark-frontend.vercel.app/login',
    github: 'https://github.com/Varun1023/QuickMark-Backend',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['QR code generation', 'QR code scanning', 'User login & access control'],
  },
  {
    title: 'Movie Finder',
    tagline: 'Movie Search App',
    description:
      'Search and browse movies using a public API, built with React hooks for state management.',
    image: '/Images/moviefinder.png',
    alt: 'Movie Finder',
    demo: 'https://movie-finder-ten-omega.vercel.app/',
    github: 'https://github.com/Varun1023/Movie-finder',
    tags: ['React', 'Hooks', 'Public API'],
    features: ['Search by title', 'Public movie API integration', 'Hooks-based state management'],
  },
  {
    title: 'Weather App',
    tagline: 'Weather Forecast App',
    description: 'Live weather forecasts pulled from a public API, in a fully responsive interface.',
    image: '/Images/weather.png',
    alt: 'Weather App',
    demo: 'https://weather-app-iota-peach-62.vercel.app/',
    github: 'https://github.com/Varun1023/Weather-app',
    tags: ['React', 'Weather API'],
    features: ['Live weather API integration', 'Responsive interface', 'Built with React'],
  },
];

// "Other" = clone projects — kept, but smaller and lower on the page.
const otherProjects = [
  {
    title: 'Myntra Clone',
    description: 'E-commerce website clone with product listing and cart features.',
    image: '/Images/Myntra.png',
    alt: 'Myntra Clone',
    demo: 'https://myntra-beige-rho.vercel.app/',
    github: 'https://github.com/Varun1023/Myntra-clone',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Blinkit Clone',
    description: 'Grocery delivery app clone built with React & API integration.',
    image: '/Images/blinkit.png',
    alt: 'Blinkit Clone',
    demo: 'https://blinkit-one-eta.vercel.app/',
    github: 'https://github.com/Varun1023/Blinkit',
    tags: ['React', 'API Integration'],
  },
  {
    title: 'Lee Clone',
    description: 'Clothing brand website clone with responsive design.',
    image: '/Images/lee.jpeg',
    alt: 'Lee Clone',
    demo: 'https://lee-clone-ten.vercel.app/',
    github: 'https://github.com/Varun1023/Lee-clone',
    tags: ['React', 'Responsive Design'],
  },
  {
    title: 'Packshift Clone',
    description: 'Logistics and courier service website clone.',
    image: '/Images/packshift.png',
    alt: 'Packshift Clone',
    demo: 'https://packshiftclone.vercel.app/',
    github: 'https://github.com/Varun1023/Packshift-clone',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Oriflav-dryfruit',
    description: 'Landing page for almond products with clean UI.',
    image: '/Images/Almond.png',
    alt: 'Almond Webpage',
    demo: 'https://oriflav-dryfruits.vercel.app/',
    github: 'https://github.com/Varun1023/Oriflav-dryfruits',
    tags: ['React', 'Landing Page'],
  },
];

const skillGroups = [
  { label: 'Frontend', items: ['JavaScript', 'React', 'React Native', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB'] },
  { label: 'Tools', items: ['GitHub'] },
];

const totalSkills = skillGroups.reduce((sum, g) => sum + g.items.length, 0);
const totalProjects = featuredProjects.length + otherProjects.length;

const stats = [
  { value: `${totalProjects}+`, label: 'Projects built' },
  { value: `${totalSkills}+`, label: 'Technologies' },
  { value: '100%', label: 'Responsive design' },
  { value: 'Open', label: 'To work' },
];

// TODO: swap in your real certificate titles & issuing org once you confirm them —
// these are safe placeholders since I can't read the text inside the image files.
const certificates = [
  { title: 'Full Stack Development', note: 'Certificate of completion', src: '/Images/certificate1.jpg' },
  { title: 'Web Development', note: 'Certificate of completion', src: '/Images/certificate.jpg' },
  { title: 'Ethical Hacking', note: 'Certificate of completion', src: '/Images/ethicalhacking.png' },
];

const timeline = [
  { title: 'Started web development', note: 'Began learning HTML, CSS, JavaScript and React fundamentals.' },
  { title: 'Built clone projects', note: 'Practiced real-world UI by rebuilding Myntra, Blinkit, Lee and more.' },
  { title: 'Shipped original apps', note: 'Built QuickMark, Movie Finder and Weather App end-to-end.' },
  { title: 'Open to work', note: 'Currently looking for full-stack development opportunities.' },
];

const contactCards = [
  { label: 'Email', value: 'varungehlot2310@gmail.com', href: 'mailto:varungehlot2310@gmail.com', Icon: IconMail },
  { label: 'Phone', value: '+91 93523 05361', href: 'tel:+919352305361', Icon: IconPhone },
  { label: 'LinkedIn', value: 'varun-gehlot', href: 'https://www.linkedin.com/in/varun-gehlot-19860231b/', Icon: IconArrowUpRight },
  { label: 'GitHub', value: 'Varun1023', href: 'https://github.com/Varun1023', Icon: IconCode },
];

/* ---------- app ---------- */

function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#0F1B2D]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        body { font-family: 'Inter', system-ui, sans-serif; }
        .ft-display { font-family: 'Space Grotesk', sans-serif; }
        .ft-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#E3E9F1 1px, transparent 1px), linear-gradient(90deg, #E3E9F1 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <Eyebrow>// portfolio</Eyebrow>
            <h1 className="ft-display text-5xl sm:text-6xl font-bold mt-4 leading-[1.05]">
              Varun Gehlot
            </h1>
            <p className="ft-display text-xl text-[#2F5FA8] font-medium mt-3">
              Full Stack MERN Developer
            </p>
            <p className="text-[#5C6B7E] text-base leading-relaxed mt-5 max-w-xl">
              Building scalable web applications using React, Next.js, Node.js and MongoDB —
              with React Native for mobile when a project calls for it. Focused on clean code
              and interfaces people enjoy using.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[#0F1B2D] text-white text-sm font-semibold hover:bg-[#2F5FA8] transition-colors"
              >
                View projects
              </a>
              {/* TODO: point this at your resume file once it's ready, e.g. /Resume.pdf */}
              <a
  href="/Resume.pdf"
  download
  className="px-6 py-3 rounded-lg border border-[#0F1B2D] text-sm font-semibold hover:border-[#2F5FA8] hover:text-[#2F5FA8] transition-colors"
>
  Download Resume
</a>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#D7DEE8]">
              <div>
                <p className="ft-mono text-[11px] text-[#5C6B7E] uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium mt-1">Jodhpur, India</p>
              </div>
              <div>
                <p className="ft-mono text-[11px] text-[#5C6B7E] uppercase tracking-wide">Availability</p>
                <p className="text-sm font-medium mt-1">Open to opportunities</p>
              </div>
              <div>
                <p className="ft-mono text-[11px] text-[#5C6B7E] uppercase tracking-wide">Focus</p>
                <p className="text-sm font-medium mt-1">React Native &amp; MERN</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl bg-[#0F1B2D] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#16223A]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5675B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B34D]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6FAE7C]/80" />
              <span className="ml-2 ft-mono text-[11px] text-[#8B97AC]">about.js</span>
            </div>
            <pre className="ft-mono text-[13px] leading-relaxed p-6 overflow-x-auto text-[#C7D0DE]">
              <div><span className="text-[#7FA8D9]">const</span> developer = {'{'}</div>
              <div className="pl-4">name: <span className="text-[#E8A165]">'Varun Gehlot'</span>,</div>
              <div className="pl-4">role: <span className="text-[#E8A165]">'Full Stack MERN Developer'</span>,</div>
              <div className="pl-4">base: <span className="text-[#E8A165]">'Jodhpur, India'</span>,</div>
              <div className="pl-4">
                stack: [<span className="text-[#E8A165]">'React'</span>, <span className="text-[#E8A165]">'Next.js'</span>, <span className="text-[#E8A165]">'Node.js'</span>, <span className="text-[#E8A165]">'MongoDB'</span>],
              </div>
              <div className="pl-4">available: <span className="text-[#6FAE7C]">true</span>,</div>
              <div>{'}'};</div>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#D7DEE8] bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="ft-display text-3xl font-bold">{s.value}</p>
              <p className="ft-mono text-[11px] uppercase tracking-wide text-[#5C6B7E] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>// tech stack</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-12">Technical skills</h3>

          <div className="grid md:grid-cols-3 gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h4 className="ft-mono text-xs uppercase tracking-wide text-[#5C6B7E] mb-4 pb-3 border-b border-[#D7DEE8]">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 rounded-md bg-white border border-[#D7DEE8] text-sm font-medium"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>// featured projects</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-12">Selected work</h3>

          <div className="space-y-10">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 rounded-2xl border border-[#D7DEE8] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-56 md:h-full overflow-hidden bg-[#ECF1F7]">
                  <img src={project.image} alt={project.alt} className="w-full h-full object-cover" />
                </div>

                <div className="p-8 flex flex-col">
                  <Eyebrow>{project.tagline}</Eyebrow>
                  <h4 className="ft-display text-2xl font-bold mt-2 mb-3">{project.title}</h4>
                  <p className="text-sm text-[#5C6B7E] leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="ft-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-[#ECF1F7] text-[#2F5FA8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[#3B4658]">
                        <IconCheck className="w-4 h-4 mt-0.5 text-[#2F5FA8] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-5 mt-auto pt-4 border-t border-[#ECF1F7]">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F5FA8] hover:text-[#E8623A] transition-colors"
                    >
                      Live demo <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F1B2D] hover:text-[#E8623A] transition-colors"
                    >
                      <IconCode className="w-3.5 h-3.5" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>// journey</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-12">How I got here</h3>

          <div className="relative pl-8 border-l border-[#D7DEE8] space-y-10">
            {timeline.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-[#2F5FA8] ring-4 ring-[#F6F8FB]" />
                <h4 className="ft-display text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-[#5C6B7E] mt-1">{step.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>// about</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-10">About me</h3>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
            <p className="text-[#3B4658] text-base leading-relaxed">
              I'm a Full Stack MERN Developer based in Jodhpur, Rajasthan, focused on building
              scalable web applications and modern, responsive user experiences. I enjoy solving
              real problems and picking up new technologies as projects need them. I'm currently
              open to new opportunities and available for immediate joining.
            </p>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-[#ECF1F7] pb-3">
                <span className="ft-mono text-xs uppercase text-[#5C6B7E]">Based in</span>
                <span className="text-sm font-medium">Jodhpur, Rajasthan</span>
              </div>
              <div className="flex justify-between border-b border-[#ECF1F7] pb-3">
                <span className="ft-mono text-xs uppercase text-[#5C6B7E]">Stacks</span>
                <span className="text-sm font-medium">React · React Native · MERN</span>
              </div>
              <div className="flex justify-between border-b border-[#ECF1F7] pb-3">
                <span className="ft-mono text-xs uppercase text-[#5C6B7E]">Status</span>
                <span className="text-sm font-medium">Immediate joining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section id="other-projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>// other projects</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-12">Clone &amp; practice projects</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-[#D7DEE8] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <WindowChrome label={`${project.title.toLowerCase().replace(/\s+/g, '-')}.app`} />
                <div className="w-full h-36 overflow-hidden">
                  <img src={project.image} alt={project.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="ft-display text-base font-semibold mb-1.5">{project.title}</h4>
                  <p className="text-xs text-[#5C6B7E] leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center gap-4 pt-3 border-t border-[#ECF1F7]">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#2F5FA8] hover:text-[#E8623A] transition-colors"
                    >
                      Demo <IconArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F1B2D] hover:text-[#E8623A] transition-colors"
                    >
                      <IconCode className="w-3 h-3" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>// certifications</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-10">Certificates</h3>

          <div className="grid sm:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div key={cert.title} className="rounded-xl border border-[#D7DEE8] bg-[#F6F8FB] p-6">
                <IconAward className="w-6 h-6 text-[#2F5FA8] mb-4" />
                <h4 className="ft-display text-base font-semibold">{cert.title}</h4>
                <p className="text-xs text-[#5C6B7E] mt-1 mb-4">{cert.note}</p>
                <a
                  href={cert.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F5FA8] hover:text-[#E8623A] transition-colors"
                >
                  View certificate <IconArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARN IN PUBLIC */}
      <section id="challenge" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>// learn in public</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-10">Learn in public challenge</h3>

          <motion.div whileHover={{ y: -4 }} className="bg-white border border-[#D7DEE8] rounded-2xl p-8 shadow-sm">
            <h4 className="ft-display text-xl font-semibold mb-3">#LearnInPublic journey</h4>
            <p className="text-[#5C6B7E] leading-relaxed mb-6">
              I started a challenge on LinkedIn where I shared and taught the skills I picked up
              during my web development journey. It's become a record of my progress and
              consistency, and a way to help others learn while sharpening my own understanding.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://www.linkedin.com/in/varun-gehlot-19860231b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F5FA8] hover:text-[#E8623A] transition-colors"
              >
                See on LinkedIn <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Varun1023/Web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F1B2D] hover:text-[#E8623A] transition-colors"
              >
                <IconCode className="w-3.5 h-3.5" /> GitHub repo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>// contact</Eyebrow>
          <h3 className="ft-display text-3xl font-bold mt-3 mb-3">Get in touch</h3>
          <p className="text-[#5C6B7E] mb-12 max-w-xl mx-auto">
            Feel free to reach out anytime — happy to talk about roles, projects, or collaborations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {contactCards.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-xl border border-[#D7DEE8] p-5 text-left hover:border-[#2F5FA8] hover:shadow-md transition-all"
              >
                <Icon className="w-5 h-5 text-[#2F5FA8] mb-3" />
                <p className="ft-mono text-[10px] uppercase tracking-wide text-[#5C6B7E]">{label}</p>
                <p className="text-sm font-semibold mt-1 truncate">{value}</p>
              </a>
            ))}
          </div>

        
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 px-6 bg-[#0F1B2D] text-white text-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div className="relative max-w-xl mx-auto">
          <Eyebrow light>// let's talk</Eyebrow>
          <h3 className="ft-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Let's build something amazing together
          </h3>
          <p className="text-[#9FB3D6] mb-8">
            I'm open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:varungehlot2310@gmail.com"
            className="inline-block px-7 py-3 rounded-lg bg-white text-[#0F1B2D] text-sm font-semibold hover:bg-[#E8623A] hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App