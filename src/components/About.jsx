import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-8"
      >
        Sobre mí
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-400 max-w-2xl text-center leading-relaxed"
      >
        Soy Full Stack Developer con experiencia en Laravel y PHP, especializado en microservicios,
        APIs REST e integraciones con sistemas ERP. Me apasiona construir soluciones robustas
        para el mundo empresarial y últimamente estoy expandiendo mi stack hacia React
        para desarrollar interfaces modernas y animadas.
      </motion.p>
    </section>
  );
}