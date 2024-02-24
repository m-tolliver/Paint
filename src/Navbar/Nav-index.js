import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
            <li>
                <Link to="/">Sign Up</Link>
            </li>
        </div>
    );
};

export default Navbar