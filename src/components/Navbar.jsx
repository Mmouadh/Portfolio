import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher"; // confirm the path

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-4xl font-bold text-white">
            Moua<span className="text-blue-500 font-bold text-5xl">Dev</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            id="mobileMenu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("Navbar.home")}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("Navbar.about")}
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("Navbar.projects")}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("Navbar.contact")}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
