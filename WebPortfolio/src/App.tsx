import React, { createContext, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";

interface GlobalContextType {
  startHeaderAni: boolean;
}

export const globalContext = createContext<GlobalContextType>({
  startHeaderAni: false,
});

const App = () => {
  const [startHeaderAni, setStartHeaderAni] = useState(false);
  return (
    <div>
      <globalContext.Provider value={{ startHeaderAni }}>
        <Header />
        <Hero />
        <AboutMe />
      </globalContext.Provider>
    </div>
  );
};

export default App;
