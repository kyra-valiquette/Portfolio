import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Portfolio from "../portfolio/Portfolio";
import Formulaire from "../formulaire/Formulaire";
import {useState} from 'react'
import Introduction from '../shared/Introduction'
import Api from '../api/Api'

function App() {
  const [projets, setProjets] = useState([]);

  function addProject(formData){
    
    setProjets(ancienProjets => [
      ...ancienProjets, {
        id: ancienProjets.length + 1,
        img: URL.createObjectURL(formData.get("image")),
        nom: formData.get("nom"),
        desc: formData.get("desc"),
        techno: formData.get("techno"),
        lien: formData.get("lien"),
      }
    ])
  }
  return (
    <div>
      <Navbar />
      <Introduction />
      <Routes>
        <Route path="/portfolio/*" element={<Portfolio projets={projets}/>} />
        <Route path="/formulaire/*" element={<Formulaire addProject={addProject}/>} />
        <Route path="/api/*" element={<Api/>}/>
      </Routes>
      
    </div>
  )
}

export default App
