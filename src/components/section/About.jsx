import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const { t } = useTranslation();

  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "BootStrap",
  ];

  const backendSkills = ["Node.js", "Express.js", "Php"];
  const databases = ["Oracle", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent text-center">
            {t("about.title")}
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="mb-6">{t("about.description")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("about.frontend")}</h3>
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
                <h3 className="text-xl font-bold mb-4">{t("about.backend")}</h3>
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
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("about.databases")}</h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((tech, key) => (
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
              <h3 className="text-xl font-bold mb-4">{t("about.education")}</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <b>{t("about.bachelor")}</b>{" "}
                  <span className="inline-block ml-50">
                    {t("about.bachelorYears")}
                  </span>
                </li>
                <li>
                  <b>{t("about.technician")}</b>{" "}
                  <span className="inline-block ml-50">
                    {t("about.technicianYears")}
                  </span>
                </li>
                <li>
                  <b>{t("about.coursework")}</b>
                  <span className="ml-5 inline-block">
                    {t("about.courseList")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:translate-x-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{t("about.experience")}</h3>
              <div>
                <h4 className="font-bold">{t("about.internship")}</h4>
                <span className="inline-block ml-50 -mb-10">
                  {t("about.internshipYear")}
                </span>
                <p>{t("about.internshipDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
