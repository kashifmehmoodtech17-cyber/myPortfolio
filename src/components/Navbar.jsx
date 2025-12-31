import "../App.css"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Home,
  User,
  Layers,
  Folder,
  Mail,
  Sparkles,
  PartyPopper
} from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", href: "#home", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Proficiency", href: "#proficiency", icon: <Layers size={18} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* TOP MARQUEE: New Year 2026 Event Line */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-1 overflow-hidden hidden md:block">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-10 text-[10px] font-bold text-white uppercase tracking-[0.3em]"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-2">
              ✨ Happy New Year 2026 • Welcome to the Future • Kashif Mehmood Portfolio • ✨
            </span>
          ))}
        </motion.div>
      </div>

      {/* NAVBAR BAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full bg-black/90 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/*  DECORATED ANIMATED LOGO */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
                {/* Infinite Pulse Glow around Logo */}
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
                <div className="text-2xl font-black flex tracking-tighter relative z-10">
                  <span className="text-blue-500">K</span>
                  <span className="text-red-500">M</span>
                </div>
            </div>
            
            {/* Animated Festive Icon */}
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="text-yellow-400"
            >
              <PartyPopper size={20} />
            </motion.div>
          </motion.div>

          {/*  DESKTOP NAV (Infinite Decoration) */}
          <ul className="hidden md:flex items-center gap-10 text-white text-xs font-bold uppercase tracking-widest">
            {links.map((link) => (
              <li
                key={link.name}
                className="relative group flex items-center gap-2 cursor-pointer"
              >
                <motion.span 
                  whileHover={{ y: -5, color: "#60a5fa" }}
                  className="transition-colors"
                >
                  {link.icon}
                </motion.span>
                
                <a href={link.href} className="group-hover:text-blue-400 transition-all duration-300">
                  {link.name}
                </a>

                {/* Animated Gradient Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 transition-all duration-500 group-hover:w-full shadow-[0_0_8px_#3b82f6]" />
                
                {/* Floating Sparkles on Hover */}
                <motion.div
                   className="absolute -top-3 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                   animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ repeat: Infinity, duration: 1 }}
                >
                  <Sparkles size={10} className="text-blue-300 shadow-white" />
                </motion.div>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON  */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU  */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-black border-t border-white/10"
          >
            <ul className="flex flex-col gap-6 py-8 text-white text-lg font-medium">
              {links.map((link) => (
                <li key={link.name} className="flex justify-center items-center gap-3">
                    <span className="text-blue-500">{link.icon}</span>
                    <a href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar