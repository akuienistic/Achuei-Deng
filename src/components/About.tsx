import { motion } from "framer-motion";
import { Music, MapPin, Disc3, Award, Star } from "lucide-react";
import aboutImg from "@/assets/achuei-about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-3"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl mb-12 gold-text"
        >
          The Artist
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <img
                src={aboutImg}
                alt="Achuei Deng Ajing in a floral dress"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:right-4 glass-card rounded-xl p-4 flex items-center gap-3 border border-primary/30"
            >
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <Award size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">Crowned</p>
                <p className="text-sm font-body font-semibold text-primary">Queen of Afrobeats</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text + cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-5 text-foreground/70 font-body leading-relaxed mb-8">
              <p>
                <span className="text-primary font-semibold">Achuei Deng Ajing</span> is a South Sudanese
                Afrobeats sensation hailing from <strong className="text-foreground/90">Warrap State</strong> and
                based in <strong className="text-foreground/90">Juba</strong>. Her music weaves together rich
                cultural traditions with modern Afrobeats rhythms, creating a sound that is distinctly her own.
              </p>
              <p>
                With her debut album <em className="text-primary">"Bhar El Ghazal"</em> (2022), Achuei captivated
                audiences across East Africa and beyond. Her 2025 single <em className="text-primary">"Yol Kewen"</em> solidified
                her place as one of South Sudan's most exciting musical voices — earning her the title
                <strong className="text-foreground/90"> "Queen of Afrobeats."</strong>
              </p>
              <p>
                Her performances are a celebration of identity, resilience, and joy — blending powerful vocals
                with electrifying stage presence that leaves audiences spellbound.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: MapPin, label: "Based in", value: "Juba, South Sudan" },
                { icon: Music, label: "Genre", value: "Afrobeats · Afro-Soul" },
                { icon: Disc3, label: "Notable Works", value: '"Bhar El Ghazal" (2022), "Yol Kewen" (2025)' },
                { icon: Star, label: "Recognition", value: "East Africa's Rising Star" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-body">{item.label}</p>
                    <p className="text-foreground font-body font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
