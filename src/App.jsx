import { createContext, useState } from 'react';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Tech from './components/Tech';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  AOS.init();
  return (

   <ThemeContext.Provider value={{theme, toggleTheme}}>
  
   <div className="App" id={theme}>
   <Landing theme ={theme} toggleTheme={toggleTheme}/>
   <Tech />
   <Projects/>
   <Footer/>
   </div>
   </ThemeContext.Provider>

  )
}

export default App
