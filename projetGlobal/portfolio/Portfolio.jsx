import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import './Portfolio.css'
import NavBar from "./components/NavBar";

function App({projets}) {

  return (
    <>
      <NavBar/>
      <Header/>
      <MainSection projets={projets}/>
      <Footer/>
    </>
  );
}

export default App
