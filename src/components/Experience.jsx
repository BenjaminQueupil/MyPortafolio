import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

// Months are 1-12. `end: null` means the role is ongoing and the duration keeps counting.
const experience = [
  {
    role: "Desarrollador Full Stack y Analista de Datos",
    company: "Segurycel SA",
    start: { year: 2023, month: 11 },
    end: { year: 2026, month: 9 },
    summary:
      "Desarrollo y mantención del backoffice de la empresa: sistemas internos, integraciones con el ERP, automatizaciones y dashboards de gestión.",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web con PHP 7.4+, Laravel 10+, JavaScript y SQL Server.",
      "Implementación de sistema de agendamiento para proveedores y módulos CRUD para plataformas internas y externas.",
      "Creación de dashboards e indicadores KPI mediante Google Charts.",
      "Automatización de procesos y tareas programadas mediante CRON Jobs en entornos Linux.",
      "Integración y optimización de consultas SQL para mejora de rendimiento y procesamiento de datos.",
      "Gestión de versiones y seguimiento de tareas con Jira, Git y AWS CodeCommit.",
    ],
  },
  {
    role: "Practicante Full Stack",
    company: "Segurycel SA",
    start: { year: 2023, month: 8 },
    end: { year: 2023, month: 11 },
    summary:
      "Mi primera experiencia en la empresa: automaticé reportes y desarrollé un módulo de evaluación de desempeño.",
    points: [
      "Automatización de reportes en Excel para distintas áreas de la empresa.",
      "Implementación de módulo de evaluación de desempeño, incluyendo lógica de negocio e interfaz.",
      "Desarrollo de dashboards dinámicos integrando PHP y SQL Server para visualización de métricas.",
    ],
  },
];

const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];

function formatDate({ year, month }) {
  return `${MONTHS[month - 1]} ${year}`;
}

function duration(start, end) {
  const now = new Date();
  const to = end ?? { year: now.getFullYear(), month: now.getMonth() + 1 };
  const total = Math.max(1, (to.year - start.year) * 12 + (to.month - start.month));
  const years = Math.floor(total / 12);
  const months = total % 12;
  const y = years ? `${years} ${years === 1 ? "año" : "años"}` : "";
  const m = months ? `${months} ${months === 1 ? "mes" : "meses"}` : "";
  return [y, m].filter(Boolean).join(" y ");
}

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-12 sm:pl-16">
      <motion.span
        initial={{ scale: 0.4, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -40% 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 15 }}
        className="absolute left-0 sm:left-2 top-5 w-9 h-9 flex items-center justify-center rounded-full bg-neutral-950 border-2 border-emerald-400 text-emerald-400 shadow-[0_0_18px_2px_rgba(52,211,153,0.45)]"
      >
        <Briefcase size={16} />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-neutral-950 bg-gradient-to-r from-emerald-400 to-cyan-400">
            {duration(exp.start, exp.end)}
          </span>
          <span className="text-xs text-neutral-400">
            {formatDate(exp.start)} — {exp.end ? formatDate(exp.end) : "Actualidad"}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
        <p className="text-sm text-cyan-300 mb-3">{exp.company}</p>
        <p className="text-neutral-300 leading-relaxed">{exp.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          {open ? "Ver menos" : "Ver detalle"}
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="flex">
            <ChevronDown size={16} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="pt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="text-sm text-neutral-400 leading-relaxed flex gap-2">
                    <span className="text-emerald-400">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-hidden bg-neutral-950"
    >
      <div className="pointer-events-none absolute -z-10 top-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-0 right-1/4 w-[24rem] h-[24rem] rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Experiencia
      </motion.h2>

      <div ref={timelineRef} className="relative max-w-3xl w-full flex flex-col gap-10">
        <div className="absolute left-[17px] sm:left-[25px] top-0 bottom-0 w-0.5 rounded-full bg-white/10" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[17px] sm:left-[25px] top-0 bottom-0 w-0.5 rounded-full origin-top bg-gradient-to-b from-emerald-400 to-cyan-400"
        />

        {experience.map((exp) => (
          <ExperienceCard key={exp.role} exp={exp} />
        ))}
      </div>
    </section>
  );
}
