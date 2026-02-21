import { motion } from "framer-motion";

const videos = [
  { id: "QMM6MM6M44A", title: "Monydie E Jieng" },
  { id: "EGw9CJWh2HU", title: "Nairobi Concert 2024" },
  { id: "C_PBMugvtIo", title: "Live Performance" },
];

const MusicVideos = () => {
  return (
    <section id="videos" className="section-padding bg-secondary/30" >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-3"
        >
          Videos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mb-4 gold-text"
        >
          Watch & Listen
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-foreground/50 max-w-xl mb-12"
        >
          Experience the energy and grace of Achuei's performances — from studio recordings to electrifying live shows.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg text-foreground">{video.title}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">Achuei Deng Ajing</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicVideos;
