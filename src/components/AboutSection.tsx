import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Années d'expérience" },
  { icon: Users, value: "∞", label: "Clients satisfaits" },
  { icon: Award, value: "#1", label: "Référence en Guyane" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div>
            <p className="text-nardo uppercase tracking-[0.2em] text-sm mb-3 font-medium">À propos</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-6">
              NOTRE HISTOIRE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indiana Shop est une boutique spécialisée dans les articles de pêche et de chasse, 
              située en plein cœur de Cayenne. Avec ses 20 années d'expérience dans le domaine, 
              Indiana Shop s'est imposé comme une référence incontournable pour les passionnés 
              de pêche et de chasse en Guyane.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'équipe de professionnels est à l'écoute des clients et saura les conseiller 
              avec pertinence sur les articles les plus adaptés à leurs besoins. Le magasin offre 
              également des prestations de qualité comme le montage de cannes à pêche ou 
              l'affûtage de couteaux de chasse.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-lg p-6 flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-nardo" />
                </div>
                <div>
                  <p className="font-display text-3xl tracking-wide">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
