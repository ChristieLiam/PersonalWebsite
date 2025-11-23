import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container mt-5 p-5 mb-4 bg-light-subtle secondary rounded-3 shadow-lg">
            <h1 className="display-1">404 - Page Not Found</h1>
            <p className="lead">Sorry, we couldn't find the page you're looking for.</p>

            <Link to="/" className="btn btn-dark btn">Go Back Home</Link>
        </div>
    );
}

export default NotFound;