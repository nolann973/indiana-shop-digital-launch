import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Horaires", href: "#horaires" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xl tracking-wider mb-4">INDIANA SHOP</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre spécialiste en articles de pêche, chasse et camping depuis plus de 20 ans à Cayenne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4 uppercase">Navigation</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4 uppercase">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:0594318250" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> 05 94 31 82 50
              </a>
              <a href="mailto:indianashop@orange.fr" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> indianashop@orange.fr
              </a>
              <span className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" /> 8 rue Rouget de Lisle, 97300 Cayenne
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Indiana Shop. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
