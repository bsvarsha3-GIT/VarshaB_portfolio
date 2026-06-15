import { motion } from 'framer-motion'

function Experience() {
  return (
    <section className="min-h-screen px-6 py-28 flex items-center">

      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Experience
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Professional
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Journey
            </span>
          </h1>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10"
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold mb-2">
                UI Developer 
              </h2>

              <p className="text-cyan-400 text-lg">
                Frontend Development
              </p>

            </div>

            <div className="px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 w-fit">
              Ongoing
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              Responsive UI Development
            </div>

            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              React Component Development
            </div>

            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              Static Page Implementation
            </div>

            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              QA Bug Fixing & Optimization
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Experience