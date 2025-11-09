import React from 'react';
import {Link} from "react-router-dom";

function Readme() {
    return (
        <div className="alert alert-light">
            <h5>Welcome to the Lab 5 README!</h5>
            <p>Page not built yet</p>
            <Link to="/" className="btn btn-primary">
                Go Back Home
            </Link>
        </div>
    );
}

export default Readme;