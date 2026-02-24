import { motion } from "framer-motion";
import { Headphones, Sparkles, Music2, Play } from "lucide-react";

const Music = () => {
  return (
    <section
      id="music"
      className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase">Latest Release</p>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 gold-text"
          >
            Listen Now
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-foreground/60 max-w-2xl mx-auto text-lg"
          >
            Stream Achuei Deng Ajiing's latest track on Audiomack. Feel the rhythm of authentic Afrobeat.
          </motion.p>
        </div>

        {/* Centered Music Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl glass-card rounded-3xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
            {/* Card Header */}
            <div className="p-8 pb-6 text-center border-b border-border/20 bg-gradient-to-b from-secondary/30 to-transparent">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Music2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                    Yol Kewen
                  </h3>
                  <p className="text-muted-foreground font-body flex items-center justify-center gap-2 mt-2">
                    <Headphones className="w-4 h-4" />
                    Achuei Deng Ajiing
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-body">
                  <Play className="w-4 h-4 fill-primary" />
                  Now Playing
                </div>
              </div>
            </div>

            {/* Audiomack Embed */}
            <div className="p-6 bg-gradient-to-b from-secondary/10 to-transparent">
              <div className="rounded-2xl overflow-hidden shadow-inner bg-black/20">
                <iframe
                  src="https://audiomack.com/embed/achuei-deng-ajing/song/yol-kewen?background=1"
                  width="100%"
                  height="252"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  className="w-full"
                  title="Yol Kewen"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://audiomack.com/achuei-deng-ajing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-primary-foreground font-body font-semibold tracking-wider rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            <Headphones className="w-5 h-5" />
            View All Tracks on Audiomack
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
