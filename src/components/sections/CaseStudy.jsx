import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"
import Counter from "../utils/Counter"
import { caseStudyContent } from "../../assets/data"




const CaseStudy = () => {
  return (
    <section id="casestudy" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Upper content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-6">
            <motion.h2
              className="text-5xl md:text-8xl font-medium tracking-tight text-zinc-900 leading-[0.85]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Real Solutions, <br />{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 text-lg lg:text-2xl tracking-wide lg:tracking-normal text-zinc-950 mb-8 font-medium"
            >
              <span className="text-green-600 font-bold">//</span> GreenFields AgroCo
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed mb-12 max-w-lg"
            >
              {caseStudyContent}
            </motion.p>
          </div>
        </div>

        {/* Lower Content / Image Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 h-[500px] 2xl:h-[650px] bg-zinc-100 overflow-hidden relative group rounded-sm"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              src="/images/case-main.png"
              alt="Aerial farm view"
              className="size-full object-cover saturate-[1.1] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none opacity-60" />
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12 }}
                className="aspect-square bg-zinc-50 overflow-hidden cursor-pointer"
              >
                <div className="size-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src="/images/case-2.png"
                    alt="Detail 1"
                    className="size-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12 }}
                className="aspect-square bg-zinc-50 overflow-hidden cursor-pointer"
              >
                <div className="size-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src="/images/case-3.png"
                    alt="Detail 2"
                    className="size-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Metadata footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-zinc-100">
          {
            [
              { label: "Year", value: "// 2025" },
              { label: "Category", value: "// Organic Farming" },
              { label: "Company", value: "// GreenFields AgroCo" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2"
              >
                <span className="text-sm capitalize tracking-wide text-zinc-300">
                  {item.label}
                </span>

                <span className="text-sm font-bold text-zinc-900 tracking-tight">
                  {item.value}
                </span>
              </motion.div>
            ))
          }
        </div>

        <BottomBar title="Case of Study" />
      </div>
    </section>
  )
}

export default CaseStudy