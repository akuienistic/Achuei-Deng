import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Achuei's voice carries the soul of South Sudan. Every performance is a masterpiece — raw, powerful, and unforgettable.",
    author: "Music Africa Magazine",
    role: "Editorial Review",
  },
  {
    text: "She is redefining Afrobeats from East Africa. Her debut album 'Bhar El Ghazal' is a cultural treasure wrapped in modern rhythms.",
    author: "DJ Malaika",
    role: "Radio Presenter, Juba FM",
  },
  {
    text: "Working with Achuei was a privilege. Her artistry, discipline, and passion for her craft are truly world-class.",
    author: "Studio 254 Productions",
    role: "Nairobi, Kenya",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-3"
        >
          Praise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mb-12 gold-text"
        >
          What They Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 relative hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <Quote size={32} className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-300" />
              <p className="font-body text-foreground/70 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="font-body font-semibold text-foreground text-sm">{t.author}</p>
              <p className="font-body text-xs text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
