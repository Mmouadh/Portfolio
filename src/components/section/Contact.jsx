import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert(t("contact.successAlert"));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert(t("contact.errorAlert")));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150" id="con">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent text-center"
          >
            {t("contact.title")}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder={t("contact.namePlaceholder")}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder={t("contact.emailPlaceholder")}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder={t("contact.messagePlaceholder")}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {t("contact.sendButton")}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
