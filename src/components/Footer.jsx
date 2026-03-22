/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#casestudy" },
    { title: "Blogs", href: "#blogs" },
    { title: "Benefits", href: "#why-us" },
  ];

  const socials = [
    { title: "LinkedIn", href: "#" },
    { title: "Instagram", href: "#" },
    { title: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 font-sans mt-10  min-h-[60vh] flex flex-col justify-between">
      <div className="container mx-auto px-6 md:px-12 w-full">
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
          {/* Company Info */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold text-zinc-950 mb-2">
              Terra Cultiva <sup>©</sup>
            </h4>
            <p className="text-xs text-zinc-400 font-medium tracking-tight">
              San Fransisco, USA
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-950 transition-colors w-fit"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-xs font-medium text-zinc-400 hover:text-zinc-950 transition-colors w-fit"
              >
                {social.title}
              </a>
            ))}
          </div>

          {/* Contact Email */}
          <div className="md:col-span-2">
            <a
              href="mailto:terracultiva@company.com"
              className="text-xs font-medium text-zinc-400 hover:text-zinc-950 transition-colors"
            >
              terracultiva@company.com
            </a>
          </div>

          {/* Call to Action Callout */}
          <div className="md:col-span-3 flex flex-col items-end">
            <div className="text-right mb-6">
              <h3 className="text-3xl font-medium tracking-tighter text-zinc-300 leading-none">
                Reach Out
              </h3>
              <h3 className="text-3xl font-medium tracking-tighter text-zinc-950 leading-none mt-1">
                with Terra
              </h3>
            </div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-950 cursor-pointer"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* MASSIVE BRAND MARK */}
      <div className="container mx-auto px-6 md:px-4 w-full overflow-hidden">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[20vw] lg:text-[16vw] 2xl:text-[13.5vw] lg:text-nowrap font-medium leading-none tracking-tighter lg:my-10 text-green-900/90 select-none relative"
        >
          Terra Cultiva{" "}
          <sup className="space-font abolute -left-5 lg:-left-20 ">&copy;</sup>
        </motion.h1>
      </div>

      {/* FINAL COPYRIGHT BAR */}
      <div className="container cursor-pointer mx-auto px-6 md:px-12 w-full mt-8">
        <div className="flex justify-between items-center text-sm tracking-wide text-zinc-300 pt-8 border-t border-zinc-50 ">
          <span className="hover:text-green-700 transition-all duration-200 ease-in">
            ©{new Date().getFullYear()} Terra Cultiva
          </span>
          <span className="hover:text-green-700 ease-in transition-all duration-200">
            Terra Cultiva Agriculture
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
