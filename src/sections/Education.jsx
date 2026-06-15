import { motion } from 'framer-motion'
import graduation from '../assets/graduation.jpeg.jpeg'

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-28 flex items-center"
    >

      <div className="max-w-7xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Education
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Academic
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Journey
            </span>
          </h1>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE */}

          <div className="h-full space-y-8">

            {/* BSC */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition duration-500"
            >

              <div className="flex items-center justify-between flex-wrap gap-4">

                <h2 className="text-2xl font-bold">
                  B.Sc Biotechnology
                </h2>

                <div className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
                  2020 - 2023
                </div>

              </div>

              <p className="text-cyan-400 mt-4 text-lg">
                Cauvery College, Trichy
              </p>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Completed undergraduate degree in Biotechnology with
                strong academic performance and foundational knowledge
                in biological sciences and research methodologies.
              </p>

              <div className="mt-6 inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10">
                80%
              </div>

            </motion.div>

            {/* MSC */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/30 transition duration-500"
            >

              <div className="flex items-center justify-between flex-wrap gap-4">

                <h2 className="text-2xl font-bold">
                  M.Sc Bioinformatics
                </h2>

                <div className="px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-300 text-sm">
                  2023 - 2025
                </div>

              </div>

              <p className="text-purple-400 mt-4 text-lg">
                Sri Krishna Arts & Science College, Coimbatore
              </p>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Specialized in Bioinformatics, computational biology,
                research analysis, and scientific data interpretation with
                exposure to interdisciplinary technical workflows.
              </p>

            </motion.div>

            {/* QSPIDERS */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-pink-400/30 transition duration-500"
            >

              <div className="flex items-center justify-between flex-wrap gap-4">

                <h2 className="text-2xl font-bold">
                  Java Full Stack Course
                </h2>

                <div className="px-4 py-2 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-300 text-sm">
                  6 Months
                </div>

              </div>

              <p className="text-pink-400 mt-4 text-lg">
                QSpiders, Coimbatore
              </p>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Completed full stack development training covering Java,
                SQL, JDBC, frontend technologies, and real-world application
                development concepts.
              </p>

            </motion.div>

          </div>

          {/* RIGHT SIDE IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[320px] lg:h-auto lg:self-stretch"
          >

            <div className="relative h-full overflow-hidden rounded-3xl lg:absolute lg:inset-0">

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-3xl opacity-30" />

              <img
                src={graduation}
                alt="graduation"
                className="relative h-full w-full scale-110 rounded-3xl border border-white/10 object-cover object-[center_-7%] transition-transform duration-700 hover:scale-125"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Education
