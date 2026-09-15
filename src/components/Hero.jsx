import { motion } from "framer-motion";
import fotoPerfil from "../assets/foto-perfil.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-80 h-60 rounded-full overflow-hidden border-4 border-blue-600 mb-6" >
        <img
          src={fotoPerfil}
          alt="Benjamin Queupil"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl font-bold text-white"
      >
        Odaaa, Soy Benjamin Queupil
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-gray-400 mt-4"
      >
        Full Stack Developer & Analyst Datos | Laravel | SQL 
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
      >
        Ver Proyectos
      </motion.a>
    </section>
  );
}