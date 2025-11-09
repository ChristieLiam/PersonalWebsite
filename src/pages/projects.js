import React from 'react';

function Projects() {
    return (
        <div className="container mt-5">
            <h1>My Projects</h1>
            <p className="lead">
                Here are some of the projects I've worked on that showcase my skills.
            </p>

            <hr className="my-4" />

            <div className="row mb-4">
                <div className="col-md-12">
                    <h3>DEEBug - AI Debugging Tool</h3>
                    <p>
                        DEEBug is a web-based AI tool designed to help developers detect
                        and fix performance bugs (like low accuracy) in deep learning models.
                    </p>
                    <p>I worked on this while in my class CSCI-2691 Junior Developer Class.</p>
                    <h5>My Role: Frontend Developer & Backend Contributor</h5>
                    <p>
                        As a developer on the DEEBug project, I was focused on improving
                        the UI and backend API.
                    </p>
                    <ul>
                        <li>
                            Engineered the <strong>frontend redesign</strong> from a single-script upload
                            system to a modular, multi-step pipeline.
                        </li>
                        <li>
                            Built <strong>React.js components</strong> for the five key pipeline stages:
                            Data Preparation, Model Definition, Training, Evaluation,
                            and Visualization.
                        </li>
                        <li>
                            Integrated the <strong>CodeMirror</strong> library to create in-browser,
                            syntax-highlighted code editors with pre-filled templates
                            to guide users.
                        </li>
                        <li>
                            Implemented <strong>form validation</strong> to ensure users followed the
                            required function templates, reducing errors.
                        </li>
                        <li>
                            Contributed to the <strong>Python (Flask) backend API</strong> that receives
                            the modular code snippets, assembles them into a single executable
                            script, and manages the ML workflow.
                        </li>
                    </ul>
                    <p>
                        <strong>Technologies Used:</strong> React.js, Python, Flask, CodeMirror
                    </p>
                </div>
            </div>

            <hr className="my-4" />

            <div className="row mb-4">
                <div className="col-md-12">
                    <h3>Personal Portfolio Website</h3>
                    <p>
                        This website! A multi-page personal portfolio built to
                        showcase my skills, education, and projects for CSCI 3172.
                    </p>
                    <ul>
                        <li>
                            Built from scratch using <strong>React</strong> and <strong>React Router</strong> to create
                            a multi-page application.
                        </li>
                        <li>
                            Styled with <strong>Bootstrap 5</strong> for a clean and modern design,
                            meeting WCAG accessibility requirements.
                        </li>
                        <li>
                            Deployed to <strong>AWS Amplify</strong> with a continuous deployment (CI/CD)
                            pipeline connected to a personal GitHub repository.
                        </li>
                    </ul>
                    <p>
                        <strong>Technologies Used:</strong> React.js, React Router,
                        Bootstrap 5, AWS Amplify, Git
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;