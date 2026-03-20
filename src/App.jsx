import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/section/Home";
import Contact from "./components/section/Navtabs/Contact";
import Projects from "./components/section/Projects";
import Loading from "./components/Loading";
import Cp from "./components/section/Navtabs/Cp";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/cp" element={<Cp />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </>
  );
}

export default App;
