import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-nardo uppercase tracking-[0.2em] text-sm mb-3 font-medium">Contact</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide">VENEZ NOUS VOIR</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, label: "Téléphone", value: "05 94 31 82 50", href: "tel:0594318250" },
            { icon: Mail, label: "Email", value: "indianashop@orange.fr", href: "mailto:indianashop@orange.fr" },
            { icon: MapPin, label: "Adresse", value: "8 rue Rouget de Lisle\n97300 Cayenne", href: "https://maps.google.com/?q=8+rue+Rouget+de+Lisle+97300+Cayenne" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-lg p-8 text-center hover:bg-secondary/50 transition-colors group block"
            >
              <div className="w-14 h-14 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-nardo-dark/20 transition-colors">
                <item.icon className="w-6 h-6 text-nardo" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-medium text-sm whitespace-pre-line">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden border border-border"
        >
          <iframe
            title="Indiana Shop - Cayenne"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6!2d-52.3333!3d4.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTYnMDAuMCJOIDUywrAyMCcwMC4wIlc!5e0!3m2!1sfr!2sgf!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
