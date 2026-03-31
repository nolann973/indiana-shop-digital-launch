import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-3 font-medium">Contact</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide mb-4">VENEZ NOUS VOIR</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Situé au cœur de Cayenne, Indiana Shop est facilement accessible pour tous les passionnés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Map / Store card - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 glass-card rounded-lg overflow-hidden"
          >
            <div className="h-64 bg-secondary">
              <iframe
                title="Indiana Shop - Cayenne"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6!2d-52.3333!3d4.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTYnMDAuMCJOIDUywrAyMCcwMC4wIlc!5e0!3m2!1sfr!2sgf!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl tracking-wide mb-1">INDIANA SHOP</h3>
              <p className="text-muted-foreground text-sm mb-4">8 rue Rouget de Lisle, 97300 Cayenne</p>
              <a
                href="https://maps.google.com/?q=8+rue+Rouget+de+Lisle+97300+Cayenne"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors"
              >
                Voir sur Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact cards - takes 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {[
              { icon: Phone, label: "Téléphone", value: "05 94 31 82 50", href: "tel:0594318250" },
              { icon: Mail, label: "Email", value: "indianashop@orange.fr", href: "mailto:indianashop@orange.fr" },
              { icon: MapPin, label: "Adresse", value: "8 rue Rouget de Lisle, 97300 Cayenne", href: "https://maps.google.com/?q=8+rue+Rouget+de+Lisle+97300+Cayenne" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-lg p-6 flex items-center gap-5 hover:bg-secondary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
