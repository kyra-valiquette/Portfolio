import Header from "./components/Header"
import MainSection from "./components/MainSection"
import './Portfolio.css'
import NavBar from "./components/NavBar";

function Portfolio({projets}) {

  return (
    <>
      <NavBar/>
      <Header/>
      <MainSection projets={projets}/>
    </>
  );
}

export default Portfolio
