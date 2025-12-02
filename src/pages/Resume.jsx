import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import resumePDF from "../assets/resume.pdf";

const Resume = () => {
  const experiences = [
    {
      role: "Information Technology Scholar",
      company: "Cordova Public College - BSIT Program",
      period: "3rd Year (2025)",
      description:
        "Advancing through the rigorous BSIT curriculum at Cordova Public College, mastering cutting-edge technologies in web development, software architecture, and digital innovation. Combining academic excellence with practical hands-on experience in building scalable web applications and modern UI/UX solutions.",
      tags: ["BSIT", "Full-Stack Development", "Web Technologies", "System Design"],
    },
    {
      role: "Tech Innovator & Developer",
      company: "Personal Ventures & Collaborations",
      period: "2023 - Present",
      description:
        "Crafting sophisticated web experiences through independent projects and collaborative initiatives. Specializing in React-based applications with Tailwind CSS styling, implementing modern design patterns, and deploying production-ready solutions that solve real-world challenges.",
      tags: ["React", "Tailwind CSS", "Modern JavaScript", "API Integration"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Cordova Public College, Cebu",
      year: "2022 - 2026 (Currently in 3rd Year)",
      details: "Pursuing a comprehensive BSIT degree with specialization in web technologies and software development. Coursework encompasses advanced programming, database management, network systems, web development frameworks, and enterprise application design. Maintaining strong academic performance while building industry-relevant projects.",
    },
  ];

  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#9333ea]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl space-y-20">
        {/* Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#9333ea]/30 bg-[#9333ea]/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333ea]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">Experience</p>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-[#faf5ff]">
            Resume & <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-transparent bg-clip-text">Experience</span>
          </h1>

          <p className="text-lg text-[#c4b5fd] max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, skills, and educational background.
          </p>

          {/* View Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#9333ea] bg-gradient-to-r from-[#9333ea]/10 to-[#9333ea]/5 px-6 py-3 text-sm font-bold text-[#9333ea] shadow-lg shadow-[#9333ea]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#9333ea]/40"
            >
              <FiDownload className="w-5 h-5" />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-[#faf5ff] flex items-center gap-4 mb-2">
              <span className="w-16 h-1.5 bg-gradient-to-r from-[#9333ea] via-[#06b6d4] to-[#a855f7] rounded-full" />
              Professional Journey
            </h2>
            <p className="text-[#c4b5fd] text-sm">Expertise & Academic Achievements</p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-[#4c1d95] bg-gradient-to-br from-[#1e1b4b] to-[#0f0b1e] backdrop-blur p-8 hover:border-[#9333ea] hover:shadow-lg hover:shadow-[#9333ea]/20 transition-all duration-500"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#9333ea]/10 to-transparent rounded-bl-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#9333ea]/10 border border-[#9333ea]/30 mb-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">{exp.role}</p>
                      </div>
                      <h3 className="text-2xl font-bold text-[#faf5ff] mb-1">{exp.company}</h3>
                      <p className="text-[#06b6d4] font-semibold">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-[#d9b8b7] leading-relaxed mb-6">{exp.description}</p>

                  {/* Tech Stack with better styling */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-[#9333ea]/15 to-[#06b6d4]/15 border border-[#9333ea]/40 text-[#fdbdd9] font-medium hover:border-[#9333ea] transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  {index === 0 && (
                    <div className="mt-6 pt-6 border-t border-[#4c1d95]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#9333ea] animate-pulse" />
                        <p className="text-xs text-[#c4b5fd]">Currently Active</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-[#faf5ff] flex items-center gap-4 mb-2">
              <span className="w-16 h-1.5 bg-gradient-to-r from-[#06b6d4] via-[#9333ea] to-[#7c3aed] rounded-full" />
              Academic Excellence
            </h2>
            <p className="text-[#c4b5fd] text-sm">Educational Background & Specialization</p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-[#4c1d95] bg-gradient-to-br from-[#312e81] via-[#1e1b4b] to-[#0f0b1e] backdrop-blur-xl p-10 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/5 via-transparent to-[#06b6d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9333ea] via-[#06b6d4] to-transparent" />
                
                <div className="relative z-10">
                  <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
                    {/* Institution & Degree */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                        <p className="text-xs uppercase tracking-widest text-[#06b6d4] font-bold">Degree Program</p>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#faf5ff] mb-2">{edu.degree}</h3>
                      <p className="text-lg text-[#9333ea] font-semibold">{edu.school}</p>
                    </div>

                    {/* Timeline */}
                    <div className="md:text-right">
                      <p className="text-xs uppercase tracking-widest text-[#c4b5fd] mb-2">Timeline</p>
                      <p className="text-xl font-bold text-[#06b6d4]">{edu.year}</p>
                    </div>
                  </div>

                  {/* Description with enhanced styling */}
                  <p className="text-[#d9b8b7] leading-relaxed mb-6 text-lg">{edu.details}</p>

                  {/* Course highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#4c1d95]">
                    {["Web Dev", "Databases", "Networks", "Software Engineering"].map((course, i) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center"
                      >
                        <p className="text-xs font-semibold text-[#9333ea] uppercase tracking-wide">{course}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expected graduation indicator */}
                  <div className="mt-6 flex items-center gap-2 text-[#c4b5fd]">
                    <div className="w-2 h-2 rounded-full bg-[#9333ea]" />
                    <p className="text-sm">Expected Graduation: 2026</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-[#4c1d95] bg-gradient-to-br from-[#312e81] via-[#1e1b4b] to-[#0f0b1e] p-12 space-y-8 overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#9333ea]/10 to-transparent rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#06b6d4]/10 to-transparent rounded-full blur-3xl -z-0" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
              <p className="text-xs uppercase tracking-widest text-[#06b6d4] font-bold">Expertise</p>
            </div>
            <h3 className="text-3xl font-bold text-[#faf5ff] mb-2">Core Competencies</h3>
            <p className="text-[#c4b5fd]">Technical skills acquired through rigorous BSIT coursework and hands-on development experience</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React.js", icon: "⚛️", level: "Advanced" },
              { name: "Tailwind CSS", icon: "🎨", level: "Advanced" },
              { name: "JavaScript", icon: "✨", level: "Advanced" },
              { name: "Node.js", icon: "🚀", level: "Intermediate" },
              { name: "API Development", icon: "🔌", level: "Intermediate" },
              { name: "Responsive Design", icon: "📱", level: "Advanced" },
              { name: "Git & GitHub", icon: "🔧", level: "Advanced" },
              { name: "Problem Solving", icon: "🧠", level: "Advanced" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-2xl border border-[#4c1d95] bg-gradient-to-br from-[#5a2a2a] to-[#1e1b4b] p-6 hover:border-[#9333ea] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h4 className="text-lg font-bold text-[#faf5ff] mb-1">{skill.name}</h4>
                  <p className="text-xs uppercase tracking-wider text-[#06b6d4] font-semibold">{skill.level}</p>
                  
                  {/* Skill bar */}
                  <div className="mt-4 h-1 bg-[#4c1d95] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === "Advanced" ? "100%" : "70%" }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-[#9333ea] to-[#06b6d4] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center space-y-8 pt-16 border-t-2 border-[#4c1d95]"
        >
          <div>
            <h2 className="text-4xl font-bold text-[#faf5ff] mb-3">Let's Transform Ideas Into Reality</h2>
            <p className="text-[#c4b5fd] text-lg max-w-2xl mx-auto">
              As a passionate BSIT student at Cordova Public College with expertise in modern web development, I'm ready to collaborate on innovative projects that make an impact.
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 rounded-xl border border-[#06b6d4] bg-gradient-to-r from-[#06b6d4] to-[#9333ea] px-8 py-4 text-base font-bold text-[#faf5ff] shadow-xl shadow-[#06b6d4]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#06b6d4]/70"
            >
              Start a Collaboration
              <FiExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </motion.div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto">
            <div>
              <p className="text-2xl font-bold text-[#9333ea]">3rd</p>
              <p className="text-xs uppercase text-[#c4b5fd] tracking-wide">Year BSIT</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#9333ea]">2026</p>
              <p className="text-xs uppercase text-[#c4b5fd] tracking-wide">Graduation</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#9333ea]">CPC</p>
              <p className="text-xs uppercase text-[#c4b5fd] tracking-wide">Cordova PC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
