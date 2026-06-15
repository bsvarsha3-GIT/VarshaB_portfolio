import { motion } from 'framer-motion'

import faculty from '../assets/faculty.jpeg.jpeg'
import iisc from '../assets/iisc.jpeg.jpeg'
import book from '../assets/Book.jpeg.jpeg'

function Achievements() {
  return (
    <section className="px-6 py-28">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Achievements
          </p>

          <h1 className="text-5xl md:text-6xl font-black">
            Career
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Highlights
            </span>
          </h1>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">

            <img
              src={faculty}
              alt="faculty"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                Naan Mudhalvan Faculty
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Taught college students a 9-week Bioinformatics course at
                TBML College, Poraiyar, through the Naan Mudhalvan Tamil Nadu
                Government project.
              </p>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">

            <img
              src={iisc}
              alt="iisc"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                IISc Research Project
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Developed a computational study on identifying potential drug
                compounds for cystic fibrosis using pharmacophore modelling and
                reverse network pharmacology under the guidance of Dr. K. Sekar
                in the Computational Biology Department.
              </p>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-500">

            <img
              src={book}
              alt="published book"
              className="w-full h-[300px] object-contain bg-black"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-4 text-pink-400">
                Published Author
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Published the chapter &quot;Programming Language in Bioinformatics&quot;
                in Recent Advancement in Computational Biology and the chapter
                &quot;Cancer Biology&quot; in Harnessing AI for Drug Discovery.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Achievements
