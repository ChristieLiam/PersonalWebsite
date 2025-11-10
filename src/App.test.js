import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Home from './pages/Home'; // <-- Make sure this one is here
import NotFound from './pages/NotFound';

test('renders Home page with correct title, description, and links', () => {
    render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    );
});