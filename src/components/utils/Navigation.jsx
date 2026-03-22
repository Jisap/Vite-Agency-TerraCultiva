import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
          onClick={() => setIsOpen(true)}
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
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className='fixed inset-0 z-[200] bg-zinc-950 text-white p-6 md:p-12 flex flex-col'
          >
            {/* Menu Header - Fixed Area */}
            <div className='flex-shrink-0 flex justify-between items-center pb-8'>
              <span className='text-sm lg:text-base capitalize font-medium tracking-wider text-zinc-500'>
                // Navigation
              </span>

              <div onClick={() => setIsOpen(false)} className='size-12 rounded-full border border-white/10 center-item hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group/close'>
                <X size={24} />
              </div>
            </div>

            {/* Huge Menu Links - Independent Scroll Area */}
            <div className='flex-1 overflow-y-auto min-h-0 py-8 hide-scrollbar scroll-smooth'>
              <div className='min-h-full flex flex-col justify-center gap-4 md:gap-8 lg:gap-[4vh]'>
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className='group flex items-center gap-6'
                  >
                    <span className='text-zinc-600 text-xs md:text-sm font-black italic mt-4'>
                      0{i + 1}
                    </span>

                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className='text-[clamp(1.5rem,10vw,6vh)] md:text-[7vh] lg:text-[7.5vh] font-medium tracking-normal hover:pl-8 transition-all duration-500 group-hover:text-green-500 leading-tight whitespace-nowrap'
                    >
                      {link.title}
                    </a>

                    <ArrowUpRight size={40} className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-500 hidden md:block' />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Menu Footer - Fixed Area */}
            <div className='mt-auto flex-shrink-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pt-10 border-t border-white/5'>

              {/* Sección Información */}
              <div className='flex flex-col gap-8 md:gap-16'>
                <div className='flex flex-col gap-2'>
                  <span className='text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-medium'>
                    Location
                  </span>
                  <p className='text-sm md:text-base font-light text-zinc-300 tracking-tight'>
                    123 Green Valley Road <span className='text-zinc-700 mx-2'>—</span> CA 90210
                  </p>
                </div>

                <div className='flex flex-col gap-2'>
                  <span className='text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-medium'>
                    Connect
                  </span>
                  <div className='flex flex-wrap gap-x-8 gap-y-2 text-sm'>
                    {['Instagram', 'LinkedIn'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className='relative group py-1 overflow-hidden inline-block'
                      >
                        <span className='block transition-transform duration-500 group-hover:-translate-y-full'>
                          {platform}
                        </span>
                        <span className='absolute inset-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-green-500'>
                          {platform}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sección Marca / Copyright */}
              <div className='flex flex-col items-start md:items-end gap-2'>
                <div className='flex flex-col items-start md:items-end opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default'>
                  <span className='text-[10px] uppercase tracking-[0.5em] text-zinc-500'>
                    Terra Cultiva &copy; 2024
                  </span>
                  <span className='text-xs uppercase tracking-[0.2em] font-light text-zinc-600'>
                    All Rights Reserved
                  </span>
                </div>

                <span className='text-zinc-900/50 text-[10vh] font-black leading-none select-none space-font pointer-events-none hidden lg:block'>
                  TC
                </span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation