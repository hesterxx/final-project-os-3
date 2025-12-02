import React from "react";
import { Link } from "react-router-dom";
import myImg from "../assets/carbon2.jpg";
import { motion } from "framer-motion";
import { FiFeather, FiLayers, FiHeart } from "react-icons/fi";

const focusAreas = [
  {
    title: "Full-Stack Web Development",
    description: "Building complete web solutions from database design to responsive front-end interfaces using React and modern frameworks.",
    icon: <FiLayers size={28} />,
  },
  {
    title: "Clean Code Architecture",
    description: "Writing modular, maintainable code following SOLID principles and best practices learned at Cordova Public College.",
    icon: <FiFeather size={28} />,
  },
  {
    title: "User Experience Design",
    description: "Creating accessible, intuitive interfaces that prioritize user needs and follow modern design patterns.",
    icon: <FiHeart size={28} />,
  },
];

const timeline = [
  {
    period: "2024 — 2026",
    title: "BSIT Advanced Studies",
    copy: "Advancing through 3rd-4th year coursework at Cordova Public College, specializing in web technologies, database systems, and software engineering. Developing capstone projects and industry-relevant applications.",
  },
  {
    period: "2023 — 2024",
    title: "Foundation & Fundamentals",
    copy: "Building strong fundamentals in programming, web development, and systems design. Completing core BSIT courses while developing portfolio projects using React and modern web technologies.",
  },
  {
    period: "2022 — 2023",
    title: "Academic Journey Begins",
    copy: "Started at Cordova Public College pursuing Bachelor of Science in Information Technology. Discovered passion for web development and began mastering HTML, CSS, and JavaScript.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-10 overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#9333ea]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#06b6d4]/15 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            className="order-2 space-y-8 text-center text-[#faf5ff] lg:order-1 lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#9333ea]/30 bg-[#9333ea]/5 px-4 py-2 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-pulse" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333ea]" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">About Me</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              BSIT Student & <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-transparent bg-clip-text">Digital Innovator</span>
            </h1>

            <p className="text-lg text-[#c4b5fd]">
              I'm John Hester Carbon, a dedicated BSIT student at Cordova Public College, Cebu. Passionate about crafting beautiful, responsive web applications with clean code architecture and thoughtful user experiences. Currently in my 3rd year, combining rigorous academic training with practical hands-on development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="rounded-lg border border-[#9333ea] bg-gradient-to-r from-[#9333ea] to-[#B01030] px-8 py-3 text-sm font-bold text-[#faf5ff] shadow-lg shadow-[#9333ea]/40 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                to="/skills"
                className="rounded-lg border border-[#4c1d95] bg-[#1e1b4b] px-8 py-3 text-sm font-bold text-[#faf5ff] transition-all duration-300 hover:border-[#9333ea] hover:bg-[#4c1d95]"
              >
                My Skills
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 relative lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-[#9333ea]/30 via-transparent to-[#06b6d4]/20 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-3xl border border-[#4c1d95] bg-[#1e1b4b]/80 p-6 backdrop-blur-xl">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#4c1d95] to-[#1a0f0f]">
                <img
                  src={myImg}
                  alt="Shin Aro"
                  className="h-[400px] w-full object-cover"
                />
              </div>
              
              <div className="mt-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">Current Focus</p>
                <p className="text-xl font-bold text-[#faf5ff]">Modern Web Development</p>
                <p className="text-sm text-[#c4b5fd]">
                  React, Tailwind CSS, and modern design patterns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#9333ea]">My Approach</p>
            <h2 className="text-4xl font-bold text-[#faf5ff]">What I focus on</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                className="group rounded-2xl border border-[#4c1d95] bg-[#1e1b4b]/50 backdrop-blur p-8 hover:border-[#9333ea]/50 hover:bg-[#1e1b4b] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#4c1d95] text-[#9333ea] group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-[#faf5ff]">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm text-[#c4b5fd]">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#9333ea]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl space-y-12">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#9333ea]">Experience Map</p>
            <h2 className="text-4xl font-bold text-[#faf5ff]">My academic journey at CPC</h2>
          </div>

          {/* Timeline Cards in New Layout */}
          <div className="grid gap-8 md:grid-cols-3">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                className="group relative rounded-2xl border border-[#4c1d95] bg-gradient-to-br from-[#312e81] to-[#1e1b4b] p-8 hover:border-[#9333ea]/50 hover:shadow-lg hover:shadow-[#9333ea]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#9333ea] to-[#06b6d4] flex items-center justify-center font-bold text-[#1a0f0f] text-lg">
                  {index + 1}
                </div>

                {/* Period */}
                <p className="text-sm font-bold uppercase tracking-wider text-[#9333ea] mb-3">
                  {item.period}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#faf5ff] mb-4 group-hover:text-[#9333ea] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#c4b5fd] leading-relaxed mb-6">
                  {item.copy}
                </p>

                {/* Bottom Accent Line */}
                <div className="h-1 w-12 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
