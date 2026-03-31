import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Horaires", href: "#horaires" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8">
          <a href="#accueil" className="font-display text-2xl tracking-wider text-foreground">
            INDIANA SHOP
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm font-normal text-secondary-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            href="tel:0594318250"
            className="hidden md:flex items-center gap-2 text-sm text-secondary-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            05 94 31 82 50
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-strong flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleClick(link.href)}
                className="font-display text-4xl tracking-widest text-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <div className="flex flex-col items-center gap-3 mt-4">
              <a href="tel:0594318250" className="flex items-center gap-2 text-gold">
                <Phone className="w-5 h-5" /> 05 94 31 82 50
              </a>
              <a href="mailto:indianashop@orange.fr" className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5" /> indianashop@orange.fr
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
