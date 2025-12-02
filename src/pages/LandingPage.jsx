import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/carbon.jpg'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaLaptopCode } from 'react-icons/fa'
import { MdStyle } from 'react-icons/md'
import { TbComponents } from 'react-icons/tb'

const statHighlights = [
  { label: 'Active builds', value: '03', detail: 'Projects in progress' },
  { label: 'Systems shipped', value: '03', detail: 'UI components' },
  { label: 'Weekly focus', value: '32h', detail: 'Design & code' },
]

const craftHighlights = [
  {
    icon: <FaLaptopCode size={48} />,
    title: 'Clean code',
    copy: 'Modular components and thoughtful architecture.',
  },
  {
    icon: <MdStyle size={48} />,
    title: 'Modern design',
    copy: 'Minimal aesthetics with purposeful details.',
  },
  {
    icon: <TbComponents size={48} />,
    title: 'Smooth motion',
    copy: 'Subtle animations that enhance experience.',
  },
]

const quickPanels = [
  {
    title: 'About',
    copy: 'Learn more about my journey and approach.',
    link: '/about',
  },
  {
    title: 'Skills',
    copy: 'Tools and technologies I work with.',
    link: '/skills',
  },
  {
    title: 'Projects',
    copy: 'Selected work and case studies.',
    link: '/projects',
  },
  {
    title: 'Resume',
    copy: 'Download my resume in PDF format.',
    link: '/resume',
  },
]

const LandingPage = () => {
  return (
    <>
      {/* Hero Section - New Modern Layout */}
      <section className="relative -mt-10 overflow-hidden px-6 py-32 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9333ea]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Top row: Text + Profile side by side */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] mb-16">
            {/* Left: Text Content */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#9333ea]/30 bg-[#9333ea]/5 px-4 py-2 w-fit mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-pulse" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9333ea]" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">
                  BSIT Student & Developer
                </p>
              </div>

              <div>
                <h1 className="text-5xl leading-tight sm:text-6xl lg:text-7xl font-bold text-[#faf5ff] mb-4">
                  Building the <span className="bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-transparent bg-clip-text">Future</span>
                </h1>
                <p className="text-lg text-[#c4b5fd] max-w-lg">
                  I'm a BSIT student at Cordova Public College crafting beautiful, high-performance web experiences with React, modern design, and clean architecture.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="rounded-xl border border-[#9333ea] bg-gradient-to-r from-[#9333ea] to-[#a855f7] px-8 py-4 text-base font-bold text-[#faf5ff] shadow-lg shadow-[#9333ea]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#9333ea]/70"
                >
                  View My Work
                </Link>

                <Link
                  to="/resume"
                  className="rounded-xl border border-[#4c1d95] bg-[#1e1b4b] px-8 py-4 text-base font-bold text-[#faf5ff] transition-all duration-300 hover:border-[#9333ea] hover:bg-[#4c1d95] hover:shadow-lg hover:shadow-[#9333ea]/20"
                >
                  Download Resume
                </Link>
              </div>
            </motion.div>

            {/* Right: Profile Card */}
            <motion.div
              className="relative mx-auto w-full max-w-sm"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-[#9333ea]/30 via-transparent to-[#06b6d4]/30 rounded-3xl blur-3xl" />

              <div className="relative rounded-3xl border border-[#4c1d95] bg-gradient-to-br from-[#312e81] to-[#1e1b4b] p-8 backdrop-blur-xl">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#4c1d95] to-[#0f0b1e] p-2">
                  <img
                    src={profileImg}
                    alt="John Hester F. Carbon"
                    className="h-[400px] w-full rounded-2xl object-cover"
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75 animate-pulse" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9333ea]" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9333ea]">Open to Opportunities</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#faf5ff]">
                      John Hester Carbon
                    </p>
                    <p className="text-[#06b6d4] font-semibold text-sm mt-1">Full-Stack Web Developer</p>
                  </div>
                  <p className="text-sm text-[#c4b5fd] leading-relaxed">
                    3rd Year BSIT | Cordova Public College | Cebu, Philippines
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            {statHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-xl border border-[#4c1d95] bg-gradient-to-br from-[#312e81] to-[#1e1b4b] backdrop-blur px-6 py-6 text-center hover:border-[#9333ea]/50 transition-all duration-300 group"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-[#9333ea] to-[#06b6d4] text-transparent bg-clip-text group-hover:scale-110 transition-transform">{item.value}</p>
                <p className="text-xs uppercase tracking-wider text-[#c4b5fd] mt-2 group-hover:text-[#9333ea] transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-[#c4b5fd] mt-1">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            {craftHighlights.map((item) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl border border-[#4c1d95] bg-[#1e1b4b]/50 backdrop-blur p-8 hover:border-[#9333ea]/50 hover:bg-[#1e1b4b] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 text-[#9333ea] group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#faf5ff]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#c4b5fd]">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 relative">
        <motion.div
          className="max-w-5xl mx-auto space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#9333ea]">Explore</p>
            <h2 className="text-4xl font-bold text-[#faf5ff]">Discover my work</h2>
            <p className="text-[#c4b5fd] text-lg">
              Browse through different sections to see what I've been working on.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quickPanels.map((panel) => (
              <Link
                key={panel.title}
                to={panel.link}
                className="group rounded-2xl border border-[#4c1d95] bg-gradient-to-br from-[#1e1b4b] to-[#4c1d95] p-8 text-[#faf5ff] hover:border-[#9333ea]/70 hover:shadow-lg hover:shadow-[#9333ea]/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#faf5ff] group-hover:text-[#9333ea] transition-colors">{panel.title}</h3>
                  <p className="mt-3 text-sm text-[#c4b5fd]">{panel.copy}</p>
                </div>

                <span className="mt-6 inline-flex items-center text-sm font-bold text-[#9333ea] group-hover:gap-3 gap-2 transition-all">
                  Explore
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default LandingPage
