import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink activeClassName = "is-active" to = "/" exact>Home</NavLink></p>
        <p><NavLink activeClassName = "is-active" to = "/create">Add</NavLink></p>
        <p><NavLink activeClassName = "is-active" to = "/help">Help</NavLink></p>
    </header>
)

export default Header;
        