import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"
import BottomBar from "../utils/BottomBar"
import SectionBtn from "../utils/SectionBtn"
import { servicesSubText, services } from "../../assets/data"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  // Duplicamos los servicios para que el slider tenga contenido y sea funcional
  const extendedServices = Array(4).fill(services).flat()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else setItemsToShow(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < extendedServices.length - itemsToShow) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setCurrentIndex(0) // Volver al inicio
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    } else {
      setCurrentIndex(extendedServices.length - itemsToShow)
    }
  }

  return (
    <section id="services" className="bg-white py-24 font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-7xl font-medium tracking-tighter text-zinc-950 mb-6"
            >
              What we do
            </motion.h2>

            <p className="text-sm mb:text-base text-zinc-400 font-medium leading-relaxed max-w-md">
              {servicesSubText}
            </p>
          </div>

          <SectionBtn title="All Services" />
        </div>

        {/* Services horizontal slider */}
        <div className="relative overflow-hidden mb-12">
          <motion.div
            className="flex gap-4"
            animate={{ x: `calc(-${currentIndex} * (100% / ${itemsToShow}) - ${currentIndex * 16 / itemsToShow}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {extendedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 4) * 0.1 }}
                className="group relative h-[450px] flex-shrink-0 overflow-hidden rounded-sm cursor-pointer"
                style={{ width: `calc((100% - ${(itemsToShow - 1) * 16}px) / ${itemsToShow})` }}
              >
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="size-full object-cover saturate-120 group-hover:blur-xs transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute top-6 right-6">
                  <div className="size-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-zinc-300 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[200px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sliders Controls */}
        <div className="flex items-center justify-between mt-16">
          <div className="flex-1 max-w-[200px] h-[2px] bg-zinc-100 relative">
            <motion.div
              className="absolute top-0 h-full bg-green-800"
              animate={{
                width: `${(itemsToShow / extendedServices.length) * 100}%`,
                left: `${(currentIndex / extendedServices.length) * 100}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="size-12 cursor-pointer rounded-full border border-zinc-200 center-item text-zinc-400 hover:border-zinc-800 hover:text-zinc-800 transition-all duration-300"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="size-12 cursor-pointer rounded-full border border-zinc-200 center-item text-zinc-400 hover:border-zinc-800 hover:text-zinc-800 transition-all duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Technical Bottom Bar */}
        <BottomBar title="Our Services" />
      </div>
    </section>
  )
}

export default Services