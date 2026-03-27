import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import SectionBtn from "../utils/SectionBtn"
import BottomBar from "../utils/BottomBar"
import { benefits } from "../../assets/data"



const WhyUs = () => {
  return (
    <section id="why-us" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header area */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-950 max-2-4xl leading-[1.1] mb-8"
          >
            Why Choose <span className="text-zinc-400">Terra Cultiva</span>{" "}
            for Your Agricultural Journey? <br />
            Unveilling the Unique Advantages and <span className="text-zinc-300">Sustainable Solutions </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between mt-12 border-b border-zinc-100 pb-12">
            <p className="text-xs md:text-sm text-zinc-400 font-medium tracking-tight">
              Discover the Distinct Advantages of Partnering with Terra Cultiva.
            </p>

            <SectionBtn title="All Benefits" />
          </div>
        </div>

        {/* Benefits Cards */}

        {/* Section Slogans */}

        {/* Bottom Bar */}
      </div>
    </section>
  )
}

export default WhyUs