import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"





const CtaSection = () => {
  return (
    <>
      <section id="cta" className="relative h-[60vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0 flex">
          <div className="size-full">
            <img
              src="/images/cta-right.jpg"
              alt="Image"
              className="size-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 to-transparent"></div>


        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <div className="flex justify-center gap-8 md:gap-16 mb-10 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="text-sm capitalize text-white/40 whitespace-nowrap">
                // Join Now
              </span>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-medium tracking-tighter text-white leading-[0.9] mb-12"
          >
            Join the Agricultural <br /> Revolution
          </motion.h2>

          <div className="flex justify-center">
            <div className="flex items-center bg-white rounded-full p-1.5 w-full max-w-lg shadow-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-8 py-3 text-zinc-900 text-sm font-medium outline-none placeholder:text-zinc-300 w-full"
              />
              <button className="bg-green-800 text-white px-8 py-3 lg:py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-green-900 transition-all w-fit md:w-auto">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <BottomBar title="CTA" />
      </div>
    </>
  )
}

export default CtaSection