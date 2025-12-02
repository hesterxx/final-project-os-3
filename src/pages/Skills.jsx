import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced", icon: <FaReact />, color: "from-[#61dafb]" },
      { name: "JavaScript", level: "Advanced", icon: <FaJsSquare />, color: "from-[#f7df1e]" },
      { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss />, color: "from-[#06b6d4]" },
      { name: "Framer Motion", level: "Intermediate", icon: <SiFramer />, color: "from-[#0055ff]" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: <FaNode />, color: "from-[#68a063]" },
      { name: "API Design", level: "Intermediate", color: "from-[#00d9ff]" },
    ]
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9333ea]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center space-y-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#9333ea]/30 bg-[#9333ea]/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333ea]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">Expertise</p>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-[#faf5ff]">
            Skills & <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-transparent bg-clip-text">Technologies</span>
          </h1>
          
          <p className="text-lg text-[#c4b5fd] max-w-2xl mx-auto">
            I specialize in modern frontend development with a focus on React, JavaScript, and creating beautiful user interfaces.
          </p>
        </motion.div>

        {/* Skills Grid - New 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#9333ea]/10 to-[#06b6d4]/5 rounded-xl blur-lg" />
                <div className="relative rounded-xl border border-[#4c1d95] bg-[#1e1b4b]/80 backdrop-blur p-6">
                  <h2 className="text-3xl font-bold text-[#faf5ff] mb-2">{category.category}</h2>
                  <p className="text-sm text-[#c4b5fd]">
                    {category.category === "Frontend" 
                      ? "UI frameworks, styling, and animation libraries"
                      : "Server-side technologies and API development"
                    }
                  </p>
                </div>
              </div>

              {/* Skills in Category */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {skill.icon && (
                          <div className="text-3xl text-[#9333ea] group-hover:scale-110 group-hover:rotate-12 transition-transform">
                            {skill.icon}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-bold text-[#faf5ff]">{skill.name}</h3>
                          <p className="text-xs text-[#06b6d4] font-semibold">{skill.level}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-[#9333ea] opacity-0 group-hover:opacity-100 transition-opacity">
                        ★
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 rounded-full overflow-hidden border border-[#4c1d95] bg-[#1e1b4b]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#9333ea] via-[#06b6d4] to-[#B01030] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === "Advanced" ? "100%" : "75%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl border border-[#4c1d95] bg-gradient-to-br from-[#1e1b4b] to-[#4c1d95] p-12 text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#faf5ff]">Ready to work together?</h2>
          <p className="text-[#c4b5fd] text-lg">Let's create something amazing with these skills.</p>
          <a
            href="mailto:shinaroplays@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-[#9333ea] bg-gradient-to-r from-[#9333ea] to-[#B01030] px-8 py-3 text-sm font-bold text-[#faf5ff] shadow-lg shadow-[#9333ea]/40 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
