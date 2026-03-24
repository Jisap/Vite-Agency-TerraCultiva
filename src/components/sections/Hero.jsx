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
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 flex flex-col gap-4">
        {images.map((_, i) => (
          <div key={i} className="flex flex-col items-end gap-1">
            <span
              className={`text-[8px] font-black transition-opacity duration-500
                ${i === index ? "opacity-100" : "opacity-0"}
              `}
            >
              0{i + 1}
            </span>

            <div className={
              `h-12 w-[1px] transition-all duration-1000
              ${i === index ? "bg-green-500 h-20" : "bg-white/20"}
              `}
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 md:px-12">
        {/* Intro Paragraph */}
        <div className="max-w-md ml-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:tex-base text-zinc-300 font-medium leading-relaxed"
          >
            We are passionate{" "}
            <span className="text-white font-bold underline decoration-green-500/50">
              sustainable agriculture
            </span>{" "}
            and commited to providing high-quality products that nourish both{" "}
            <span className="text-white font-bold italic">
              people and the planet.
            </span>
          </motion.p>
        </div>

        {/* Main Heading */}
        <div className="relative">
          <motion.h1
            className="text-[15vw] md:text-[12vw] font-medium leading-[0.8] tracking-tighter"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Terra Cultiva
          </motion.h1>

          {/* Floating Pills */}
          {/* 1 */}
          <motion.div
            className="absolute top-[10%] right-[10%] md-right-[20%] bg-green-50 text-zinc-900 px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-3 shadow-2xl rotate-6"
          >
            <div className="size-8 rounded-full bg-white center-item border border-zinc-200">
              <span className="text-xs font-bold">$</span>
            </div>

            <span className="text-xs md:text-sm font-black uppercase tracking-tight">
              &14 Billion
            </span>
          </motion.div>

          {/* 2 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
            className="absolute bottom-[-5%] lg:bottom-[25%] left-[40%] bg-green-50 text-zinc-900 px-4 py-2 mb:px-6 md:py-3 lg:py-4 rounded-full flex items-center gap-3 shadow-2xl -rotate-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-6 lg:size-9 rounded-full border-2 border-white bg-zinc-300 overflow-hidden hover:-translate-y-1 hover:ease-in"
                >
                  <img
                    src={`/images/user-${i + 1}.png`}
                    alt="avatar-image"
                    className="size-full saturate-120 cursor-pointer hover:scale-110 ease-out" />
                </div>
              ))}
            </div>

            <span className="text-xs md:text-sm font-black tracking-tight">
              126,000+
            </span>
          </motion.div>

        </div>

        {/* Hero Footer & Progress Bar */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12">
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-6">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: linear }}
              className="absolute inset-0 bg-green-500/60"
            >

            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero