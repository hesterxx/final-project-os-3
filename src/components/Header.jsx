import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/fcfs", label: "CPU Scheduling" },
  { href: "/resume", label: "Resume" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0f0b1e]/98 backdrop-blur-2xl border-b border-[#4c1d95]/50 shadow-2xl shadow-[#9333ea]/5" 
          : "bg-transparent"
      }`}
    >
      {/* Decorative top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#9333ea]/50 to-transparent opacity-50" />
      
      <div className="mx-auto max-w-7xl">
        {/* Main Header Container */}
        <div className="flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Left: Logo with decorative elements */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/"
              className="group relative flex items-center gap-3"
            >
              {/* Animated sparkle icon */}
              <div className={`relative rounded-lg p-2 transition-all duration-300 ${
                isHome 
                  ? "bg-gradient-to-br from-[#9333ea] to-[#06b6d4] shadow-lg shadow-[#9333ea]/50" 
                  : "bg-[#1e1b4b] border border-[#4c1d95] group-hover:bg-gradient-to-br group-hover:from-[#9333ea]/20 group-hover:to-[#06b6d4]/20"
              }`}>
                <Sparkles 
                  size={20} 
                  className={`transition-colors ${isHome ? "text-white" : "text-[#9333ea] group-hover:text-white"}`}
                />
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className={`text-xl font-black tracking-tight transition-colors ${
                  isHome 
                    ? "bg-gradient-to-r from-[#9333ea] to-[#06b6d4] bg-clip-text text-transparent" 
                    : "text-white group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent"
                }`}>
                  Portfolio
                </span>
                <span className="text-xs text-[#c4b5fd]/60 font-medium">Developer</span>
              </div>
              
              {/* Active indicator dot */}
              {isHome && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#06b6d4] shadow-lg shadow-[#06b6d4]/70"
                />
              )}
            </Link>
          </motion.div>

          {/* Center: Navigation Links with Dividers */}
          <nav className="hidden lg:flex items-center gap-1 px-8">
            {navMenu.map((link, index) => {
              const active = location.pathname === link.href;
              return (
                <React.Fragment key={link.href}>
                  {index > 0 && (
                    <div className="h-6 w-px bg-gradient-to-b from-transparent via-[#4c1d95] to-transparent mx-2" />
                  )}
                  <Link
                    to={link.href}
                    className="group relative px-4 py-2"
                  >
                    <span className={`relative text-sm font-semibold tracking-wide transition-all duration-300 ${
                      active
                        ? "text-white"
                        : "text-[#c4b5fd] hover:text-white"
                    }`}>
                      {link.label}
                      {active && (
                        <>
                          <motion.div
                            layoutId="activeTab"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9333ea] via-[#06b6d4] to-[#9333ea] rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9333ea]"
                          />
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#06b6d4]"
                          />
                        </>
                      )}
                    </span>
                    
                    {/* Hover glow effect */}
                    {!active && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#9333ea]/0 via-[#9333ea]/0 to-[#06b6d4]/0 group-hover:from-[#9333ea]/5 group-hover:via-[#9333ea]/10 group-hover:to-[#06b6d4]/5 transition-all duration-300 -z-10 blur-sm" />
                    )}
                  </Link>
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right: Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Contact Button */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setSheetOpen(true)}
                className="relative overflow-hidden rounded-xl border-2 border-[#06b6d4] bg-gradient-to-r from-[#06b6d4] to-[#9333ea] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#06b6d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#06b6d4]/60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact
                  <MdEmail size={16} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#9333ea] to-[#06b6d4] opacity-0 hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`relative rounded-xl border-2 p-2.5 transition-all duration-300 md:hidden ${
                isOpen
                  ? "border-[#9333ea] bg-[#9333ea]/20"
                  : "border-[#4c1d95] bg-[#1e1b4b] hover:border-[#9333ea]"
              }`}
            >
              {isOpen ? (
                <X size={22} className="text-[#9333ea]" />
              ) : (
                <Menu size={22} className="text-white" />
              )}
              {isOpen && (
                <motion.div
                  layoutId="menuGlow"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#9333ea]/20 to-[#06b6d4]/20 blur-md -z-10"
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-[#4c1d95]/50 bg-[#0f0b1e]/98 backdrop-blur-2xl md:hidden"
      >
        <div className="space-y-2 px-6 py-5">
          {navMenu.map((link, index) => {
            const active = location.pathname === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "border-[#9333ea] bg-gradient-to-r from-[#9333ea]/20 to-[#06b6d4]/20 text-white shadow-lg shadow-[#9333ea]/30"
                      : "border-[#4c1d95] bg-[#1e1b4b] text-[#c4b5fd] hover:border-[#9333ea]/50 hover:bg-[#9333ea]/10 hover:text-white"
                  }`}
                >
                  {/* Active indicator */}
                  {active && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9333ea] to-[#06b6d4] rounded-l-xl" />
                  )}
                  <span className="ml-1">{link.label}</span>
                  {active && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="ml-auto"
                    >
                      <Sparkles size={16} className="text-[#06b6d4]" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: navMenu.length * 0.05 }}
            className="pt-2"
          >
            <Button
              onClick={() => {
                setSheetOpen(true);
                setIsOpen(false);
              }}
              className="w-full rounded-xl border-2 border-[#06b6d4] bg-gradient-to-r from-[#06b6d4] to-[#9333ea] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#06b6d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#06b6d4]/60"
            >
              <span className="flex items-center justify-center gap-2">
                <MdEmail size={18} />
                Get In Touch
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="border-l border-[#4c1d95] bg-[#0f0b1e]/98 text-white backdrop-blur-xl"
        >
          <SheetHeader>
            <SheetTitle className="mt-8 px-4 text-2xl text-white">
              Contact Me
            </SheetTitle>
          </SheetHeader>
          <div className="px-6 pb-10 pt-4 text-sm text-[#c4b5fd]">
            <p className="text-[#c4b5fd]">Available for projects. Response within 24h.</p>
            <div className="mt-6 space-y-4 rounded-2xl border border-[#4c1d95] bg-[#1e1b4b] p-6">
              <div className="flex items-center gap-3 text-white">
                <MdEmail className="text-[#9333ea]" size={20} />
                <span>Johnhester.ferrer@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MdPhone className="text-[#9333ea]" size={20} />
                <span>+63 945 143 5085</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MdLocationOn className="text-[#9333ea]" size={20} />
                <span>Bangbang, Cordova, Cebu, Philippines</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#4c1d95] bg-[#1e1b4b] p-6">
              <h4 className="mb-4 text-base text-white">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/Johnhester.ferrer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4c1d95] bg-[#1e1b4b] text-white transition-all duration-300 hover:border-[#9333ea] hover:bg-[#4c1d95] hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://github.com/hesterxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4c1d95] bg-[#1e1b4b] text-white transition-all duration-300 hover:border-[#9333ea] hover:bg-[#4c1d95] hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4c1d95] bg-[#1e1b4b] text-white transition-all duration-300 hover:border-[#9333ea] hover:bg-[#4c1d95] hover:scale-110"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
