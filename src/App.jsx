import { Routes, Route } from "react-router";
import HomePage from "./components/asosiy";
import MenHaqimda from "./components/men_haqimda";
import Contact from "./components/contact";
import Batafsil from "./components/batafsil_page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenHaqimda />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/batafsil" element={<Batafsil />} />
      </Routes>
    </div>
  );
}

export default App;
