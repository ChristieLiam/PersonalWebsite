import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

test('renders Home page with correct title, description, and links', () => {
    render(
        <Router>
            <Home/>
        </Router>
    );

    expect(screen.getByText(/Liam Christie | Portfolio/i)).toBeInTheDocument();

});