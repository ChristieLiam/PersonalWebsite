import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const PageTheme = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            return savedTheme;
        }
        const date = new Date();
        const hour = date.getHours();
        if (hour >= 20 || hour < 7) {
            return 'dark';
        }

        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);