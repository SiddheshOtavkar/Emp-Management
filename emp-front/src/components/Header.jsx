import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <nav
                    className="navbar navbar-expand-lg navbar-dark bg-dark"
                    style={{ height: "80px" }}
                >
                    <a
                        className="navbar-brand"
                        style={{
                            paddingLeft: "20px",
                            fontFamily: "Dancing Script, cursive",
                        }}
                        href="/"
                    >
                        Employee Management System
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="navbar-brand"
                                style={{
                                    paddingLeft: "20px",
                                    fontFamily: "Dancing Script, cursive",
                                }}
                                href="/"
                                to="/employees"
                            >
                                Employees
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="navbar-brand"
                                style={{
                                    paddingLeft: "20px",
                                    fontFamily: "Dancing Script, cursive",
                                }}
                                href="/"
                                to="/departments"
                            >
                                Departments
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
