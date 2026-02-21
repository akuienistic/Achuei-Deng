import { useState, useEffect } from "react";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="font-heading text-3xl md:text-4xl gold-text mb-2 tracking-widest">
        ACHUEI
      </h1>
      <p className="font-heading italic text-lg md:text-xl text-foreground/60 mb-8">
        Queen of Afrobeats
      </p>
      <div className="flex items-end gap-1.5 h-12">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-full rounded-full gold-gradient loader-bar"
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
