import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Projects } from "./components/section/Project";
import { Contact } from "./components/section/Contact";
import { Services } from "./components/section/Services";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [hovered, setHovered] = useState(false);  // <-- new state

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
         <button
  onClick={toggleTheme}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  style={{
    position: "fixed",
    top: "1rem",
    right: "3rem",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    backgroundColor:"none",
    color: theme === "dark" ? "#eee" : "#111",
    zIndex: 1000,
    transition: "transform 0.2s ease",
    transform: hovered ? "scale(1.1)" : "scale(1)",
    boxShadow: "none",  // explicitly remove shadow
    
  }}
>
  {theme === "dark" ? "☀" : "🌙"}
</button>

          <div
            className="min-h-screen transition-opacity duration-700"
            style={{
              opacity: 1,
            }}
          >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <Projects />
            <Services />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;
