import logo from "./logo.svg";
import "./App.css";
import Personer from "./components/Personer/Personer";
import Biler from "./components/Shared/Biler/Biler";
import Savings from "./components/Savings/Savings";
import Income from "./components/Shared/Income/Income";
import SubmitBtn from "./components/Shared/SubmitBtn/SubmitBtn";

function App() {
  return (
    <div className="App">
      <div className="flex-item">
        <Personer />
      </div>
      <div className="flex-item">
        <Biler />
      </div>
      <div className="flex-item">
        <Savings />
      </div>
      <div className="flex-item">
        <Income />
      </div>
      <div className="flex-item">
        <SubmitBtn />
      </div>
    </div>
  );
}

export default App;
