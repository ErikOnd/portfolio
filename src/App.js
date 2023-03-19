import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import AboutMeComponent from "./components/AboutMeComponent";

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <MainComponent></MainComponent>
      <AboutMeComponent></AboutMeComponent>
    </div>
  );
}

export default App;
