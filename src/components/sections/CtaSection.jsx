import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"





const CtaSection = () => {
  return (
    <>
      <section id="cta" className="relative h-[70vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-center items-center">
        {/* Background Image with subtle parallax/motion effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/cta-right.jpg"
            alt="Agriculture Revolution"
            className="size-full object-cover saturate-[1.1] opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-black/40 to-black/90"></div>
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          {/* Top Ticker-like labels */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="text-xs md:text-sm capitalize text-white/40 whitespace-nowrap font-medium tracking-widest"
              >
                // Join the movement
              </motion.span>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-medium tracking-tighter text-white leading-[0.85] mb-16"
          >
            Join the Agricultural <br />
            <span className="text-zinc-400 italic font-normal">Revolution</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-2 w-full max-w-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group h-16 md:h-20 transition-all duration-500 hover:bg-white/20">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-8 py-3 text-white text-sm md:text-base font-medium outline-none placeholder:text-white/30 w-full"
              />
              <button className="bg-green-700 text-white h-full px-10 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-green-600 transition-all duration-300 w-fit active:scale-95">
                Join Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <BottomBar title="Collaborate" />
        </motion.div>
      </div>
    </>
  )
}

export default CtaSection