import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import './Formulaire.css'

function App({addProject}) {

  return (
    <>
      <Header/>
      <MainSection addProject={addProject}/>
      <Footer/>
    </>
  );
}

export default App
