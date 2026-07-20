import { motion } from "motion/react";

export default function GlowingHeart() {
  // We'll generate a few floating/rising hearts/sparkles of different sizes, speeds, and paths.
  const floatingHearts = [
    { id: 1, size: 14, delay: 0, x: -20, y: -30, rotate: -15 },
    { id: 2, size: 10, delay: 0.6, x: 25, y: -45, rotate: 20 },
    { id: 3, size: 16, delay: 1.2, x: -15, y: -60, rotate: -10 },
    { id: 4, size: 12, delay: 1.8, x: 20, y: -75, rotate: 15 },
    { id: 5, size: 15, delay: 0.9, x: -5, y: -50, rotate: 5 },
    { id: 6, size: 8, delay: 2.2, x: -25, y: -90, rotate: -25 },
  ];

  const floatingStars = [
    { id: 1, size: 12, delay: 0.3, x: -25, y: -40 },
    { id: 2, size: 14, delay: 1.5, x: 22, y: -55 },
    { id: 3, size: 10, delay: 2.1, x: 10, y: -95 },
  ];

  return (
    <div className="relative inline-flex items-center justify-center w-20 h-20 shrink-0 select-none">
      {/* Background soft heartbeat aura rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-rose-500/10"
        animate={{
          scale: [1, 1.4, 1.7, 1.4, 1],
          opacity: [0.6, 0.4, 0, 0.4, 0.6],
        }}
        transition={{
          duration: 2.0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-2 rounded-full bg-rose-500/15"
        animate={{
          scale: [1, 1.25, 1.5, 1.25, 1],
          opacity: [0.7, 0.5, 0, 0.5, 0.7],
        }}
        transition={{
          duration: 2.0,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Floating Sparkles/Hearts (Love Overflow Animation) */}
      {floatingHearts.map((fh) => (
        <motion.div
          key={`heart-${fh.id}`}
          className="absolute text-rose-400 pointer-events-none"
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{
            x: [0, fh.x * 0.5, fh.x, fh.x * 1.2],
            y: [0, fh.y * 0.4, fh.y * 0.8, fh.y],
            scale: [0, 1.2, 1.0, 0],
            opacity: [0, 0.9, 0.8, 0],
            rotate: [0, fh.rotate * 0.5, fh.rotate, fh.rotate * 1.3],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: fh.delay,
            ease: "easeOut",
          }}
          style={{
            fontSize: fh.size,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Sparkling light particles */}
      {floatingStars.map((fs) => (
        <motion.div
          key={`star-${fs.id}`}
          className="absolute text-yellow-400 pointer-events-none"
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{
            x: [0, fs.x * 0.6, fs.x],
            y: [0, fs.y * 0.6, fs.y],
            scale: [0, 1.3, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: fs.delay,
            ease: "easeInOut",
          }}
          style={{
            fontSize: fs.size,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Main Core Heart Container */}
      <motion.div
        className="relative z-10 w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center cursor-pointer shadow-[0_8px_20px_rgba(244,63,94,0.4)] border border-rose-400/40"
        animate={{
          scale: [1, 1.15, 0.95, 1.18, 1],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.25,
          filter: "brightness(1.1)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7.5 h-7.5 text-white filter drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)]"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>

        {/* Highlight sheen curve inside the heart for premium 3D feeling */}
        <div className="absolute top-1.5 left-2.5 w-8 h-4 bg-white/25 rounded-full blur-[1px] rotate-[-25deg] pointer-events-none" />
      </motion.div>
    </div>
  );
}
