import type { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export const Circle = (
  props: ComponentPropsWithoutRef<'div'> & { animate?: boolean }
) => {
  const { className, children, animate = false } = props;

  return (
    <div
      className={twMerge(
        'relative bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full',
        className
      )}
    >
      <motion.div
        className={twMerge(
          'absolute inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 rounded-full',
          animate && 'border-[6px] border-transparent border-t-fuchsia-500/30'
        )}
        animate={animate && { rotate: 360 }}
        transition={{
          ease: 'linear',
          duration: 15,
          repeat: Infinity,
        }}
      />
      {children}
    </div>
  );
};
