const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-xl tracking-wider">
        INDIANA<span className="text-nardo">SHOP</span>
      </p>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Indiana Shop — Cayenne, Guyane française
      </p>
    </div>
  </footer>
);

export default Footer;
