import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { menuLinks } from '../../assets/data';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-6 md:px-12 2xl:px-40 flex text-zinc-50 items-center justify-end lg:justify-between
          ${scrolled ? 'bg-green-950/20 backdrop-blur-sm border-b border-white/5 py-4' : 'bg-transparent'}
        `}
      >
        {/* Menu Toggle */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-3 bg-white/10 backdrop-blur-md py-2 px-4 rounded-full border border-white/10 cursor-pointer hover:bg-white/20 transition-all group'>
          <Menu
            size={24}
            className='group-hover:rotate-90 transition-transform duration-300'
          />
          <span className='text-sm font-black uppercase tracking-widest'>
            Menu
          </span>
        </div>

        {/* Logo */}
        <div className='absolute left-[22%] lg:left-1/2 -translate-x-1/2 text-lg font-medium tracking-tighter uppercase cursor-pointer hidden lg:block'>
          Terra Cultiva <sup>©</sup>
        </div>

        {/* CTA Button */}
        <button className='hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm uppercase font-bold tracking-wide cursor-pointer hover:bg-zinc-900/80 hover:backdrop-blur-sm hover:text-zinc-50 transition-all duration-150 ease-in hover:-translate-y-1 hover:animate-border border-1 border-transparent active:scale-95'>
          Get Started
        </button>

      </nav>
      {/* Full screen menu*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100" }}
            animate={{ y: "0" }}
            exit={{ y: "-100" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className='fixed inset-0 z-[200] bg-zinc-900 text-white p-6 md:p-12 flex flex-col'
          >
            {/* Menu Header */}
            <div className='flex justify-between items-center'>
              <span className='text-sm lg:text-base capitalize font-medium tracking-wider text-zinc-500'>
                Navigation
              </span>

              <div className='size-12 rounded-full border-white/10 center-item hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group/close'>
                <X size={24} />
              </div>
            </div>

            {/* Huge Menu Links */}
            <div className='flex-1 flex flex-col justify-center'>
              {menuLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className='group flex items-center gap-6'
                >
                  <span className='text-zinc-600 text-sm font-black italic mt-4'>
                    0{i + 1}
                  </span>

                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-[14vw] md:text-[5vw] font-medium tracking-tighter hover:pl-8 transition-all duration-500 group-hover:text-green-500'
                  >
                    {link.title}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <div>
              Menu Footer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation