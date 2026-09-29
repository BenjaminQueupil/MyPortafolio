import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCheck } from "react-icons/fa";

const EMAIL = "benjaqp14@gmail.com";

const links = [
  {
    href: "tel:+56975751428",
    label: "+56 9 7575 1428",
    icon: FaPhone,
  },
  {
    href: "https://github.com/BenjaminQueupil",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/benjamin-antonio-queupil-4a3b15222/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center overflow-hidden bg-base-alt"
    >
      <div className="pointer-events-none absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-cyan-600/20 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-neutral-400 max-w-xl mb-10"
      >
        ¿Un proyecto en mente o una oportunidad para colaborar o contratarme? Escribime, siempre estoy
        abierto a nuevas ideas y desafíos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.button
          type="button"
          onClick={copyEmail}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-colors cursor-pointer ${
            copied
              ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-300"
              : "bg-white/5 border-white/10 text-neutral-300 hover:text-cyan-300 hover:border-cyan-400/40"
          }`}
        >
          {copied ? <FaCheck size={18} /> : <FaEnvelope size={18} />}
          <span className="text-sm font-medium">{copied ? "¡Copiado!" : EMAIL}</span>
        </motion.button>
        {links.map(({ href, label, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.a
        href="/CV-BenjaminQueupil.pdf"
        download
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 rounded-full text-neutral-950 font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-cyan-500/30"
      >
        Descargar CV
      </motion.a>
    </section>
  );
}
