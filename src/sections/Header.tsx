import { CutCornerButton } from '../components/CutCornerButton';
import { Hexagon } from '../components/Hexagon';

import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Careers',
    href: '/careers',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <header className='sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40'>
        <div className='container'>
          <div className='flex items-center justify-between h-24 md:h-28'>
            <div>
              <img src='/assets/images/logo.svg' alt='Block Forge Logo' />
            </div>
            <div className='flex items-center gap-4'>
              <CutCornerButton className='hidden md:inline-block'>
                Get Started
              </CutCornerButton>
              <div
                className='relative size-10'
                onClick={() => setIsOpen((curr) => !curr)}
              >
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                  <div
                    className={twMerge(
                      'bg-zinc-300 w-5 h-0.5 -translate-y-1 transition-all duration-500',
                      isOpen && 'translate-y-0 rotate-45'
                    )}
                  ></div>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                  <div
                    className={twMerge(
                      'bg-zinc-300 w-5 h-0.5 translate-y-1 transition-all duration-500',
                      isOpen && 'translate-y-0 -rotate-45'
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed bg-zinc-900 size-full top-0 left-0 z-30'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute inset-2 bg-zinc-800 rounded-md mt-24 md:mt-28 z-0'>
              <div className='absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10'>
                <Hexagon size={700} />
              </div>
              <div className='absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10'>
                <Hexagon size={1100} />
              </div>
              <div className='flex justify-center items-center h-full'>
                <nav className='flex flex-col items-center gap-12 md:gap-16'>
                  {navLinks.map(({ title, href }, index) => (
                    <motion.a
                      key={title}
                      href={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: 'linear',
                        delay: 0.25 * index,
                      }}
                    >
                      <span className='text-zinc-500 text-4xl md:text-5xl lg:text-6xl font-heading font-black hover:text-zinc-300 transition duration-300'>
                        {title}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
