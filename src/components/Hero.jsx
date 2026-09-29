import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import fotoPerfil from "../assets/foto-perfil.jpg";

const NAME = "Benjamin Queupil";

function letterColor(i, total) {
  const hue = 160 + (i / (total - 1)) * 90;
  return {
    color: `hsl(${hue} 85% var(--name-lightness))`,
    textShadow: `0 1px 0 hsl(${hue} 70% 35%), 0 2px 0 hsl(${hue} 70% 28%), 0 3px 0 hsl(${hue} 70% 22%), 0 8px 16px var(--name-glow)`,
  };
}

function Name3D() {
  const letters = NAME.replace(" ", "").length;
  let index = 0;

  return (
    <span className="block mt-1" style={{ perspective: 800 }}>
      {NAME.split(" ").map((word) => (
        <span key={word} className="inline-block whitespace-nowrap mx-2">
          {word.split("").map((char) => {
            const i = index++;
            return (
              <motion.span
                key={i}
                className="inline-block cursor-default"
                style={letterColor(i, letters)}
                initial={{ opacity: 0, rotateX: -90, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 200, damping: 12 }}
                whileHover={{ y: -10, rotateY: 25, scale: 1.2 }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="home"
      className="relative sm:min-h-screen flex flex-col items-center justify-start sm:justify-center text-center px-4 pt-24 pb-16 sm:pt-0 sm:pb-0 overflow-hidden bg-base-alt"
    >
      <motion.div
        className="pointer-events-none absolute -z-10 -top-40 left-1/3 w-[36rem] h-[36rem] rounded-full bg-emerald-500/15 blur-3xl"
        animate={{ x: [0, 60, -40, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -z-10 bottom-[-8rem] right-1/4 w-[28rem] h-[28rem] rounded-full bg-cyan-600/20 blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
        className="mb-8"
      >
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY }}
          className="photo-frame relative w-65 sm:w-72 aspect-[4/5] sm:aspect-[3/4] rounded-3xl p-1 shadow-2xl shadow-cyan-500/30"
        >
          <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden isolate bg-base-alt">
            <img
              src={fotoPerfil}
              alt="Benjamin Queupil"
              className="w-full h-full object-cover object-[center_30%] scale-106"
            />
          </div>
        </motion.div>
      </motion.div>

      <h1 className="font-extrabold tracking-tight">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block text-xl sm:text-2xl font-medium text-neutral-300"
        >
          Holi, yo soy
        </motion.span>
        <span className="text-4xl sm:text-6xl">
          <Name3D />
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-lg sm:text-xl text-neutral-400 mt-4 max-w-xl"
      >
        Desarrollador Full Stack & Analista de Datos
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 rounded-full text-neutral-950 font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-cyan-500/30"
        >
          Ver Proyectos
        </motion.a>
        <motion.a
          href="/CV-BenjaminQueupil.pdf"
          download
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="px-6 py-3 rounded-full text-white font-medium border border-white/20 bg-white/5 backdrop-blur-md hover:border-cyan-400/60 hover:text-cyan-300 transition"
        >
          Descargar CV
        </motion.a>
      </motion.div>
    </section>
  );
}
