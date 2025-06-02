import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const menuContainer = document.getElementById("mobileMenu");

    const handleClickOutside = (e) => {
      if (menuContainer && !menuContainer.contains(e.target)) {
        setMenuOpen(false);
        setShowLangMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);

  const handleLanguageSelect = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
    setMenuOpen(false);
  };

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "projects", href: "#project" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <div
      id="mobileMenu"
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => {
          setMenuOpen(false);
          setShowLangMenu(false);
        }}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Language Dropdown Toggle */}
      <div className="absolute top-6 left-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowLangMenu(!showLangMenu);
          }}
          className="text-white text-lg font-semibold bg-blue-500/45  px-3 py-1 rounded hover:bg-blue-500/40 transition"
        >
          🌐 {t("Navbar.language")}
        </button>

        {showLangMenu && (
          <div className="mt-2 bg-white rounded shadow-md absolute z-50 w-32 flex flex-col">
            <button
              onClick={() => handleLanguageSelect("en")}
              className="flex items-center px-3 py-2 hover:bg-gray-100 text-blue-700"
            >
              <Flag code="GB" style={{ width: 24, height: 16, marginRight: 8 }} />
              English
            </button>
            <button
              onClick={() => handleLanguageSelect("fr")}
              className="flex items-center px-3 py-2 hover:bg-gray-100 text-blue-700"
            >
              <Flag code="FR" style={{ width: 24, height: 16, marginRight: 8 }} />
              Français
            </button>
          </div>
        )}
      </div>

      {/* Nav Links */}
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={() => {
            setMenuOpen(false);
            setShowLangMenu(false);
          }}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {t(`Navbar.${item.key}`)}
        </a>
      ))}
    </div>
  );
};
