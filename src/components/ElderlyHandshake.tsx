import { motion } from "motion/react";

export default function ElderlyHandshake() {
  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-6 py-4">
      {/* Left Elder (Grandpa) */}
      <motion.div 
        className="flex flex-col items-center select-none"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hair and Head */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          {/* Hair */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-14 h-6 sm:w-16 sm:h-7 bg-slate-300 rounded-t-full border-b border-slate-400" />
          {/* Face */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-[#FCE8E6] rounded-full border border-amber-200 shadow-inner flex flex-col items-center justify-center">
            {/* Glasses */}
            <div className="flex space-x-1 mt-1">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-500 bg-white/40" />
              <div className="w-1.5 h-0.5 bg-gray-500 self-center" />
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-500 bg-white/40" />
            </div>
            {/* Kind Eyes behind glasses */}
            <div className="flex space-x-4 -mt-3.5 sm:-mt-4">
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
            </div>
            {/* Smile */}
            <div className="w-4.5 h-2 border-b-2 border-amber-800/80 rounded-b-full mt-2" />
          </div>
        </div>
        {/* Body */}
        <div className="w-16 h-8 sm:w-20 sm:h-10 bg-[#4E7C59] rounded-t-3xl border border-[#3D6646] shadow-sm flex justify-end items-end">
          {/* Sleeve & Arm */}
          <motion.div 
            className="w-8 h-4 sm:w-10 sm:h-5 bg-[#619C70] rounded-full origin-left -mr-4 mb-2 flex items-center justify-end pr-1 border border-[#4E7C59]"
            animate={{ rotate: [0, -4, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {/* Hand */}
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FCE8E6] rounded-full border border-amber-200" />
          </motion.div>
        </div>
      </motion.div>

      {/* Handshake Clasp in Middle */}
      <motion.div
        className="relative z-10 flex items-center justify-center -mx-1 bg-white/90 rounded-full p-3 border border-green-200 shadow-md"
        animate={{ y: [0, -6, 0, -6, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut"
        }}
      >
        <span className="text-3xl sm:text-4xl md:text-5xl select-none leading-none">🤝</span>
        {/* Pulse effect rings */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-green-300"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Right Elder (Grandma) */}
      <motion.div 
        className="flex flex-col items-center select-none"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Hair and Head */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          {/* Curly Hair (three circles) */}
          <div className="absolute top-1 left-2 w-7 h-7 sm:w-8 sm:h-8 bg-slate-300 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-slate-300 rounded-full" />
          <div className="absolute top-1 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-slate-300 rounded-full" />
          {/* Curly Bun */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 bg-slate-300 rounded-full border border-slate-400/30" />
          
          {/* Face */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-[#FCE8E6] rounded-full border border-amber-200 shadow-inner flex flex-col items-center justify-center z-10">
            {/* Blushing cheeks */}
            <div className="absolute inset-x-1 top-6 flex justify-between px-1 opacity-70">
              <div className="w-2 h-1 bg-pink-300 rounded-full blur-[0.5px]" />
              <div className="w-2 h-1 bg-pink-300 rounded-full blur-[0.5px]" />
            </div>
            {/* Kind Eyes */}
            <div className="flex space-x-4 mt-2">
              <div className="w-1.5 h-1.5 border-t-2 border-x-0 border-b-0 border-gray-600 rounded-t-full" />
              <div className="w-1.5 h-1.5 border-t-2 border-x-0 border-b-0 border-gray-600 rounded-t-full" />
            </div>
            {/* Smile */}
            <div className="w-4 h-2 border-b-2 border-amber-800/80 rounded-b-full mt-1.5" />
          </div>
        </div>
        {/* Body */}
        <div className="w-16 h-8 sm:w-20 sm:h-10 bg-[#D8A44C] rounded-t-3xl border border-[#B58434] shadow-sm flex justify-start items-end">
          {/* Sleeve & Arm */}
          <motion.div 
            className="w-8 h-4 sm:w-10 sm:h-5 bg-[#E8B65D] rounded-full origin-right -ml-2 mb-2 flex items-center justify-start pl-1 border border-[#D8A44C]"
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {/* Hand */}
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#FCE8E6] rounded-full border border-amber-200" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
