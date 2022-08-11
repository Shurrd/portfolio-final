import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [menu, setMenu] = useState<boolean>(false);

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
    </div>
  );
};

export default App;
