import { motion } from "framer-motion"
import BottomBar from "../utils/BottomBar"
import { categories, posts } from "../../assets/data"




const Blogs = () => {
  return (
    <div id="blogs" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Header */}
        <div className="flex justify-end mb-24">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-4xl font-medium tracking-tight text-right max-w-xl text-zinc-900"
          >
            Our blog is a <span className="text-zinc-400">dynamic space</span> that clebrates the pasion for farming and explores innovative practices shaping the future of{" "}
            <span className="text-zinc-300">agriculture</span>
          </motion.h2>
        </div>

        {/* Main Content Cols */}

        {/* Bottom Motto */}

        {/* Technical Bottom Bar */}
        <BottomBar title="Blogs" />
      </div>
    </div>
  )
}

export default Blogs