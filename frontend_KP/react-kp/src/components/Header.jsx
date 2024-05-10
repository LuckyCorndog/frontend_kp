import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';
import "./styleHeader.css";

class Header extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <Link to='/'>
                    <h1 className="navbar-logo">TravelWithMe</h1>
                </Link>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Header;