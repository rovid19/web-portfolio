import React, { createContext, useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import { globalContext } from "./Stores/GlobalContext";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      console.log("user is scrolling");
    });
  }, []);
  return (
    <div>
      <globalContext.Provider value={{ isScrolling: false }}>
        <Header />
        <Hero />
        <AboutMe />
      </globalContext.Provider>
    </div>
  );
};

export default App;
