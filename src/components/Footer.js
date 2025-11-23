import React from 'react';
import {useTheme} from "../PageTheme";

function Footer() {
    const { theme , toggleTheme} = useTheme();
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="p-2 bg-dark d-flex justify-content-between align-items-center">
            <p className="mb-0 text-light">Liam Christie© {year}</p>
            <button onClick={toggleTheme} className={`btn ${theme === 'light' ? 'btn-outline-light' : 'btn-outline-light'}`}>{theme === 'light' ? 'Dark' : 'Light'} Mode</button>
        </footer>
    );
}

export default Footer;
