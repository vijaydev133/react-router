import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Products from "./Products"

function App() {
  return (
    <div >
      <Nav/>
      
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="products" element={<Products/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
