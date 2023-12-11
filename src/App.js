import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ella_zolotarenko" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
