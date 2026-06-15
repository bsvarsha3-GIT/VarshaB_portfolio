import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-28 flex items-center"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Passionate About
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Innovation & Growth
            </span>

          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">

            A passionate and curious individual with interests spanning
            technology, research, creativity, and continuous learning.
            Enthusiastic about building meaningful experiences, exploring
            innovative ideas, and adapting to evolving opportunities.

          </p>

          <p className="text-gray-400 leading-relaxed">

            My journey combines academic research exposure, mentoring
            experience, technical problem-solving, and hands-on project
            development through internships, collaborative environments,
            and interdisciplinary learning experiences.

          </p>

        </motion.div>

        {/* RIGHT SECTION */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >

          {/* EXPERIENCE CARD */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-500">

            <h2 className="text-2xl font-bold mb-4 text-cyan-400">
              Professional Experience
            </h2>

            <p className="text-gray-300 leading-relaxed">

              Completed internship experience involving modern application
              workflows, responsive implementation, collaborative development,
              debugging, and real-world project contributions.

            </p>

          </div>

          {/* RESEARCH CARD */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-purple-400/40 transition duration-500">

            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Research & Academic Exposure
            </h2>

            <p className="text-gray-300 leading-relaxed">

              Gained exposure to computational research, scientific analysis,
              technical documentation, and interdisciplinary problem-solving
              through academic collaborations and research-oriented projects.

            </p>

          </div>

          {/* AUTHOR CARD */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-yellow-400/40 transition duration-500">

            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              Publications & Mentoring
            </h2>

            <p className="text-gray-300 leading-relaxed">

              Contributed as a published book chapter author and participated
              in mentoring initiatives focused on knowledge sharing,
              communication, and collaborative learning experiences.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About