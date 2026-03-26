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
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side: Blog Navigation */}
          <div className="lg:col-span-3 space-y-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`
                  text-sm md:text-lg lg:text-xl capitalize cursor-pointer transition-all
                  ${i === 0 ? "text-zinc-950 font-semibold" : "text-zinc-300 hover:text-green-900"}  
                `}
              >
                // {cat}
              </div>
            ))}
          </div>

          {/* Right Side: Blog Grid */}
          <div className="lg:col-span-9 grid md:grid-cols-2 gap-x-12 gap-y-24">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: post.delay, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-zinc-100 mb-8 overflow-hidden rounded-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover grayscale-[30%] group-hover:grayscale-0 gorup-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-950 mb-4 group-hover:text-green-800 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <button className="text-xs md:text-base tracking-wide text-green-900 font-semibold border-b-2 border-green-900 pb-1 w-fit">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Motto */}

        {/* Technical Bottom Bar */}
        <BottomBar title="Blogs" />
      </div>
    </div>
  )
}

export default Blogs