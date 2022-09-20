import React, { Component } from "react";
import logo from './assets/images/logo.svg'
class HeaderComponent extends Component {
    render() {
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
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Form</a>
                            </li>
                            <li>
                                <a href="#">About Me</a>
                            </li>
                        </ul>
                    </nav>

                    {/* clearfix */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;