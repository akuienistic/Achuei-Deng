import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Sparkles, Mic2, Handshake, Music, Newspaper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }
    setErrors({});
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const fields = [
    { key: "name", label: "Full Name", icon: User, type: "text", required: true, placeholder: "Your full name" },
    { key: "email", label: "Email Address", icon: Mail, type: "email", required: true, placeholder: "you@example.com" },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel", required: false, placeholder: "+211 xxx xxx xxx" },
  ] as const;

  return (
    <section id="contact" className="section-padding bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - compelling text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-3">Contact</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 gold-text">Let's Create Magic</h2>
            <p className="font-body text-foreground/60 leading-relaxed mb-6">
              Whether you're looking to <span className="text-primary font-semibold">book a performance</span>,
              explore a <span className="text-primary font-semibold">brand collaboration</span>, or simply
              connect with Achuei's world — this is where it begins.
            </p>
            <p className="font-body text-foreground/50 leading-relaxed mb-8">
              For press inquiries, concert bookings, music licensing, or partnership opportunities,
              drop a message and our team will respond within 24 hours.
            </p>
            <Badge variant="secondary" className="mb-8">Fast Response</Badge>

            <div className="space-y-4">
              {[
                { icon: Mic2, label: "Concert & Event Bookings" },
                { icon: Handshake, label: "Brand Collaborations & Endorsements" },
                { icon: Music, label: "Music Licensing & Features" },
                { icon: Newspaper, label: "Press & Media Inquiries" },
              ].map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="font-body text-foreground/70 text-sm flex items-center gap-2"
                >
                  <svc.icon size={14} />
                  {svc.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={16} className="text-primary" />
                <p className="font-body text-sm text-primary font-semibold tracking-wider uppercase">Send a Message</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {fields.map((f) => (
                  <div key={f.key}>
                    <label className="flex items-center gap-2 text-sm font-body text-foreground/70 mb-2">
                      <f.icon size={14} className="text-primary" />
                      {f.label}
                      {f.required && <span className="text-accent">*</span>}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                      placeholder={f.placeholder}
                    />
                    {errors[f.key] && (
                      <p className="text-accent text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors[f.key]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="flex items-center gap-2 text-sm font-body text-foreground/70 mb-2">
                    <MessageSquare size={14} className="text-primary" />
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all resize-none"
                    placeholder="Tell us about your vision, event, or collaboration idea..."
                  />
                  {errors.message && (
                    <p className="text-accent text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider rounded-full hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  <CheckCircle size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
