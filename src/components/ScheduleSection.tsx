import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hours = [
  { day: "Lundi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Mardi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Mercredi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Jeudi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Vendredi", time: "09h00 - 12h30 / 15h00 - 18h30" },
  { day: "Samedi", time: "09h00 - 13h00" },
  { day: "Dimanche", time: "Fermé", closed: true },
];

const getTodayIndex = () => {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
};

const isCurrentlyOpen = () => {
  const now = new Date();
  const day = now.getDay();
  if (day === 0) return false;
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h * 60 + m;
  if (day === 6) return t >= 540 && t <= 780;
  return (t >= 540 && t <= 750) || (t >= 900 && t <= 1110);
};

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const todayIdx = getTodayIndex();
  const open = isCurrentlyOpen();

  return (
    <section id="horaires" className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3 font-medium">Horaires</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-6">
              QUAND NOUS RENDRE VISITE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nous vous accueillons dans la bonne humeur du lundi au samedi.
              N'hésitez pas à passer nous voir pour découvrir nos produits !
            </p>
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-5 py-3">
              <span className={`w-3 h-3 rounded-full ${open ? "bg-green-500" : "bg-destructive"}`} />
              <span className="text-sm font-medium">
                {open ? "Actuellement ouvert" : "Actuellement fermé"}
              </span>
            </div>
          </motion.div>

          {/* Right schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-lg overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <h3 className="font-display text-lg tracking-wider uppercase">Horaires d'ouverture</h3>
            </div>
            <div>
              {hours.map((h, i) => {
                const isToday = i === todayIdx;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center px-6 py-4 border-b border-border/30 last:border-0 ${
                      isToday ? "bg-gold/5" : ""
                    }`}
                  >
                    <span className={`text-sm font-medium ${isToday ? "text-gold" : ""}`}>
                      {h.day}
                      {isToday && <span className="text-gold/70 text-xs ml-2">(Aujourd'hui)</span>}
                    </span>
                    <span className={`text-sm ${h.closed ? "text-destructive" : "text-muted-foreground"}`}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
