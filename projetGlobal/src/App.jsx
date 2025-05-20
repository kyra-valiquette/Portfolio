import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Portfolio from "../portfolio/Portfolio";
import Formulaire from "../formulaire/Formulaire";
import {useState} from 'react'
import Introduction from '../shared/Introduction'
import Api from '../api/Api'
import Footer from '../shared/Footer'
function App() {
  const [projets, setProjets] = useState([]);

  function addProject(formData){
    
    setProjets(ancienProjets => [
      ...ancienProjets, {
        id: ancienProjets.length + 1,
        img: URL.createObjectURL(formData.get("image")), //Aidé par copilot pcq le URL ne fonctionnait pas
        nom: formData.get("nom"),
        desc: formData.get("desc"),
        techno: formData.get("techno"),
        lien: formData.get("lien"),
      }
    ])
  }
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction/>}/>
        <Route path="/portfolio/*" element={<Portfolio projets={projets}/>} />
        <Route path="/formulaire/*" element={<Formulaire addProject={addProject}/>} />
        <Route path="/api/*" element={<Api/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
