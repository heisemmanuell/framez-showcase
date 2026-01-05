import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Github } from "lucide-react";
import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Real-time social experience
            </motion.div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Share your{" "}
              <span className="gradient-text">moments</span>
              <br />
              in real-time
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Framez brings your social experience to life with instant updates, 
              seamless interactions, and a beautiful interface designed for 
              genuine connections.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="https://drive.google.com/drive/folders/1pAq4yAqux0IfgiLkyRVErdsnDOpUN4Ci?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  View Live Demo
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://github.com/heisemmanuell/Framez" target="_blank" rel="noopener noreferrer">
                  Github
                  <Github className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex justify-center gap-8 border-t border-border/50 pt-8 lg:justify-start"
            >
              {[
                { value: "10K+", label: "Active Users" },
                { value: "50K+", label: "Posts Shared" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative animate-float">
              {/* Glow behind phone */}
              <div className="absolute inset-0 scale-90 rounded-[3rem] bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />
              
              {/* Phone frame */}
              <div className="relative rounded-[3rem] border-4 border-muted bg-card p-2 shadow-2xl">
                <div className="overflow-hidden rounded-[2.5rem]">
                  <img
                    src={hero}
                    alt="framez app feed"
                    className="h-[600px] w-auto object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-background" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
