import './App.css';
import WelcomePage from "./Components/WelcomePage/WelcomePage"
import NavBar from './Components/NavBar/NavBar.jsx'
import Dashboard from './Components/Dashboard/Dashboard'
import Journal from './Components/Journal/Journal'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <WelcomePage />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/journal' component={Journal} />
    </div>
  );
}

export default App;
