const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold">Framez</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 framez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
