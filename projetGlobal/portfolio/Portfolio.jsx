import Header from "./components/Header"
import MainSection from "./components/MainSection"
import './Portfolio.css'
import NavBar from "./components/NavBar";

function App({projets}) {

  return (
    <>
      <NavBar/>
      <Header/>
      <MainSection projets={projets}/>
    </>
  );
}

export default App
