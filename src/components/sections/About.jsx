import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"
import Counter from "../utils/Counter"
import { aboutUsContent, stats } from "../../assets/data"




const About = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
                {stat.tag === "Billion" ? "$" : ""}
                <Counter value={stat.value} />
                {stat.tag}
              </h3>

              <p className="text-zinc-400 text-[10px] md:text-base capitalize">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 text-lg lg:text-xl capitalize tracking-wide text-zinc-400 mb-2">
              <span>//</span> Harvesting Legacy,
            </div>

            <div className="pl-10 text-xl md:text-2xl font-medium tracking-tight text-zinc-800 italic">
              Planting Tomorrow,
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed max-w-xl"
            >
              {aboutUsContent}
            </motion.p>
          </div>
        </div>

        {/* Massive Footer heading */}
        <div className="relative">

        </div>

        {/* Technical Bottom Bar */}

      </div>
    </section>
  )
}

export default About