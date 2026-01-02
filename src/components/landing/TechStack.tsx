import { motion } from "framer-motion";

const technologies = [
  {
    name: "React Native",
    description: "Cross-platform mobile development",
    icon: "⚛️",
  },
  {
    name: "TypeScript",
    description: "Type-safe code for reliability",
    icon: "📘",
  },
  {
    name: "Supabase",
    description: "Real-time database & auth",
    icon: "⚡",
  },
];

const TechStack = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Built with <span className="gradient-text">modern tech</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powered by industry-leading technologies for the best performance.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex min-w-[280px] items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-2xl">
                {tech.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
