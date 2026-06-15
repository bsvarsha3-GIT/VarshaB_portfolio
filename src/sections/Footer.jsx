function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            VARSHA
          </h1>

          <p className="text-gray-400 mt-2">
            Frontend Developer • UI Designer • Research Enthusiast
          </p>

        </div>

        <div className="flex gap-6 text-gray-400">

          <a
            href="https://www.linkedin.com/in/bsvarsha3/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          {/* <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a> */}

          <a
            href="#top"
            className="hover:text-cyan-400 transition"
          >
            Portfolio
          </a>

        </div>

      </div>



    </footer>
  )
}

export default Footer
