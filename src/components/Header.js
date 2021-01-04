import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <div>
        <h1>Portfolio</h1>
        <NavLink activeClassName="isActiva" exact={true} to="/">Home</NavLink>
        <NavLink activeClassName="isActiva" exact={true} to="/portfolio">Portfolio</NavLink>
        <NavLink activeClassName="isActiva" exact={true} to="/contact">Contact</NavLink>
    </div>
);
export default Header;