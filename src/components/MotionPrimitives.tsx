import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0F0C] pointer-events-none"
    >
      {/* Subtle Architectural Coordinate Grid */}
      <div
        className="absolute inset-0 architectural-grid opacity-70"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 25%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 25%, black 35%, transparent 100%)',
        }}
      />

      {/* Primary Top-Start Emerald Aura */}
      <motion.div
        animate={{
          x: [0, 35, -15, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-48 start-[-10%] w-[640px] h-[640px] rounded-full will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(101, 179, 7, 0.16) 0%, rgba(46, 110, 6, 0.06) 45%, transparent 72%)',
        }}
      />

      {/* Secondary Bottom-End Deep Forest Aura */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.94, 1.07, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-20%] end-[-10%] w-[720px] h-[720px] rounded-full will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(67, 148, 10, 0.14) 0%, rgba(23, 46, 16, 0.08) 50%, transparent 75%)',
        }}
      />
    </div>
  );
}

export function ScrollProgressLine() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-16 inset-x-0 h-[2px] bg-gradient-to-r from-[#43940A] via-[#85DF1A] to-[#43940A] origin-start z-50 pointer-events-none"
    />
  );
}

export function HorizonArc({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 44"
      fill="none"
      aria-hidden="true"
      className={`w-full h-auto pointer-events-none ${className}`}
    >
      <motion.path
        d="M12 36C185 8 415 8 588 36"
        stroke="url(#cdHorizonGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient
          id="cdHorizonGradient"
          x1="12"
          y1="22"
          x2="588"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#43940A" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#85DF1A" stopOpacity="1" />
          <stop offset="100%" stopColor="#43940A" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface ParallaxFrameProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxFrame({ children, className = '' }: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-22, 22]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.03, 1.08]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
