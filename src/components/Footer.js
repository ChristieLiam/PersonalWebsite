import React from 'react';
import { useTheme } from '../PageTheme';

function Footer() {
    const { theme, toggleTheme } = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-pill">
                <span>© {year} <strong>Liam Christie</strong></span>
                <div className="footer-sep" />
                <button className="theme-btn" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
            </div>
        </footer>
    );
}

export default Footer;
