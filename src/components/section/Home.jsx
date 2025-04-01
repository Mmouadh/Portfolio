import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right">
            Hi, I'm Mouadh!
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Hi, I’m Mouadh Jeljeli, a 26-year-old web developer from Tunisia!
            I’m passionate about building modern, user-friendly websites, and I
            have a solid foundation in HTML, CSS, JavaScript, and React. I
            specialize in creating sleek, functional digital experiences. I’m
            always open to new collaborations and opportunities to build amazing
            projects using cutting-edge technologies like Bootstrap, Tailwind
            CSS, Next.js, and Node.js. Let’s connect and create something
            incredible together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(6, 182, 212, 0.2)] hover:bg-cyan-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
