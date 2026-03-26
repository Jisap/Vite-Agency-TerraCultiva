import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"
import { eventsContent, months } from "../../assets/data"

const Events = () => {
  return (
    <section id="events" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-lg lg:text-2xl text-nowrap capitalize text-zinc-400">
            // Events
          </span>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-950 lg:ml-[21%] 2xl:ml-[25%]">
            Sustainable Farming 101
          </h2>
        </div>

        {/* Event Card */}
        <div className="relative w-full min-h-[500px] rounded-sm overflow-hidden group">
          {/* Background Layer - Separada del contenido */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/event-bg.jpg"
              alt="Agricultural Innovation"
              className="size-full object-cover transition-transform duration-1000 saturate-120 group-hover:scale-105"
            />
            {/* Gradiente más oscuro para asegurar legibilidad */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content Layer - Por encima de la capa de fondo */}
          <div className="relative z-10 size-full grid md:grid-cols-12 p-8 md:p-16 min-h-[500px]">
            {/* Left Side */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-7xl font-medium tracking-tighter text-white leading-[0.95] max-w-2xl"
              >
                The Sustainable Agriculture Innovation and Practices Symposium
              </motion.h3>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-white text-zinc-950 px-8 py-4 hover:bg-green-700 hover:rounded-full hover:text-white transition-all duration-300 ease-in-out border border-transparent rounded-sm text-lg capitalize cursor-pointer tracking-wider w-fit"
              >
                Join Now
              </motion.button>
            </div>

            {/* Right Side */}
            <div className="md:col-span-4 flex flex-col justify-center items-end border-l border-white/20 pl-8">
              <div className="space-y-6 text-right">
                {months.map((month, i) => (
                  <div
                    key={i}
                    className={`
                      cursor-pointer transition-all duration-300
                      ${i === 0
                        ? "text-white text-xl md:text-2xl font-bold border-b-2 border-white pb-1"
                        : "text-white/40 text-sm md:text-base font-medium hover:text-white"
                      }
                    `}
                  >
                    {month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text Blocks */}
        <div>

        </div>
      </div>
    </section>
  )
}

export default Events
