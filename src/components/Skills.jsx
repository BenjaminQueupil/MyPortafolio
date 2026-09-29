import { motion } from "framer-motion";
import {
  FaLaravel,
  FaPhp,
  FaReact,
  FaGitAlt,
  FaAngular,
  FaBootstrap,
  FaLinux,
  FaHtml5,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiMysql,
  SiFirebase,
  SiJira,
} from "react-icons/si";

const mainSkills = [
  { name: "PHP", icon: FaPhp },
  { name: "Laravel", icon: FaLaravel },
  { name: "SQL Server", icon: FaDatabase },
  { name: "JavaScript", icon: SiJavascript },
  { name: "jQuery", icon: SiJquery },
  { name: "HTML / CSS", icon: FaHtml5 },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Git", icon: FaGitAlt },
];

const otherSkills = [
  { name: "React", icon: FaReact },
  { name: "Angular", icon: FaAngular },
  { name: "MySQL", icon: SiMysql },
  { name: "Oracle", icon: FaDatabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "Jira", icon: SiJira },
  { name: "Linux", icon: FaLinux },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.03 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const accentColors = [
  "hover:text-cyan-300 hover:border-cyan-400/40",
  "hover:text-cyan-400 hover:border-cyan-500/40",
  "hover:text-emerald-400 hover:border-emerald-500/40",
  "hover:text-teal-300 hover:border-cyan-500/40",
];

function GroupTitle({ children }) {
  return (
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-5"
    >
      {children}
      <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
    </motion.h3>
  );
}

function SkillGrid({ skills }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
      className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl w-full"
    >
      {skills.map(({ name, icon: Icon }, i) => (
        <motion.div
          key={name}
          variants={item}
          whileHover={{ scale: 1.1, y: -6, rotate: i % 2 === 0 ? 3 : -3 }}
          className={`w-[calc(25%-0.6rem)] sm:w-28 aspect-square flex flex-col items-center justify-center gap-2 text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-neutral-300 transition-colors ${
            accentColors[i % accentColors.length]
          }`}
        >
          <Icon size={30} />
          <span className="text-[11px] sm:text-xs font-medium leading-tight">{name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-hidden bg-base-alt"
    >
      <motion.div
        className="hidden sm:block pointer-events-none absolute -z-10 top-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-cyan-500/15 blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute -z-10 top-0 right-1/4 w-[20rem] h-[20rem] rounded-full bg-cyan-500/10 blur-3xl sm:hidden" />
      <div className="pointer-events-none absolute -z-10 bottom-0 left-1/4 w-[24rem] h-[24rem] rounded-full bg-teal-500/10 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12"
      >
        Skills
      </motion.h2>

      <GroupTitle>Stack principal</GroupTitle>
      <SkillGrid skills={mainSkills} />

      <div className="h-12" />

      <GroupTitle>También trabajo con</GroupTitle>
      <SkillGrid skills={otherSkills} />
    </section>
  );
}
