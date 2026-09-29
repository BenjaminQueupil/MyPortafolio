import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "theme";

export default function ThemeToggle({ className = "" }) {
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  function toggle() {
    const root = document.documentElement;
    const next = !light;
    root.classList.add("theme-transition");
    root.classList.toggle("light", next);
    setTimeout(() => root.classList.remove("theme-transition"), 450);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
    } catch {
      // storage unavailable (private mode): theme just won't persist
    }
    setLight(next);
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={light ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
      title={light ? "Tema oscuro" : "Tema claro"}
      className={`relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden text-neutral-300 hover:text-cyan-300 hover:bg-white/5 transition-colors cursor-pointer ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={light ? "sun" : "moon"}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {light ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
