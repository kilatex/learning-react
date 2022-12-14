import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/images/logo.svg'

const HeaderComponent = () =>{
    return (
        <header id="header">
            <div className="center">
                {/* LOGO */}
                <div id="logo">
                    <img src={logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>React</strong>Course
                    </span>
                </div>
                {/* MENU */}
                <nav id="menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </nav>

                {/* clearfix */}
                <div className="clearfix"></div>
            </div>
        </header>
    );
}


export default HeaderComponent;