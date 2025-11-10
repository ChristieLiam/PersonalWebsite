import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route, MemoryRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';


// Unit Tests Begin Here

test('Renders Home page with correct title, description, and links', () => {
    render(
        <Router>
            <Home/>
        </Router>
    );

    expect(screen.getByRole('heading', { name: /Liam Christie | Portfolio/i })).toBeInTheDocument();
    expect(screen.getByText(/Explore the site to see my projects or learn more about my skills./i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Liam Catching Baseball/i })).toBeInTheDocument();

});

test('Renders About page with correct title and information', () => {
    render(
        <Router>
            <About/>
        </Router>
    );

    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByText(/I am a third-year Computer Science student at Dalhousie University. As an analytical problem-solver with hands-on experience in frontend development and cloud deployment using AWS Amplify, I thrive in team environments and am a highly responsible self-starter./i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Education/i })).toBeInTheDocument();
    expect(screen.getByText(/Dalhousie University, Halifax, NS \(2023-Present\)/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Technical Skills/i })).toBeInTheDocument();
    expect(screen.getByText(/I have a strong technical foundation and am eager to apply my skills in a hands-on role./i)).toBeInTheDocument();


});

test('Renders Projects page with correct title and project information', () => {
    render(
        <Router>
            <Projects/>
        </Router>
    );

    expect(screen.getByRole('heading', { name: /My Projects/i })).toBeInTheDocument();
    expect(screen.getByText(/Here are some of the projects I've worked on that showcase my skills./i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /DEEBug - AI Debugging Tool/i })).toBeInTheDocument();
    expect(screen.getByText(/I worked on this while in my class CSCI-2691 Junior Developer Class./i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /Personal Portfolio Website/i })).toBeInTheDocument();
    expect(screen.getByText(/This website! A multi-page personal portfolio built to showcase my skills, education, and projects for CSCI 3172./i)).toBeInTheDocument();


});

test('Header Renders With Correct Information and Links', () => {
    render(
        <Router>
            <Header/>
        </Router>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();


    expect(screen.getByRole('link',{ name: /Lab 5: React Webpage On AWS/i } )).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();

});

test('Footer Renders With Correct Information', () => {
    render(
        <Router>
            <Footer/>
        </Router>
    );

    expect(screen.getByText(/Lab 5 - CSCI3172 | Liam Christie ©/i)).toBeInTheDocument();
});

test('Renders 404 Error page with correct error code and information regarding error (Page Not Found)', () => {
    render(
        <Router>
            <NotFound/>
        </Router>
    );

    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Go Back Home/i })).toBeInTheDocument();

});



// Integration Tests Begin Here

test('Renders All & Any Pages with header and footer', () =>{

    render(
        <Router>
            <App />
        </Router>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link',{ name: /Lab 5: React Webpage On AWS/i } )).toBeInTheDocument();
    expect(screen.getByText(/Lab 5 - CSCI3172 | Liam Christie ©/i)).toBeInTheDocument();

});

test('Renders 404 Error page when visiting a non-existent route', () => {
    render(
        <MemoryRouter initialEntries={['/some/bad/route/that/does/not/exist']}>
            <App />
        </MemoryRouter>

    );

    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Go Back Home/i })).toBeInTheDocument();

});