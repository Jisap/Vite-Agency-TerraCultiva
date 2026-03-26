import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"
import BottomBar from "../utils/BottomBar"
import SectionBtn from "../utils/SectionBtn"
import { servicesSubText, services } from "../../assets/data"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0)               // Índice de la tarjeta que está "primera" visible
  const [itemsToShow, setItemsToShow] = useState(4);                // Tarjetas visibles según el ancho (1, 3 ó 4)

  const extendedServices = Array(4).fill(services).flat()           // Duplicamos los servicios para que el slider tenga contenido y sea funcional

  useEffect(() => {                                                 // escucha el resize de la ventana y actualiza itemsToShow en consecuencia
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1)
      // else if (window.innerWidth < 1024) setItemsToShow(2)        // Opción de 2 comentada según pedido
      else if (window.innerWidth < 1440) setItemsToShow(3)
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-medium tracking-tighter text-zinc-950 mb-6"
            >
              What we do
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-lg text-zinc-400 font-medium leading-relaxed max-w-md"
            >
              {servicesSubText}
            </motion.p>
          </div>

          <SectionBtn title="All Services" />
        </div>

        {/* Services horizontal slider con Máscara Sutil */}
        <div className="relative mb-12">
          <div
            className="relative overflow-visible"
            style={{
              // Máscara al 2% para un efecto muy sutil
              maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)'
            }}
          >
            <motion.div
              className="flex gap-4"
              // CORRECCIÓN: Ahora el shift tiene en cuenta el gap de 16px para alinear perfectamente
              animate={{ x: `calc(-${currentIndex} * (100% + 16px) / ${itemsToShow})` }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {extendedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1.2,
                    delay: (index % itemsToShow) * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group relative h-[500px] flex-shrink-0 overflow-hidden rounded-sm cursor-pointer"
                  // Divide el ancho total del contenedor entre itemsToShow, restando previamente el espacio ocupado por los gaps
                  style={{ width: `calc((100% - ${(itemsToShow - 1) * 16}px) / ${itemsToShow})` }}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      src={service.img}
                      alt={service.title}
                      className="size-full object-cover saturate-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  </div>

                  <div className="absolute top-8 right-8 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-green-600 group-hover:border-green-500 transition-colors duration-500"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                    <motion.h3
                      className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight leading-none"
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-zinc-300 text-sm font-medium leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-[240px]">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Sliders Controls */}
        <div className="flex items-center justify-between mt-20">
          <div className="flex-1 max-w-[200px] h-[1px] bg-zinc-100 relative overflow-hidden">
            <motion.div
              className="absolute top-0 h-full bg-green-800"
              animate={{
                width: `${(itemsToShow / extendedServices.length) * 100}%`,
                left: `${(currentIndex / extendedServices.length) * 100}%`
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="size-14 cursor-pointer rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-zinc-800 hover:text-zinc-800 hover:bg-zinc-50 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="size-14 cursor-pointer rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-zinc-800 hover:text-zinc-800 hover:bg-zinc-50 transition-all duration-300 active:scale-95"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <BottomBar title="Our Services" />
      </div>
    </section>
  )
}

export default Services
