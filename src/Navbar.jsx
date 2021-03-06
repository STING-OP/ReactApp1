import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand text-dark" to="/">TouchSky</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active text-dark" aria-current="page" exact to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;