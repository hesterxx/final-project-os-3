import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import profilecardImg from "../assets/branding.png";
import GymImg from "../assets/e-commerce.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Profle Card",
      description:
        "The Profile Card is a reusable React component designed to elegantly display user information in a compact, visually appealing format. It highlights key details such as name, role, contact links, and a profile image, making it perfect for portfolios, dashboards, or social apps.",
      image: GymImg,
      link: "https://github.com/hesterxx/act-1--APPSDEV-",
      tech: ["React", "CSS"],
    },
    {
      title: "Techno Shop",
      description:
        "The E‑Commerce Web Application is a modern, responsive shopping platform built with React and styled using Tailwind CSS. It integrates external APIs to fetch product data dynamically, ensuring a seamless and scalable shopping experience.",
      image: profilecardImg,
      link: "https://github.com/hesterxx/IM2-act-2-",
      tech: ["React", "Tailwind"],
    },
    
  ];

  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9333ea]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl space-y-20">
        {/* Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75 animate-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#06b6d4]">Portfolio</p>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-[#faf5ff]">
            Projects & <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-transparent bg-clip-text">Case Studies</span>
          </h1>

          <p className="text-lg text-[#c4b5fd] max-w-2xl mx-auto">
            A curated selection of projects that showcase my design thinking, technical skills, and development approach.
          </p>
        </motion.div>

        {/* Projects Grid - New Alternating Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`group grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              {/* Image Section */}
              <div className="relative rounded-2xl overflow-hidden border border-[#4c1d95] h-80 bg-[#1e1b4b]">
                <div className="absolute -inset-8 bg-gradient-to-br from-[#9333ea]/20 to-[#06b6d4]/10 rounded-3xl blur-3xl" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b1e] via-transparent to-transparent opacity-40" />
              </div>

              {/* Content Section */}
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#9333ea] to-[#06b6d4] text-[#faf5ff] font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#faf5ff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#06b6d4] transition-all">
                    {project.title}
                  </h3>

                  <p className="text-[#c4b5fd] text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9333ea]/10 to-[#06b6d4]/10 border border-[#9333ea]/30 text-[#9333ea] text-sm font-semibold hover:border-[#9333ea]/70 hover:bg-[#9333ea]/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border border-[#9333ea] bg-gradient-to-r from-[#9333ea] to-[#B01030] px-6 py-3 text-sm font-bold text-[#faf5ff] shadow-lg shadow-[#9333ea]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#9333ea]/70 w-fit"
                >
                  View on GitHub
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
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
          className="rounded-2xl border border-[#4c1d95] bg-gradient-to-br from-[#1e1b4b] to-[#4c1d95] p-12 text-center space-y-6 mt-20"
        >
          <h2 className="text-3xl font-bold text-[#faf5ff]">Want to see more?</h2>
          <p className="text-[#c4b5fd] text-lg">Check out my GitHub for more projects and contributions.</p>
          <a
            href="https://github.com/hesterxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#06b6d4] bg-gradient-to-r from-[#06b6d4] to-[#9333ea] px-8 py-3 text-sm font-bold text-[#faf5ff] shadow-lg shadow-[#06b6d4]/40 transition-all duration-300 hover:scale-105"
          >
            Visit GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
