import { motion } from "framer-motion";
import { FaDatabase, FaChartBar, FaFileExcel, FaClock, FaBuilding } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiSupabase,
  SiVercel,
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiLinux,
  SiGit,
  SiJira,
} from "react-icons/si";

const techIcons = {
  React: { icon: SiReact, color: "#61dafb" },
  Tailwind: { icon: SiTailwindcss, color: "#38bdf8" },
  "Framer Motion": { icon: SiFramer, color: "#e879f9" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  Vercel: { icon: SiVercel, color: "var(--color-white)" },
  Laravel: { icon: SiLaravel, color: "#ff2d20" },
  PHP: { icon: SiPhp, color: "#8892bf" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  jQuery: { icon: SiJquery, color: "#0769ad" },
  Bootstrap: { icon: SiBootstrap, color: "#7952b3" },
  Linux: { icon: SiLinux, color: "#fcc624" },
  Git: { icon: SiGit, color: "#f05032" },
  Jira: { icon: SiJira, color: "#2684ff" },
  "SQL Server": { icon: FaDatabase, color: "#cc2927" },
  "Google Charts": { icon: FaChartBar, color: "#4285f4" },
  Excel: { icon: FaFileExcel, color: "#21a366" },
  "CRON Jobs": { icon: FaClock, color: "#a3a3a3" },
  "Softland ERP": { icon: FaBuilding, color: "#60a5fa" },
};

export default function TechIcons({ tags }) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag) => {
        const { icon: Icon, color } = techIcons[tag];
        return (
          <span key={tag} className="relative group/tech">
            <motion.span
              aria-label={tag}
              tabIndex={0}
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 outline-none"
            >
              <Icon size={20} color={color} />
            </motion.span>
            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap text-white bg-neutral-800 border border-white/10 shadow-lg opacity-0 translate-y-1 transition-all duration-200 group-hover/tech:opacity-100 group-hover/tech:translate-y-0 group-focus-within/tech:opacity-100 group-focus-within/tech:translate-y-0">
              {tag}
            </span>
          </span>
        );
      })}
    </div>
  );
}
