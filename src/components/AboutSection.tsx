import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const stats = [
  { icon: Award, value: "20+", label: "Années d'expérience" },
  { icon: Shield, value: "100%", label: "Qualité garantie" },
  { icon: Users, value: "∞", label: "Clients satisfaits" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left - Image with floating stat */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Articles de pêche et chasse"
              loading="lazy"
              width={800}
              height={900}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            {/* Floating stat on image */}
            <div className="absolute bottom-6 right-6 glass-card rounded-lg px-6 py-4">
              <p className="font-display text-4xl text-gold">20+</p>
              <p className="text-sm text-secondary-foreground">Années d'expertise</p>
            </div>
          </div>

          {/* Right - Text & stats */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3 font-medium">À Propos</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-8">
              LA RÉFÉRENCE EN GUYANE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Indiana Shop est une boutique spécialisée dans les articles de pêche et de chasse, 
              située en plein cœur de Cayenne. Avec ses 20 années d'expérience dans le domaine, 
              Indiana Shop s'est imposé comme une référence incontournable pour les passionnés 
              de pêche et de chasse en Guyane.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Cannes à pêche, leurres, appâts, accessoires, arcs, flèches, munitions, vêtements, 
              bottes, jumelles et bien plus encore. L'équipe de professionnels est à l'écoute des 
              clients et saura les conseiller avec pertinence.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card rounded-lg p-5 text-center"
                >
                  <stat.icon className="w-5 h-5 text-gold mx-auto mb-3" />
                  <p className="font-display text-2xl">{stat.value}</p>
                  <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
