import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.fixing"),
      description: t("services.fixingDesc"),
    },
    {
      title: t("services.webApp"),
      description: t("services.webAppDesc"),
    },
    {
      title: t("services.frontend"),
      description: t("services.frontendDesc"),
    },
    {
      title: t("services.maintenance"),
      description: t("services.maintenanceDesc"),
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent text-center">
            {t("services.title")}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="mb-3 text-xl font-semibold text-[color:var(--text-color)]">
                  {service.title}
                </h3>
                <p className="text-[color:var(--text-color2)] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
