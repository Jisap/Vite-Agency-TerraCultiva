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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-950 max-w-4xl leading-[1.1] mb-8"
          >
            Why Choose <span className="text-zinc-300 font-normal italic">// Terra Cultiva</span>{" "}
            for Your Agricultural Journey? <br />
            Unveilling the Unique Advantages and <span className="text-zinc-300 italic">Sustainable Solutions </span>
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between mt-12 border-b border-zinc-100 pb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm text-zinc-400 font-medium tracking-tight uppercase"
            >
              / Discover the Distinct Advantages of Partnering with Terra Cultiva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBtn title="All Benefits" />
            </motion.div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`
                relative p-8 md:p-10 rounded-sm flex flex-col min-h-[400px] transition-all duration-500 group cursor-pointer
                ${benefit.variant === "primary"
                  ? "bg-green-800 text-white mt-0"
                  : "bg-zinc-50 text-zinc-950 mt-12 md:mt-24"
                }  
              `}
            >
              <div className="flex justify-between items-start mb-16">
                <div className="flex items-start gap-2">
                  <span className="text-lg capitalize opacity-40">
                    {benefit.id}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-none">
                    {benefit.title}
                  </h3>
                </div>

                <div
                  className={`
                  size-10 rounded-full border center-item transition-all 
                  ${benefit.variant === "primary"
                      ? "border-white/20 group-hover:bg-white group-hover:text-green-800"
                      : "border-zinc-200 group-hover:bg-green-800 group-hover:text-white"
                    }
                `}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="mt-auto">
                <span className={`text-sm tracking-wide mb-4 block
                  ${benefit.variant === "primary" ? "text-green-300" : "text-zinc-400"}
                    
                  `}
                >
                  {benefit.tag}
                </span>

                <p className={`
                  text-sm lg:text-base leading-relaxed font-medium
                  ${benefit.variant === "primary"
                    ? "text-green-50/80"
                    : "text-zinc-500"
                  }  
                `}>
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Slogans */}
        <div className="grid md:grid-cols-2 gap-12 mt-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-lg lg:text-xl capitalize tracking-wide text-zinc-400"
          >
            // Cultivating Dreams,
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-medium tracking-tight text-zinc-800 lg:pl-8 italic border-l-2 border-zinc-100"
          >
            Showing Success.
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <BottomBar title="Why Us" />
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs