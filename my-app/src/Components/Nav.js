import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Nav.css'

export default function Nav() {
    return (
        <nav>
            {/* <h2>Zach Power</h2> */}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}