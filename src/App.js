import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import Update from "./Update";
import { BrowserRouter as Router,
  Switch,
  Route,}from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    
      <switch>
        <Route path="/" component={Registration} exact/>
        <Route path="/update/:id" component={Update} exact/>
      </switch>
   
    </div>
     </Router>
  );
}

export default App;
