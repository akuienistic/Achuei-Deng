import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import upcomingEventImg from "@/assets/Upcoming Event.jpg";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Save The Date
          </p>
          <h2 className="font-heading text-4xl md:text-5xl gold-text text-shadow-gold">
            Upcoming Event
          </h2>
        </motion.div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/10"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Event Image */}
            <div className="relative aspect-square md:aspect-auto overflow-hidden">
              <img
                src={upcomingEventImg}
                alt="Achuei Live in Concert - March 15, 2025"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 md:bg-gradient-to-r md:from-transparent md:to-card/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:hidden" />
            </div>

            {/* Event Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Event Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-body mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Live Concert
                </div>

                {/* Event Title */}
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 gold-text">
                  ACHUEI LIVE IN CONCERT
                </h3>

                {/* Event Description */}
                <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
                  Experience an unforgettable night of electrifying Afrobeats as Achuei Deng Ajing, 
                  South Sudan's rising star and the Queen of Afrobeats, takes the stage. Join us for 
                  an evening filled with powerful vocals, captivating performances, and special guest 
                  appearances that will leave you mesmerized. Don't miss this incredible musical journey!
                </p>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-body">Date</p>
                      <p className="font-body font-medium">March 15, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-foreground/80">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-body">Time</p>
                      <p className="font-body font-medium">6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-foreground/80 sm:col-span-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-body">Venue</p>
                      <p className="font-body font-medium">Nairobi National Theatre</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
