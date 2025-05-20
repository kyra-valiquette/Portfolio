import Title from "./components/Title"
import MainSection from "./components/MainSection"
import './Formulaire.css'

function Formulaire({addProject}) {

  return (
    <div className="formulaire">
      <Title/>
      <MainSection addProject={addProject}/>
    </div>
  );
}

export default Formulaire
