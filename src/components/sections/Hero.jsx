import { AnimatePresence, motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"


const Hero = () => {

  const images = [
    "/images/hero-1.png",
    "/images/hero-2.png",
    "/images/hero-3.png",
    "/images/hero-4.png",
  ]
  const SLIDE_DURATION = 30000
  const [index, setIndex] = useState(0)

  useEffect(() => {                                             // Hook para cambiar la imagen cada 30 segundos
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)  // Se incrementa el índice y se vuelve a 0 cuando llega al final
    }, SLIDE_DURATION)
    return () => clearInterval(timer)                           // Limpia el intervalo cuando el componente se desmonta
  }, [images.length, SLIDE_DURATION])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-950 text-white font-sans">
      {/* Dynamic background engine */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img src={images[index]} alt={`Slide-${index + 1}`} className="h-full w-full object-cover saturate-150" />
          </motion.div>
        </AnimatePresence>

        {/* Subtitle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-zinc-950/90 z-[1]"></div>
      </div>

      {/* Side pagination (Vertical Lines) */}
      <div></div>

      {/* Main content */}
      <div></div>

    </div>
  )
}

export default Hero