import './App.css';
import Navbar from './components.js/navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from "./components.js/Footer.js"
import Contact from './pages/Contact';

function App() {
  
  return (
    <div className="App">
      <Router >
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>  
        <Route path="/Projects" exact component={Projects}/>   
        <Route path="/about" exact component={About}/>   
        <Route path="/contact" exact component={Contact}/>   

           </Switch>
      </Router >
<Footer/>
    </div>
  );
}

export default App;

