import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-lg font-bold text-primary-foreground">f</span>
          </div>
          <span className="font-display text-xl font-bold">framez</span>
        </a>

        {/* Nav links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Screenshots
          </a>
        </div>

        {/* CTA */}
        <Button variant="hero" size="default" asChild>
          <a href="#demo">View Demo</a>
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
