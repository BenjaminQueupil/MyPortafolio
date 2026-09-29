import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "años de experiencia" },
  { value: "3+", label: "apps empresariales" },
  { value: "Duoc UC", label: "Analista Programador" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-hidden bg-neutral-950 font-display"
    >
      <div className="pointer-events-none absolute -z-10 top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-0 -right-32 w-[26rem] h-[26rem] rounded-full bg-teal-500/10 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Sobre mí
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 md:gap-14 max-w-5xl w-full items-start">
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeUp} className="text-xl sm:text-2xl font-light leading-snug text-neutral-200">
            Soy <span className="font-semibold text-emerald-400">Desarrollador Full Stack</span>{" "}
            especializado en <span className="font-semibold text-cyan-300">PHP y Laravel</span>.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base sm:text-lg font-light leading-relaxed text-neutral-400">
            Desarrollo aplicaciones web: sistemas que ordenan, automatizan y optimizan
            procesos, conectan datos y ayudan a tomar mejores decisiones.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base sm:text-lg font-light leading-relaxed text-neutral-400">
            Hoy estoy expandiendo mi stack hacia el{" "}
            <span className="text-neutral-200 font-medium">FrontEnd</span> para construir
            interfaces más modernas, rapidas y amigables.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 pt-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center gap-1 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm leading-tight text-neutral-400">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-3"
        >
        </motion.ul>
      </div>
    </section>
  );
}
