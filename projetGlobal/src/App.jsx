import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Portfolio from "../portfolio/src/App";
import Formulaire from "../formulaire/src/App";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio/*" element={<Portfolio />} />
        <Route path="/formulaire/*" element={<Formulaire />} />
      </Routes>
    </div>
  )
}

export default App
