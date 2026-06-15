import bioinformatics from '../assets/bioinformatics.jpeg'
import banking from '../assets/banking.jpeg'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Netflix UI Recreation',
    tech: 'React • CSS • JavaScript',
    description:
      'Designed and developed a modern streaming platform inspired interface with responsive layouts, reusable components, smooth transitions, and immersive user experience focused on visual presentation and usability.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    contain: true,
    bg: 'bg-black',
  },

  {
    title: 'Starbucks Website Recreation',
    tech: 'React • CSS • Responsive Design',
    description:
      'Created a premium coffee brand inspired digital experience with elegant layouts, responsive architecture, interactive sections, and refined visual aesthetics across multiple screen sizes.',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg',
    contain: true,
    bg: 'bg-[#006241]',
  },

  {
  
  title: 'Digital Banking Management System',
  tech: 'Java • JDBC • SQL',
  description:
    'Developed a secure banking management platform with customer account handling, transaction processing, database integration, and efficient backend workflow management using Java and JDBC technologies.',
  image: banking,
  contain: false,
  bg: 'bg-black',
  },

  {
  title: 'Bioinformatics Based Drug Discovery Analysis',
  tech: 'Bioinformatics • Drug Discovery • Research',
  description:
    'Worked on a research-focused bioinformatics and drug discovery project involving computational analysis, pharmacophore modeling, molecular docking, biological data interpretation, and therapeutic insight identification for potential drug candidates.',
  image: bioinformatics,
  contain: false,
  bg: 'bg-black',


  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-28"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Featured Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Selected
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Works
            </span>
          </h1>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition duration-500 hover:-translate-y-2"
            >

              <div
                className={`overflow-hidden flex items-center justify-center h-72 ${project.bg}`}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition duration-700 group-hover:scale-110 ${
                    project.contain
                      ? 'object-contain p-16'
                      : 'object-cover'
                  }`}
                />

              </div>

              <div className="p-8">

                <h2 className="text-3xl font-bold mb-4">
                  {project.title}
                </h2>

                <p className="text-cyan-400 mb-5 font-medium">
                  {project.tech}
                </p>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects