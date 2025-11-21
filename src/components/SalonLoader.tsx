import { useEffect } from "react";
import { motion } from "framer-motion";

interface SalonLoaderProps {
  onFinish: () => void;
}

export default function SalonLoader({ onFinish }: SalonLoaderProps) {
  useEffect(() => {
    const t = setTimeout(() => {
      onFinish && onFinish();
    }, 2000);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-screen w-full bg-[#fdf6ec] dark:bg-[#1a1412] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] mix-blend-overlay"></div>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <svg
          width="90"
          height="90"
          fill="none"
          stroke="#b48a60"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M4 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 7.5l15 9M4 16.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 16.5l15-9" />
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="mt-5 text-[#b48a60] dark:text-[#d1a86d] text-sm tracking-wide"
      >
        Styling your experience…
      </motion.p>
    </motion.div>
  );
}
