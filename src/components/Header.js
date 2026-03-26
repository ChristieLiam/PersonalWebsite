import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
    { to: '/',         label: 'Home',     end: true },
    { to: '/about',    label: 'About' },
    { to: '/projects', label: 'Work' },
    { to: '/skills',   label: 'Skills' },
    { to: '/contact',  label: 'Contact' },
];

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav data-bs-theme="dark" className={`navbar navbar-expand-lg navbar-dark pill-nav ${open ? 'nav-open' : ''}`}>
            <div className="d-flex align-items-center w-100 gap-2">

                <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
                    Liam<span className="text-accent">.</span>
                </Link>

                {/* Divider — desktop only */}
                <div className="nav-sep d-none d-lg-block" />

                {/* Links */}
                <div className={`${open ? '' : 'collapse'} navbar-collapse`}>
                    <ul className="navbar-nav ms-lg-auto align-items-lg-center gap-1">
                        {NAV_LINKS.map(({ to, label, end }) => (
                            <li className="nav-item" key={to}>
                                <NavLink
                                    className="nav-link"
                                    to={to}
                                    end={end}
                                    onClick={() => setOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile toggler */}
                <button
                    className="navbar-toggler ms-auto d-lg-none"
                    type="button"
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    onClick={() => setOpen(p => !p)}
                >
                    <span className="navbar-toggler-icon" />
                </button>

            </div>
        </nav>
    );
}

export default Header;
