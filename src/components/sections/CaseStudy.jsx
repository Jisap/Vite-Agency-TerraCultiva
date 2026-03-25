import { motion, AnimatePresence } from "framer-motion"
import BottomBar from "../utils/BottomBar"
import Counter from "../utils/Counter"
import { caseStudyContent } from "../../assets/data"
import { useState } from "react"

const cases = [
  {
    id: "01",
    company: "GreenFields AgroCo",
    year: "2025",
    category: "Organic Farming",
    content: caseStudyContent,
    images: {
      main: "/images/case-main.png",
      detail1: "/images/case-2.png",
      detail2: "/images/case-3.png"
    }
  },
  {
    id: "02",
    company: "Terra Innovations",
    year: "2024",
    category: "Smart Irrigation",
    content: "Terra Innovations approached us to design a fully automated irrigation system powered by IoT sensors. The goal was to reduce water consumption by 40% while maintaining optimal soil moisture levels for high-value specialty crops across thousand-acre parcels.",
    images: {
      main: "/images/service-4.png",
      detail1: "/images/blog-1.jpg",
      detail2: "/images/service-2.png"
    }
  },
  {
    id: "03",
    company: "SunSoil Cooperatives",
    year: "2023",
    category: "Vertical Growth",
    content: "SunSoil required a revolutionary approach to urban vertical farming. We developed a low-energy LED infrastructure and nutrient delivery system that maximized yield per square foot, allowing the cooperative to supply fresh produce to the city center within hours of harvest.",
    images: {
      main: "/images/service-3.png",
      detail1: "/images/blog-2.jpg",
      detail2: "/images/service-1.png"
    }
  }
]

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentCase = cases[currentIndex]

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section id="casestudy" className="bg-white py-24 overflow-hidden min-h-[900px]">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Upper content */}
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
              <div className="lg:col-span-6">
                <motion.h2
                  className="text-5xl md:text-8xl font-medium tracking-tight text-zinc-900 leading-[0.85]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Real Solutions, <br />{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8, delay: 0.5 }}
                    className="text-zinc-300"
                  >
                    Real Results
                  </motion.span>
                </motion.h2>
              </div>

              <div className="lg:col-span-6 lg:pl-12">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 text-lg lg:text-2xl tracking-wide lg:tracking-normal text-zinc-950 mb-8 font-medium"
                >
                  <span className="text-green-600 font-bold">//</span> {currentCase.company}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed mb-12 max-w-lg"
                >
                  {currentCase.content}
                </motion.p>
              </div>
            </div>

            {/* Lower Content / Image Grid */}
            <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7 h-[500px] 2xl:h-[650px] bg-zinc-100 overflow-hidden relative group rounded-sm"
              >
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  src={currentCase.images.main}
                  alt={currentCase.company}
                  className="size-full object-cover saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none opacity-60" />
              </motion.div>

              <div className="md:col-span-5 flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -12 }}
                    className="aspect-square bg-zinc-50 overflow-hidden cursor-pointer"
                  >
                    <div className="size-full overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        src={currentCase.images.detail1}
                        alt="Detail 1"
                        className="size-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -12 }}
                    className="aspect-square bg-zinc-50 overflow-hidden cursor-pointer"
                  >
                    <div className="size-full overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        src={currentCase.images.detail2}
                        alt="Detail 2"
                        className="size-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="flex items-center justify-end gap-6 mt-12">
                  <span 
                    onClick={prevCase}
                    className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-green-800 cursor-pointer transition-colors"
                  >
                    Prev
                  </span>

                  <div className="flex-1 max-w-[120px] h-[2px] bg-zinc-100 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / cases.length) * 100}%` }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-0 h-full bg-green-800"
                    />
                  </div>

                  <span 
                    onClick={nextCase}
                    className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-green-800 cursor-pointer transition-colors"
                  >
                    Next
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-auto text-right"
                >
                  <h3 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-200">
                    Portfolio
                  </h3>

                  <div className="text-4xl md:text-6xl font-medium tracking-tighter text-green-900 mt-[-4px] space-font flex justify-end items-center gap-1">
                    <span>//{currentCase.year.slice(0,3)}</span>
                    <Counter value={parseInt(currentCase.year.slice(-1))} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Metadata footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-100">
          {[
            { label: "Year", value: `// ${currentCase.year}` },
            { label: "Category", value: `// ${currentCase.category}` },
            { label: "Company", value: `// ${currentCase.company}` },
          ].map((item, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col gap-2"
            >
              <span className="text-sm capitalize tracking-wide text-zinc-300">
                {item.label}
              </span>

              <span className="text-sm font-bold text-zinc-900 tracking-tight">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        <BottomBar title="Case of Study" />
      </div>
    </section>
  )
}

export default CaseStudy