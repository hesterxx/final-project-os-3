import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { MdPhone, MdLocationOn } from 'react-icons/md'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/fcfs', label: 'Scheduling' },
  { href: '/resume', label: 'Resume' },
]

const contactDetails = [
  { icon: <FaEnvelope />, value: 'johnhester.ferrer@gmail.com' },
  { icon: <MdPhone />, value: '+63 945 143 5085' },
  { icon: <MdLocationOn />, value: 'Banbang, Cordova, Cebu, Philippines' },
]

const Footer = () => {
  return (
    <footer className="px-6 py-16 text-[#faf5ff]">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-2xl border border-[#4c1d95] bg-[#1e1b4b]/50 backdrop-blur p-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9333ea] font-semibold">
              John Hester Carbon
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#faf5ff]">
              Frontend Developer
            </h2>
          </div>
          
          <p className="text-[#c4b5fd] max-w-md">
            I create beautiful, responsive web interfaces with modern React, clean architecture, and thoughtful design.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/hesterxx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4c1d95] bg-[#4c1d95]/50 text-[#9333ea] transition-all duration-300 hover:border-[#9333ea] hover:bg-[#4c1d95] hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:johnhester.ferrer@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4c1d95] bg-[#4c1d95]/50 text-[#06b6d4] transition-all duration-300 hover:border-[#06b6d4] hover:bg-[#4c1d95] hover:scale-110"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Links and Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-[#faf5ff] mb-6">
              Navigate
            </h3>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-[#c4b5fd] hover:text-[#9333ea] transition-all duration-300 hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-[#faf5ff] mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              {contactDetails.map((item) => (
                <div key={item.value} className="flex items-start gap-3 text-[#c4b5fd] hover:text-[#9333ea] transition-colors">
                  <span className="text-[#9333ea] mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-[#4c1d95] pt-6 text-sm text-[#c4b5fd]">
        <p>© {new Date().getFullYear()} John Hester F. Carbon. All rights reserved.</p>
        <p>Designed and built with modern web technologies.</p>
      </div>
    </footer>
  )
}

export default Footer
