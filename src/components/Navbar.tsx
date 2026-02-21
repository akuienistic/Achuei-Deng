import { useState, useEffect } from "react";
import { Home, User, Music, Video, Mail, Menu, X, Bell, Sun, Moon, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Events", href: "#events", icon: Calendar },
  { label: "About", href: "#about", icon: User },
  { label: "Music", href: "#music", icon: Music },
  { label: "Videos", href: "#videos", icon: Video },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="font-heading text-xl tracking-[0.3em] text-primary">
            ACHUEI
          </a>

          {/* Desktop nav - centered */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-body tracking-wider text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <item.icon size={16} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Subscribe button - right */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 gold-gradient text-primary-foreground font-body font-semibold text-xs tracking-wider rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Bell size={14} />
            Subscribe
          </a>

          {/* Mobile hamburger */}
          <button className="md:hidden text-primary" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 z-[70] md:hidden glass-card border-l border-border/30 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-primary" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 px-4 rounded-lg text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-all duration-300 font-body tracking-wider"
              >
                <item.icon size={18} />
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-3 px-4 mt-4 rounded-full gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider justify-center"
            >
              <Bell size={16} />
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
