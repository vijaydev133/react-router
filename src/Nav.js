import {Link} from "react-router-dom"
import "./Nav.css"
import logo from './logo.svg';

export default function Nav(){
    return(
        <nav className="nav">
            <div className="nav-left">
              <img src={logo} alt="" width={"90px"}/> 
            </div>
            <div className="nav-right">
                <ul>
                    <li><Link to = "home"  style={{textDecoration: "none", color : "white"}}>Home</Link ></li>
                    <li><Link to = "about" style={{textDecoration: "none", color : "white"}}>About</Link></li>
                    <li><Link to = "Services" style={{textDecoration: "none", color : "white"}}>Services</Link></li>
                    <li><Link to = "products" style={{textDecoration: "none", color : "white"}}>Products</Link></li>
                    
                </ul>
            </div>
        </nav>
    )
}