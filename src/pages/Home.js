import React from 'react';
import profileImage from '../imgs/me.jpg';

function Home() {
    return (
        <div className="container mt-5">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold">Liam Christie | Portfolio</h1>
                            <p className="fs-4">
                                Welcome to my project for CSCI 3172 (Web-Centric Computing).
                                This is a multi-page portfolio built from scratch using React,
                                React Router, and Bootstrap 5, and deployed on AWS Amplify.
                            </p>
                            <hr className="my-4" />
                            <p>Explore the site to see my projects or learn more about my skills.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={profileImage} alt="Liam Catching Baseball" className="img-fluid shadow-lg" style={{ maxWidth: '300px', height: 'auto' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
