import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fish, Target, Tent, Wrench } from "lucide-react";

const categories = [
  {
    icon: Fish,
    title: "Pêche",
    desc: "Cannes, moulinets, leurres, appâts et accessoires pour tous les types de pêche.",
  },
  {
    icon: Target,
    title: "Chasse",
    desc: "Arcs, flèches, munitions, jumelles, vêtements et bottes de chasse.",
  },
  {
    icon: Tent,
    title: "Camping",
    desc: "Équipement de camping pour vos aventures en pleine nature guyanaise.",
  },
  {
    icon: Wrench,
    title: "Services",
    desc: "Montage de cannes à pêche, affûtage de couteaux et conseils personnalisés.",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-nardo uppercase tracking-[0.2em] text-sm mb-3 font-medium">Nos articles</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide">
            TOUT POUR VOS PASSIONS
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-lg p-8 text-center group hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center group-hover:bg-nardo-dark/20 transition-colors">
                <cat.icon className="w-7 h-7 text-nardo" />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-3">{cat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
