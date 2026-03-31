import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Équipement de pêche et chasse" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-nardo uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-medium">
            Pêche • Chasse • Camping
          </p>
          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-wider mb-6">
            INDIANA<br />
            <span className="text-gradient">SHOP</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8 font-light">
            Votre spécialiste depuis 20 ans au cœur de Cayenne
          </p>
          <div className="flex items-center justify-center gap-2 text-nardo-dark">
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wide">8 rue Rouget de Lisle, 97300 Cayenne</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
