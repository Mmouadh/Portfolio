import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Projects = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const projects = [
    {
      title: t("projects.crud.title"),
      description: t("projects.crud.description"),
      tech: ["HTML", "CSS", "JavaScript", "Php"],
      link: "https://mmouadh.github.io/crud/",
    },
    {
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      tech: ["React", "TailwindsCSS", "EmailJS"],
      link: "#portfolio", 
    },
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      tech: ["MongoDB", "Express.js", "React", "Node.js", "CSS"],
      link: "https://mmouadh.github.io/Ecomm-only-Front/", 
    },
    {
      title: t("projects.chat.title"),
      description: t("projects.chat.description"),
      tech: ["React", "FireBase", "CSS"],
      link: "https://mmouadh.github.io/ChatApp/",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      if (project.link === "#portfolio") {
                        setShowPopup(true);
                      } else {
                        window.open(project.link, "_blank");
                      }
                    }}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    {t("projects.viewLink")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Modal for Portfolio */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center max-w-sm w-full -translate-y-80 custom-slide-up">
              <p className="text-lg font-medium mb-4">
                {t("projects.portfolioPopup")}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* 🔽 Slide-Up Animation Style */}
        <style>
          {`
            @keyframes slideUpFade {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .custom-slide-up {
              animation: slideUpFade 0.4s ease-out;
            }
          `}
        </style>
      </RevealOnScroll>
    </section>
  );
};
