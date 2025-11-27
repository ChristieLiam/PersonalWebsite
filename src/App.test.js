import { test, expect, beforeEach, jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { PageTheme } from './PageTheme';



const AllTheProviders = ({ children }) => {
    return (
        <Router>
            <PageTheme>
                {children}
            </PageTheme>
        </Router>
    );
};


const renderWithProviders = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options });


beforeEach(() => {
    global.fetch = jest.fn((url) => {
        //for any api call to get weather
        if (url.includes('weather')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    name: "Halifax",
                    main: { temp: 293.15, humidity: 50 }, // 293.15K = 20°C The open weather API returns a result in kelvin
                    weather: [{ description: "sunny" }]
                }),
            });
        }

        //for any api call to get project info
        if (url.includes('projects')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    projects: [{
                        id: 1,
                        title: "Test Project",
                        role: "Developer",
                        context: "University",
                        summary: "A summary",
                        keyContributions: ["React", "CSS"],
                        technologies: ["JavaScript"]
                    }]
                }),
            });
        }

        //for any api call to get skills info
        if (url.includes('skills')) {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    skillCategories: [{
                        categoryName: "Frontend Development",
                        description: "UI stuff",
                        skills: ["React", "Bootstrap"]
                    }]
                }),
            });
        }

        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({}),
        });
    });
});


// --- THE TESTS ---

test('Renders Home page static content', async () => {
    renderWithProviders(<Home />);

    expect(screen.getByRole('heading', { name: /Welcome To My Website!/i })).toBeInTheDocument();
    expect(screen.getByText(/Web-Centric Computing/i)).toBeInTheDocument();

    expect(await screen.findByText(/Current Weather in Halifax/i)).toBeInTheDocument();
});

test('Renders About page information', () => {
    renderWithProviders(<About />);

    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByText(/Dalhousie University, Halifax, NS/i)).toBeInTheDocument();
});

test('Renders Projects page structure', async () => {
    renderWithProviders(<Projects />);

    expect(screen.getByRole('heading', { name: /My Projects/i })).toBeInTheDocument();

    expect(await screen.findByText("Test Project")).toBeInTheDocument();
    expect(await screen.findByText("Developer | University")).toBeInTheDocument();
});

test('Renders Skills page and loads API data', async () => {
    renderWithProviders(<Skills />);

    expect(screen.getByRole('heading', { name: /My Skills/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search for a skill/i)).toBeInTheDocument();


    expect(await screen.findByText("Frontend Development")).toBeInTheDocument();
    expect(await screen.findByText("React")).toBeInTheDocument();
});

test('Renders Contact Me page', () => {
    renderWithProviders(<ContactMe />);

    expect(screen.getByRole('heading', { name: /Let's Connect!/i })).toBeInTheDocument();
    expect(screen.getByText(/lm577319@dal.ca/i)).toBeInTheDocument();
});

test('Header Renders Navigation Links', () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Liam Christie | Portfolio/i })).toBeInTheDocument();
});

test('Footer Renders Copyright Info', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/Liam Christie©/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Mode/i })).toBeInTheDocument();
});

test('Renders 404 Error page', () => {
    renderWithProviders(<NotFound />);

    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
});
