import { AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react'

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
          className='flex items-center gap-3 bg-white/10 backdrop-blur-md py-2 rounded-full border border-white/10 cursor-pointer hover:bg-white/20 transition-all group'>
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

      </AnimatePresence>
    </>
  )
}

export default Navigation