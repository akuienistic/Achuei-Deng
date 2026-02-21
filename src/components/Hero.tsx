import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/achuei-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Achuei Deng Ajing in elegant red dress"
          className="w-full h-full object-cover fill bg-center brightness-75"
        />
        {/* lighter gradients so face remains visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/0 to-background/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20" />
      </div>

      {/* Floating gold particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mt-40">
              South Sudan's Rising Star
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-shadow-gold"
          >
            <span className="gold-text">Achuei</span>
            <br />
            Deng Ajing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-heading italic text-xl md:text-2xl text-foreground/60 mb-4"
          >
            Queen of Afrobeats
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="font-body text-foreground/50 text-sm md:text-base max-w-lg mb-10 leading-relaxed"
          >
            A voice that echoes the spirit of South Sudan — blending rich cultural heritage with
            electrifying Afrobeats rhythms that captivate audiences across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#music"
              className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              <Play size={16} />
              Listen Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/40 text-primary font-body font-semibold text-sm tracking-wider rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              Discover More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
