import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/10 p-12 text-center md:p-16"
        >
          {/* Background glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
              Ready to join{" "}
              <span className="gradient-text">Framez?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Experience the future of social connection. Try our live demo now 
              or get notified when we launch.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Try Live Demo
                </a>
              </Button>
              {/* <Button variant="heroOutline" size="xl">
                <Mail className="mr-2 h-5 w-5" />
                Get Notified
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
