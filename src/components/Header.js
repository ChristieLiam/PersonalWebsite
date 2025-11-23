import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">Liam Christie | Portfolio</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/lab">Lab Info</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
