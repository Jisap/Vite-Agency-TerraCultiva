import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"
import BottomBar from "../utils/BottomBar"
import SectionBtn from "../utils/SectionBtn"
import { servicesSubText, services } from "../../assets/data"
import { motion } from "framer-motion"



const Services = () => {
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
              What we  do
            </motion.h2>

            <p className="text-sm mb:text-base text-zinc-400 font-medium leading-relaxed max-w-md">
              {servicesSubText}
            </p>
          </div>

          <SectionBtn title="All Services" />
        </div>

        {/* Services horizontal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover-scale-110">
                <img src={service.img} alt={service.title} className="size-full object-cover staurate-120 group-hover:blur-xs transition-all" />

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
        </div>

        {/* Sliders Controls */}
        <div></div>

        {/* Technical Bottom Bar */}
        <div></div>
      </div>
    </section>
  )
}

export default Services