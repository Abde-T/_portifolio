import { createContext, useState } from "react";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Tech from "../components/Tech";

export const ThemeContext = createContext(null);

function Home(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Landing theme={theme} toggleTheme={toggleTheme} />
        <Tech />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
