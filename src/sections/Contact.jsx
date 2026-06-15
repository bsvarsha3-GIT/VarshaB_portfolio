// import { motion } from 'framer-motion'

// function Contact() {
//   return (
//     <section
//       id="contact"
//       className="min-h-screen px-6 py-28 flex items-center relative overflow-hidden"
//     >

//       {/* BACKGROUND BLURS */}

//       <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto w-full relative z-10">

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >

//           <p className="text-cyan-400 uppercase tracking-[6px] mb-5">
//             Contact
//           </p>

//           <h1 className="text-5xl md:text-7xl font-black leading-tight">
//             Let’s Create
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
//               {' '}Exceptional Experiences
//             </span>
//           </h1>

//           <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
//             Open to learning opportunities, creative collaborations,
//             innovative environments, and meaningful professional experiences.
//           </p>

//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-10">

//           {/* EMAIL CARD */}

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="group relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl overflow-hidden hover:border-cyan-400/40 transition duration-500"
//           >

//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

//             <div className="relative z-10">

//               <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-8">
//                 ✉️
//               </div>

//               <p className="text-gray-400 mb-3 tracking-wide">
//                 EMAIL
//               </p>

//               <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 break-all">
//                 bsvarsha3@gmail.com
//               </h2>

//               <p className="text-gray-400 mt-6 leading-relaxed">
//                 Feel free to connect for collaborations, learning opportunities,
//                 innovative ideas, and meaningful professional experiences.
//               </p>

//             </div>

//           </motion.div>

//           {/* PHONE CARD */}

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="group relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl overflow-hidden hover:border-purple-400/40 transition duration-500"
//           >

//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

//             <div className="relative z-10">

//               <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl mb-8">
//                 📞
//               </div>

//               <p className="text-gray-400 mb-3 tracking-wide">
//                 PHONE
//               </p>

//               <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
//                 +91 9790608520
//               </h2>

//               <p className="text-gray-400 mt-6 leading-relaxed">
//                 Always interested in exploring new experiences, continuous learning,
//                 creative environments, and opportunities to grow professionally.
//               </p>

//             </div>

//           </motion.div>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Contact

import { motion } from 'framer-motion'

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-28 flex items-center relative overflow-hidden"
    >

      {/* BACKGROUND BLURS */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[6px] mb-5">
            Contact
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Let’s Create
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {' '}Exceptional Experiences
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Open to learning opportunities, creative collaborations,
            innovative environments, and meaningful professional experiences.
          </p>

        </motion.div>

        {/* CONTACT CARDS */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* EMAIL CARD */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl overflow-hidden hover:border-cyan-400/40 transition duration-500"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">

              {/* GMAIL ICON */}

              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 overflow-hidden">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                  alt="gmail"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="text-gray-400 mb-3 tracking-wide">
                EMAIL
              </p>

              <a
                href="mailto:bsvarsha3@gmail.com"
                className="block text-xl md:text-2xl font-bold text-cyan-400 break-all hover:underline"
              >
                bsvarsha3@gmail.com
              </a>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Feel free to connect for collaborations, learning opportunities,
                innovative ideas, and meaningful professional experiences.
              </p>

            </div>

          </motion.div>

          {/* PHONE CARD */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl overflow-hidden hover:border-purple-400/40 transition duration-500"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl mb-8">
                📞
              </div>

              <p className="text-gray-400 mb-3 tracking-wide">
                PHONE
              </p>

              <a
                href="tel:+919790608520"
                className="block text-2xl md:text-3xl font-bold text-purple-400 hover:underline"
              >
                +91 9790608520
              </a>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Always interested in exploring new experiences, continuous learning,
                creative environments, and opportunities to grow professionally.
              </p>

            </div>

          </motion.div>

          {/* LINKEDIN CARD */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl overflow-hidden hover:border-blue-400/40 transition duration-500"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">

              {/* LINKEDIN ICON */}

              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 overflow-hidden">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkedin"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="text-gray-400 mb-3 tracking-wide">
                LINKEDIN
              </p>

              <a
                href="https://www.linkedin.com/in/bsvarsha3/"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-bold text-blue-400 break-all hover:underline"
              >
                linkedin.com/in/bsvarsha3
              </a>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Connect with me professionally to explore opportunities,
                collaborations, and innovative projects.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact
