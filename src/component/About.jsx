export default function About() {
  return (
    <section id="About" className="py-20 px-6 bg-muted/30 mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center text-2xl text-black font-bold">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#757575] mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize
              in building scalable applications using modern technologies. My
              journey started with a curiosity for how things work on the web,
              and it has evolved into a passion for creating seamless digital
              experiences.
            </p>
            <p className="text-[#757575] mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends. When I'm not coding,
              you'll find me exploring new technologies, contributing to open
              source, or mentoring aspiring developers.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="px-4 py-2 text-[#353535] bg-[#e0e0e0]  hover:bg-[#212121] hover:text-white transition duration-400  rounded-lg">
                Problem Solver
              </span>
              <span className="px-4 py-2 text-[#353535] bg-[#e0e0e0]  hover:bg-[#212121] hover:text-white transition duration-400  rounded-lg">
                Team Player
              </span>
              <span className="px-4 py-2 text-[#353535] bg-[#e0e0e0]  hover:bg-[#212121] hover:text-white transition duration-400 rounded-lg">
                Quick Learner
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-black font-bold text-lg">Education</h3>
              <p className="text-[#757575]">B.S. Computer Science</p>
              <p className="text-sm text-[#757575]">
                University of Technology • 2015-2019
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-black font-bold text-lg">
                Current Role
              </h3>
              <p className="text-[#757575]">Senior Full Stack Developer</p>
              <p className="text-sm text-[#212121]">
                Tech Innovations Inc. • 2021-Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
