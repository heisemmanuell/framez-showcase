import { motion } from "framer-motion";
import screenshotFeed from "@/assets/screenshot-feed.png";
import screenshotProfile from "@/assets/screenshot-profile.png";
import screenshotChat from "@/assets/screenshot-chat.png";

const screenshots = [
  {
    image: screenshotFeed,
    title: "Live Feed",
    description: "See updates from your community in real-time",
  },
  {
    image: screenshotProfile,
    title: "Profile",
    description: "Showcase your personality and content",
  },
  {
    image: screenshotChat,
    title: "Messaging",
    description: "Connect with friends through instant chat",
  },
];

const Screenshots = () => {
  return (
    <section id="demo" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Experience <span className="gradient-text">framez</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A glimpse into the app that's redefining social connection.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 scale-95 rounded-[3rem] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Phone mockup */}
              <div className="relative rounded-[3rem] border-4 border-muted/50 bg-card p-2 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[2.5rem]">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="h-[500px] w-auto object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute left-1/2 top-4 h-5 w-20 -translate-x-1/2 rounded-full bg-background" />
              </div>

              {/* Label */}
              <div className="mt-6 text-center">
                <h3 className="font-display text-xl font-semibold">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
