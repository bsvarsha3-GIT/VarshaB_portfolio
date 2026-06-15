import { motion } from 'framer-motion'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'SCSS',
  'Next.js',
  'TypeScript',
  'SQL',
  'Java',
  'Git',
  'Responsive Design',
]

function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Technical
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Expertise
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400/40 hover:-translate-y-2 transition duration-500"
            >
              <h2 className="text-xl font-semibold text-gray-200">
                {skill}
              </h2>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills