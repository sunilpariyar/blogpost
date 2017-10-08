import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="black">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Blogpost</a>
                        <a data-activates="main-menu" 
                        className="button-collapse show-on-large">
                            <i className="fa fa-bars"></i></a>
                        <ul className="right hide-on-small-only">
                            <li><Link to="/"><i className="fa fa-users" ></i>Sunil</Link></li>
                        </ul>
                        <ul className="side-nav" id="main-menu">
                            <li><Link to="/"><i className="fa fa-home" ></i>Home</Link></li>
                            <li><Link to="/addBlog"><i className="fa fa-plus" ></i>New blog</Link></li>
                            <li><Link to="/about"><i className="fa fa-info-circle" ></i>About</Link></li>
                        </ul>                        
                    </div>
                </nav>
            </div>
        );
    }
}