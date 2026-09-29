import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { scrollToSection } from "../scrollToSection";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop / tablet nav */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 flex-wrap items-center justify-center gap-1 px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 max-w-[95vw]"
        onMouseLeave={() => setHovered(null)}
      >
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.4 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHovered(link.href)}
            className="relative px-4 py-2 text-sm font-medium text-neutral-300 rounded-full transition-colors whitespace-nowrap hover:text-cyan-300"
          >
            <AnimatePresence>
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-highlight"
                  className="absolute inset-0 rounded-full bg-emerald-500/20 border border-cyan-400/30 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </AnimatePresence>
            {link.label}
          </motion.a>
        ))}
        <span className="w-px h-5 mx-1 bg-white/10" />
        <ThemeToggle />
      </motion.nav>

      <div className="sm:hidden fixed top-4 right-4 z-50 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 p-1">
        <ThemeToggle />
      </div>

      {/* Mobile nav */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="sm:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-neutral-200 shadow-lg shadow-black/30"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed top-[4.5rem] left-1/2 -translate-x-1/2 z-40 flex flex-col gap-1 p-3 rounded-2xl bg-base-alt/95 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 min-w-[12rem]"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setOpen(false);
                  scrollToSection(e, link.href);
                }}
                className="px-4 py-2.5 text-sm font-medium text-neutral-300 rounded-xl hover:bg-emerald-500/20 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
