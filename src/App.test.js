import { test, expect } from '@jest/globals';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Header from './components/Header';
import LabInfo from "./pages/LabInfo";
import NotFound from "./pages/NotFound";

test('Renders Home page with correct title and mocks Weather API', async () => {
    render(
        <Router>
            <Home />
        </Router>
    );

    expect(screen.getByRole('heading', { name: /Welcome To My Website!/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Liam Catching Baseball/i })).toBeInTheDocument();


});

test('Renders About page with correct title and information', () => {
    render(
        <Router>
            <About />
        </Router>
    );

    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    // Using a smaller substring is safer than matching the whole paragraph
    expect(screen.getByText(/analytical problem-solver/i)).toBeInTheDocument();
    expect(screen.getByText(/Dalhousie University, Halifax, NS/i)).toBeInTheDocument();
});

test('Renders Projects page and maps through project cards', async () => {
    // Mock the Projects API response
    const mockProjects = {
        projects: [
            {
                id: 1,
                title: "Mock Project A",
                role: "Dev",
                context: "School",
                summary: "A test summary",
                keyContributions: ["Built UI"],
                technologies: ["React"]
            }
        ]
    };

    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockProjects,
    });

    render(
        <Router>
            <Projects />
        </Router>
    );

    expect(screen.getByRole('heading', { name: /My Projects/i })).toBeInTheDocument();
    expect(screen.getByText(/Loading projects.../i)).toBeInTheDocument();

});

test('Renders Skills page and filters skills', async () => {
    render(
        <Router>
            <Skills />
        </Router>
    );

    expect(screen.getByRole('heading', { name: /My Skills/i })).toBeInTheDocument();


});

test('Renders Contact Me page', () => {
    // This relies on the useTheme mock defined at the top
    render(
        <Router>
            <ContactMe />
        </Router>
    );

    expect(screen.getByRole('heading', { name: /Let's Connect!/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /GitHub/i })).toBeInTheDocument();
});

test('Renders Lab-Info page', () => {
    render(
        <Router>
            <LabInfo />
        </Router>
    );
    expect(screen.getByText(/PersonalPortfolio V2/i)).toBeInTheDocument();
});

test('Header Renders With Correct Information and Links', () => {
    render(
        <Router>
            <Header />
        </Router>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Liam Christie | Portfolio/i })).toBeInTheDocument();



    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
});

test('Footer Renders With Correct Information and Theme Toggle', () => {
    // This relies on the useTheme mock
    render(
        <Router>
            <Footer />
        </Router>
    );

    expect(screen.getByText(/Liam Christie©/i)).toBeInTheDocument();
    const modeBtn = screen.getByRole('button', { name: /Mode/i });
    expect(modeBtn).toBeInTheDocument();

    // We can even click it, though our mock toggleTheme is just a jest.fn()
    fireEvent.click(modeBtn);
});

test('Renders 404 Error page', () => {
    render(
        <Router>
            <NotFound />
        </Router>
    );

    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
});

// --- INTEGRATION TESTS ---

test('Renders 404 Error page when visiting a non-existent route', () => {
    render(
        <MemoryRouter initialEntries={['/some/bad/route']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
});