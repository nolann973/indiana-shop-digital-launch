import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Expédition Guyane" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content - left aligned like reference */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pb-32 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl"
        >
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-sm text-secondary-foreground">Cayenne, Guyane Française</span>
          </div>

          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wider mb-6">
            INDIANA<br />
            <span className="text-gold">SHOP</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed">
            Votre spécialiste en articles de pêche, chasse et camping depuis plus de 20 ans.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#apropos")}
              className="px-8 py-3 rounded-lg bg-gold text-primary-foreground font-medium text-sm hover:bg-gold-light transition-colors"
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Nous Contacter
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
