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

        {/* Massive Footer heading */}

        {/* Technical Bottom Bar */}

      </div>
    </section>
  )
}

export default About