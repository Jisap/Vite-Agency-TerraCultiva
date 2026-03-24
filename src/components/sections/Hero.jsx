import { AnimatePresence, motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import CountUp from "react-countup"


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


          {/* Pill 1: Market Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -6 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              opacity: { delay: 0.8 },
              x: { delay: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-25 -left-4 md:-left-12 hidden md:flex items-center gap-3 -rotate-6 z-20 px-[18px] py-[11px] pl-[14px] bg-white/[0.055] backdrop-blur-[24px] backdrop-saturate-[1.6] border-[0.5px] border-white/10 rounded-[16px]"
          >
            <div className="size-8 rounded-full shrink-0 bg-[#5dca7a]/[0.14] border-[0.5px] border-[#5dca7a]/30 flex items-center justify-center text-[14px] font-medium text-[#6ee88a]">
              $
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[9px] font-medium tracking-[0.13em] uppercase text-white/35 leading-none mb-1">
                Market impact
              </span>

              <span className="text-[14px] font-medium text-white/90 tracking-[-0.02em] leading-none">
                <span className="text-[#6ee88a]">$</span>
                <CountUp end={14} duration={3} delay={1} />
                <span className="text-[#6ee88a]"> B+</span>
              </span>
            </div>
          </motion.div>

          {/* Pill 2: Social Proof */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -3 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, 10, 0]
            }}
            transition={{
              scale: { delay: 1, type: "spring" },
              opacity: { delay: 1 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-16 md:-bottom-14 -right-2 md:right-8 flex items-center gap-3 -rotate-3 z-20 px-[18px] py-[11px] pl-[14px] bg-white/[0.055] backdrop-blur-[24px] backdrop-saturate-[1.6] border-[0.5px] border-white/10 rounded-[16px]"
          >
            <div className="flex">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`
                    size-[26px] rounded-full border-[1.5px] border-[#0c1a0e]/90 bg-[#1e3d22] overflow-hidden shrink-0 
                    ${i < 3 ? "-mr-2" : "mr-0"}
                  `}
                >
                  <img
                    src={`/images/user-${i + 1}.png`}
                    alt="avatar"
                    className="size-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="w-px h-7 shrink-0 bg-white/10" />

            <div className="flex flex-col text-left">
              <span className="text-[9px] font-medium tracking-[0.13em] uppercase text-white/35 leading-none mb-1">
                Active growers
              </span>

              <span className="text-[14px] font-medium text-white/90 tracking-[-0.02em] leading-none">
                <span className="text-[#6ee88a]">
                  <CountUp end={126000} duration={4} delay={1.2} separator="," />
                </span>+
              </span>
            </div>
          </motion.div>
        </div>

        {/* Hero Footer & Progress Bar */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12">
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-6">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              className="absolute inset-0 bg-green-500/60"
            />
          </div>

          <div className="flex flex-col md:flex-row lg:items-end justify-between gap-8">
            <div className="lg:text-lg font-medium capitalize tracking-wide flex items-center gap-2">
              <span className="text-zinc-500">//</span>
              Roots in Sustainability
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8">
              {["Organic Farming", "Hydroponics", "Vertical Farming", "Farm Management"].map((item, i) => (
                <a
                  key={i}
                  className="text-sm capitalize tracking-wider text-zinc-400 hover:text-white"
                >
                  [{item}]
                </a>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="size-10 rounded-full border border-white/20 center-item cursor-pointer hover:bg-white/10 transition-all">
              <ArrowDown size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero