import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaWindowMaximize,
  FaLock,
} from "react-icons/fa";
import TechIcons from "./TechIcons";
import imgNoagh from "../assets/projects/noagh.jpg";

const personalProjects = [
  {
    title: "Ventanas Técnicas",
    status: "En desarrollo",
    description:
      "Landing page para una empresa de fabricación de ventanas: presentación de la empresa, sus productos y contacto para cotizaciones.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: null,
    fallbackIcon: FaWindowMaximize,
    github: "",
    demo: "",
  },
  {
    title: "Noagh Barber",
    description:
      "Sistema de gestión de turnos para barbería, con React, Tailwind y Supabase como backend. Publicado en Vercel.",
    tags: ["React", "Tailwind", "Supabase", "Vercel"],
    image: imgNoagh,
    github: "",
    demo: "https://noagh-barber.vercel.app",
  },
  {
    title: "Portafolio Personal",
    description:
      "Sitio personal construido con React, Tailwind CSS y Framer Motion para presentar mis proyectos y stack.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: null,
    github: "https://github.com/BenjaminQueupil/MyPortafolio",
    demo: "https://benjamin-queupil.vercel.app",
  },
];

const companyProjects = [
  {
    title: "Sistema de Agendamiento de proveedores",
    description:
      "Módulo para que los proveedores agenden sus entregas, con módulos de administración para plataformas internas y externas.",
    tags: ["Laravel", "PHP", "SQL Server", "JavaScript", "Bootstrap", "Softland ERP"],
  },
  {
    title: "Sistema de Inventario y Stock",
    description:
      "Módulo completo de gestión de inventario y control de stock, incluyendo el pickeo de productos y reportes de auditoría.",
    tags: ["Laravel", "PHP", "SQL Server", "JavaScript", "Bootstrap", "Softland ERP"],
  },
  {
    title: "Sistema de Flota y Vehículos",
    description:
      "Módulo de gestión de flota de vehículos, incluyendo mantenimiento, asignación y reportes de uso. Registrando mantenimientos, kilometraje y costos asociados a cada vehículo. Mas digitalizacion de Documentos de estos",
    tags: ["Laravel", "PHP", "SQL Server", "JavaScript", "Bootstrap", "Softland ERP"],
  },
  {
    title: "Dashboards e indicadores KPI",
    description:
      "Paneles de métricas de gestión con gráficos dinámicos, alimentados con consultas SQL optimizadas.",
    tags: ["Laravel","PHP", "SQL Server", "Google Charts", "JavaScript"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectImage({ project }) {
  const FallbackIcon = project.fallbackIcon || FaCode;
  const content = project.image ? (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-cyan-600/30 transition-transform duration-500 group-hover:scale-110">
      <FallbackIcon size={48} className="text-white/60" />
    </div>
  );

  const link = project.demo || project.github;
  const className = "relative block aspect-video overflow-hidden border-b border-white/10";

  const badge = project.status && (
    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400/90 text-neutral-950 shadow">
      {project.status}
    </span>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
      {badge}
    </a>
  ) : (
    <div className={className}>
      {content}
      {badge}
    </div>
  );
}

function SubTitle({ children }) {
  return (
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl flex items-center gap-4 text-lg font-semibold text-neutral-200 mb-6"
    >
      {children}
      <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
    </motion.h3>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-hidden bg-neutral-950"
    >
      <div className="pointer-events-none absolute -z-10 top-10 -left-24 w-[28rem] h-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-10 -right-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Proyectos
      </motion.h2>

      <SubTitle>Proyectos personales</SubTitle>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mb-16"
      >
        {personalProjects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(34,211,238,0.5)" }}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <ProjectImage project={p} />
            <div className="flex flex-col justify-between flex-1 p-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="mb-4">
                  <TechIcons tags={p.tags} />
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-cyan-300 transition-colors"
                  >
                    <FaGithub /> Código
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-300 hover:text-cyan-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <SubTitle>Proyectos profesionales · Backoffice</SubTitle>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 max-w-6xl w-full"
      >
        {companyProjects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(52,211,153,0.35)" }}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-emerald-400/70 backdrop-blur-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-lg font-semibold text-white">{p.title}</h4>
              <span className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-300 bg-emerald-400/10 border border-emerald-400/20">
                <FaLock size={10} /> Interno
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">{p.description}</p>
            <TechIcons tags={p.tags} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
