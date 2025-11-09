import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mt-5">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-4 fw-bold">Liam Christie | Portfolio</h1>
                    <p className="col-md-8 fs-4">
                        Welcome to my project for CSCI 3172. This is a multi-page
                        personal portfolio built from scratch using React, Bootstrap 5 and AWS.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;