import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fish, Target, Tent, Wrench, CircleDot, MessageCircle } from "lucide-react";

const categories = [
  { icon: Fish, title: "Pêche", desc: "Cannes, moulinets, leurres, appâts et accessoires" },
  { icon: Target, title: "Chasse", desc: "Arcs, flèches, munitions, vêtements et bottes" },
  { icon: Tent, title: "Camping", desc: "Équipements de camping et activités en plein air" },
  { icon: Wrench, title: "Montage", desc: "Montage de cannes à pêche sur mesure" },
  { icon: CircleDot, title: "Affûtage", desc: "Service d'affûtage de couteaux de chasse" },
  { icon: MessageCircle, title: "Conseil", desc: "Équipe de professionnels à votre écoute" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3 font-medium">Nos Services</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-4">
            TOUT POUR VOS PASSIONS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre large gamme de produits et services dédiés à la pêche, la chasse et le camping.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-8 hover:bg-secondary/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <cat.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-xl tracking-wide mb-2 uppercase">{cat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
