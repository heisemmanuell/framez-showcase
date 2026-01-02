import { motion } from "framer-motion";
import { Zap, Shield, Users, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "See posts, likes, and comments appear instantly. No refresh needed—your feed stays live.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Built with robust auth systems to keep your account safe. Your data, your control.",
  },
  {
    icon: Users,
    title: "Genuine Connections",
    description:
      "Connect with friends and communities that matter. Build meaningful relationships.",
  },
  {
    icon: Smartphone,
    title: "Native Experience",
    description:
      "Crafted with React Native for buttery-smooth performance on iOS and Android.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Why choose <span className="gradient-text">Framez?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built from the ground up with modern technologies to deliver the 
            best social experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-display text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
