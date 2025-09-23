import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-3 ml-4">
      <button
        onClick={() => changeLanguage("en")}
        title="English"
        aria-label="Switch to English"
        className="hover:scale-110 transition"
      >
        <Flag code="GB" style={{ width: 24, height: 16 , cursor: "pointer" }} />
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        title="Français"
        aria-label="Switch to French"
        className="hover:scale-110 transition"
      >
        <Flag code="FR" style={{ width: 24, height: 16, cursor: "pointer" }} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
