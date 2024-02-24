import React from 'react';
import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

export const MenuLink = styled(Link)`
 color: #fff;
 display: flex;
 cursor: pointer;
 align-items: center;
 text-decoration: none;
 padding: 0 1.2rem;
 height: 100%;
 &.active {
    color: #000000;
 }
 `




 class NavBar extends React.Component {
    render() { return (
        <nav>
            <h1 className="h1">About</h1>
            <ul>
                <link to={"./about.js"}>
                    <li>About</li>
                </link>
            </ul>
        </nav>
    )

    }
}

export default NavBar