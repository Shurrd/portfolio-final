import React, { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const props = {
    menu: menu,
    handleMenu: handleMenu,
  };

  return (
    <div className="text-gray-300">
      <Navbar {...props} />
      <Hero {...props} />
      <About />
    </div>
  );
};

export default App;
