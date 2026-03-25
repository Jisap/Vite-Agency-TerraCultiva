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

        {/* Metadata footer */}
      </div>
    </section>
  )
}

export default CaseStudy