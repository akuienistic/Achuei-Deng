import { motion } from "framer-motion";
import { Play, Users, Mic2, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { icon: Play, value: "5M+", label: "Streams Worldwide", badge: "#1" },
  { icon: Users, value: "200K+", label: "Loyal Fans", badge: "Fan Favorite" },
  { icon: Mic2, value: "50+", label: "Live Performances" },
  { icon: Globe, value: "12+", label: "Countries Toured" },
];

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-secondary/20 border-y border-border/20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="text-center group"
          >
            <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <stat.icon size={22} className="text-primary-foreground" />
            </div>
            <p className="font-heading text-3xl md:text-4xl gold-text mb-1">{stat.value}</p>
            <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
