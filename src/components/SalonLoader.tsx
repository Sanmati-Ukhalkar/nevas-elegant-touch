import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.svg';

interface SalonLoaderProps {
  onFinish: () => void;
}

export default function SalonLoader({ onFinish }: SalonLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2300);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='flex flex-col items-center justify-center h-screen w-full bg-gradient-cream dark:bg-[#1a1412] relative overflow-hidden'
    >
      {/* Golden Wave Background Effect */}
      <motion.div
        className='absolute inset-0 opacity-[0.28]'
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--gold-light)), hsl(var(--copper)), hsl(var(--gold-light)), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Gold Texture Overlay */}
      <div className='absolute inset-0 opacity-20 texture-overlay dark:opacity-30'></div>

      {/* Logo with Glow Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative z-10 mb-8'
      >
        <motion.div
          animate={{
            filter: [
              'drop-shadow(0 0 20px hsl(var(--gold-light)))',
              'drop-shadow(0 0 40px hsl(var(--copper)))',
              'drop-shadow(0 0 20px hsl(var(--gold-light)))',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src={logo} alt="Neva's Hair & Beauty Lounge" className='w-32 h-32 md:w-40 md:h-40' />
        </motion.div>
      </motion.div>

      {/* Rotating Scissors Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 0.6, delay: 0.3 },
          rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
        }}
        className='relative z-10'
      >
        <svg
          width='90'
          height='90'
          fill='none'
          stroke='hsl(var(--copper))'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
          className='drop-shadow-gold'
        >
          <path d='M4 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 7.5l15 9M4 16.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4.5 16.5l15-9' />
        </svg>
      </motion.div>

      {/* Loader Text with Fade Pulse */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className='mt-6 text-copper dark:text-copper-light font-poppins font-medium tracking-wide text-sm relative z-10'
      >
        Styling your experience…
      </motion.p>
    </motion.div>
  );
}
