import { motion } from "motion/react";

export default function AnimatedShield() {
  return (
    <div className="relative flex items-center justify-center w-36 h-36 md:w-44 md:h-44 shrink-0 select-none">
      {/* Outer pulsing protective barrier dome (Aura 1) */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/10 border-2 border-green-500/30"
        animate={{
          scale: [1, 1.15, 1.3, 1.15, 1],
          opacity: [0.15, 0.4, 0.0, 0.15, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Second pulsing protective ring (Aura 2) */}
      <motion.div
        className="absolute inset-2 rounded-full bg-emerald-500/5 border border-emerald-400/20"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Sparkles/Particles (Reassurance / Insurance Active Protection) */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-400"
          animate={{
            y: [10, -50],
            x: [0, (i % 2 === 0 ? 25 : -25), 0],
            scale: [0, 1.2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
          style={{
            bottom: "20%",
            left: `${30 + i * 15}%`,
          }}
        />
      ))}

      {/* Main Shield Container */}
      <motion.div
        className="relative z-10 w-24 h-28 md:w-28 md:h-32 drop-shadow-xl flex items-center justify-center"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(78,124,89,0.35)]"
        >
          <defs>
            {/* Metallic Gold/Bronze Gradient for Outer Rim */}
            <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAD397" />
              <stop offset="35%" stopColor="#D8A44C" />
              <stop offset="70%" stopColor="#B58434" />
              <stop offset="100%" stopColor="#8C611D" />
            </linearGradient>

            {/* Radiant Protective Green Gradient for Left Side */}
            <linearGradient id="shieldLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#63996F" />
              <stop offset="100%" stopColor="#4E7C59" />
            </linearGradient>

            {/* Trustworthy Gold Gradient for Right Side */}
            <linearGradient id="shieldRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9D48C" />
              <stop offset="100%" stopColor="#E5B254" />
            </linearGradient>

            {/* Glowing Sweep Effect */}
            <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.45" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            
            {/* Inner Shadow for realistic look */}
            <filter id="innerShadow">
              <feOffset dx="0" dy="3"/>
              <feGaussianBlur stdDeviation="3" result="offset-blur"/>
              <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
              <feFlood floodColor="black" floodOpacity="0.2" result="color"/>
              <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
              <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
            </filter>
          </defs>

          {/* Outer Shield Rim (Gold) */}
          <path
            d="M50 5 C75 5, 90 20, 90 55 C90 85, 70 105, 50 115 C30 105, 10 85, 10 55 C10 20, 25 5, 50 5 Z"
            fill="url(#shieldRim)"
          />

          {/* Inner Shield (Green and Gold halves) */}
          <g filter="url(#innerShadow)">
            {/* Left side of shield: Reassuring Safe Green */}
            <path
              d="M50 12 C70 12, 82 24, 82 55 C82 80, 66 98, 50 106 Z"
              fill="url(#shieldLeft)"
            />
            {/* Right side of shield: Protective Golden Harvest */}
            <path
              d="M50 12 C30 12, 18 24, 18 55 C18 80, 34 98, 50 106 Z"
              fill="url(#shieldRight)"
            />
          </g>

          {/* Golden Shield Division Line */}
          <line
            x1="50"
            y1="12"
            x2="50"
            y2="106"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Security Checkmark in the center with drawing/flashing checkmark effect */}
          <g transform="translate(32, 40)">
            {/* White Circle Background */}
            <circle cx="18" cy="18" r="14" fill="#FFFFFF" className="opacity-95" />
            {/* Checkmark Icon */}
            <path
              d="M10 18 L15 23 L26 12"
              fill="none"
              stroke="#4E7C59"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Shining sweep effect running across the shield */}
          <mask id="shieldMask">
            <path
              d="M50 12 C70 12, 82 24, 82 55 C82 80, 66 98, 50 106 C34 98, 18 80, 18 55 C18 24, 30 12, 50 12 Z"
              fill="white"
            />
          </mask>
          
          <g mask="url(#shieldMask)">
            <motion.rect
              x="-100"
              y="0"
              width="100"
              height="150"
              fill="url(#sweepGrad)"
              transform="rotate(25)"
              animate={{
                x: ["-50", "150"],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.5,
              }}
            />
          </g>
        </svg>

        {/* Small badge saying "SECURE" in Chinese or a tiny padlock on bottom right */}
        <motion.div
          className="absolute -bottom-1 -right-1 bg-[#D8A44C] border-2 border-white text-white rounded-full p-1.5 shadow-md flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Reassuring Padlock Vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
