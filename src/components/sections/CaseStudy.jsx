import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"
import Counter from "../utils/Counter"
import { caseStudyContent } from "../../assets/data"





const CaseStudy = () => {
  return (
    <section id="casestudy" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Upper content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <motion.h2
              className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Real Solutions, <br />{" "} <span className="text-zinc-300">Real Results</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-6 lg:pl-12">
            <div className="flex items-center gap-3 text-lg lg:text-2xl tracking-wide lg:tracking-normal text-zinc-950 mb-6">
              <span>//</span> GreenFields AgroCo
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-zinc-500 font-medium leading-relaxed mb-12"
            >
              {caseStudyContent}
            </motion.p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-7 h-[500px] 2xl:h-[600px] bg-zinc-100 overflow-hidden rounded-sm relative"
          >
            <img
              src="/images/case-main.png" alt="Aerial farm view" className="size-full object-cover saturate-120 hover:scale-105 transition-transform duration-100 cursor-pointer"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/ 80 to-transparent pointer-events-none" />
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="aspect-square bg-zinc-100 rounded-sm overflow-hidden hover:-translate-y-2 transition-all duration-200 ease-in"
              >
                <img
                  src="/images/case-2.png"
                  alt="Detail 1"
                  className="size-full object-cover cursor-pointer hover:scale-105 transtion-all duration-200 ease-in"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="aspect-square bg-zinc-100 rounded-sm overflow-hidden hover:-translate-y-2 transition-all duration-200 ease-in"
              >
                <img
                  src="/images/case-3.png"
                  alt="Detail 1"
                  className="size-full object-cover cursor-pointer hover:scale-105 transtion-all duration-200 ease-in"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Metadata footer */}
        <div>

        </div>
      </div>
    </section>
  )
}

export default CaseStudy