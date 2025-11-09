import React from 'react';
import { Link } from 'react-router-dom';

function notFound() {
    return (
        <div className="container mt-5 text-center">
            <h1 className="display-1">404</h1>
            <h2 className="display-4">Page Not Found</h2>
            <p className="lead">Sorry, we couldn't find the page you're looking for.</p>

            <Link to="/" className="btn btn-primary btn-lg">Go Back Home</Link>
        </div>
    );
}

export default notFound;