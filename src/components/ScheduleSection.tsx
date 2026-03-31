import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock } from "lucide-react";

const hours = [
  { day: "Lundi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Mardi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Mercredi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Jeudi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Vendredi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Samedi", time: "09h00 - 13h00" },
  { day: "Dimanche", time: "Fermé", closed: true },
];

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="horaires" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-nardo uppercase tracking-[0.2em] text-sm mb-3 font-medium">Horaires</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide">OUVERTURE</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Clock className="w-5 h-5 text-nardo" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Horaires d'ouverture</span>
          </div>
          <div className="space-y-4">
            {hours.map((h) => (
              <div
                key={h.day}
                className={`flex justify-between items-center py-3 border-b border-border/50 last:border-0 ${
                  h.closed ? "opacity-40" : ""
                }`}
              >
                <span className="font-medium text-sm tracking-wide">{h.day}</span>
                <span className={`text-sm ${h.closed ? "text-destructive" : "text-muted-foreground"}`}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
