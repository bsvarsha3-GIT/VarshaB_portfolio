import { motion } from 'framer-motion'
import profile from '../assets/profile.jpeg.jpeg'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      {/* Glow Effects */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

        <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
  Research • Creativity • Innovation
</p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Hi, I&apos;m{' '}

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Varsha
            </span>

          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-xl leading-relaxed">
            Passionate about learning, creating meaningful experiences,
            exploring innovative ideas, and continuously growing through
            technology, creativity, and real-world opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Animated Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-40 animate-pulse" />

            {/* Profile Image */}
            <img
              src={profile}
              alt="profile"
              className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero