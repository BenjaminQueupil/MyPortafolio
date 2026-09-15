import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 px-10 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30"
      >
      {links.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4 }}
          whileHover={{
            scale: 1.1,
            rotateX: 10,
            color: "#60a5fa",
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative px-6 py-2 text-sm font-medium text-gray-300 rounded-full transition-colors whitespace-nowrap"
        >
          {link.label}
        </motion.a>
      ))}
    </motion.nav>
  );
}