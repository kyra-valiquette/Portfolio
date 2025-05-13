import Title from "./components/Title"
import MainSection from "./components/MainSection"
import './Formulaire.css'

function App({addProject}) {

  return (
    <div className="formulaire">
      <Title/>
      <MainSection addProject={addProject}/>
    </div>
  );
}

export default App
