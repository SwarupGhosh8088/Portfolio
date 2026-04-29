import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/section/Home";
import Contact from "./components/section/Navtabs/Contact";
import Projects from "./components/section/Projects";
import Loading from "./components/Loading";
import Cp from "./components/section/Navtabs/Cp";
import { useState, useEffect } from "react";
import typeSound from "../public/typing.wav";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  
    const audio = new Audio(typeSound);
    


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return(
      <>
        <Loading />
        audio.play();
        
      </>
     

    ) 
  }

  return (
    <>
   
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />


      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/cp" element={<Cp darkMode={darkMode}/>} />
        <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </>
  );
}

export default App;
