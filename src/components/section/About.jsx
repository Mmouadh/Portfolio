import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "BootStrap",
  ];

  const backendSkills = ["Node.js", "Php"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-400 mb-6">
            I'm Mouadh Jeljeli, a web developer skilled in problem-solving and
            building web applications. I specialize in creating efficient,
            user-friendly websites and enjoy tackling new challenges to create
            impactful digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front End</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back End</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-x-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <b>Bachelor of Computer Science</b>{" "}
                <span className="inline-block ml-50">(2016-2021)</span>
              </li>
              <li>
                <b>IT Management Technician</b>{" "}
                <span className="inline-block ml-50">(2022-2024)</span>
              </li>
              <li>
                <b>Relevant Coursework: </b>
                <span className="ml-5 inline-block">
                  Computer Hardware Management, Web Development, Responsive Web
                  Design, MySQL
                </span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:translate-x-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div>
              <h4 className="font-bold">Internship at Technopole Borj Cédria</h4>
              <span className="inline-block ml-50 -mb-10">(2023)</span>
              <p>
                Assisted in building front-end interfaces using WordPress,
                configuring plugins, and providing technical support.
              </p>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
