import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ContactComponent from "./components/ContactComponent";

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <MainComponent></MainComponent>
      <AboutMeComponent></AboutMeComponent>
      <SkillsComponent></SkillsComponent>
      <ProjectsComponent></ProjectsComponent>
      <ContactComponent></ContactComponent>
    </div>
  );
}

export default App;
