import React from 'react';

function About() {
    return (
        <div className="container mt-5">
            <h1>About Me</h1>

            <p className="lead">
                I am a third-year Computer Science student at Dalhousie University.
                As an analytical problem-solver with hands-on experience in
                frontend development and cloud deployment using AWS Amplify,
                I thrive in team environments and am a highly responsible self-starter.
            </p>

            <hr className="my-4" />

            <h2>Education</h2>

            <h4>Bachelor of Computer Science</h4>
            <p className="text-muted">Dalhousie University, Halifax, NS (2023-Present)</p>
            <h5>Relevant Coursework:</h5>
            <ul>
                <li>Software Development</li>
                <li>Database Systems</li>
                <li>Server Side Scripting</li>
                <li>Data Structures and Algorithms</li>
                <li>Junior Developer Course (Helped Develop DEEBug)</li>
            </ul>

            <h4 className="mt-4">High School Diploma</h4>
            <p className="text-muted">Newmarket Highschool, Newmarket, ON (2018-2022)</p>
            <ul>
                <li>Grade 12 Graduate</li>
                <li>Honours Student</li>
            </ul>

            <hr className="my-4" />

            <h2>Technical Skills</h2>
            <p>
                I have a strong technical foundation and am eager to apply my skills
                in a hands-on role.
            </p>
            <div className="row">
                <div className="col-md-4">
                    <h5>Languages</h5>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript (JS/JSX)</li>
                        <li>HTML & CSS</li>
                        <li>SQL</li>
                        <li>C</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Frameworks & Platforms</h5>
                    <ul>
                        <li>React.js</li>
                        <li>AWS Amplify</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>M365 & Google Workspace</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Tools & Environments</h5>
                    <ul>
                        <li>Git</li>
                        <li>PC & MacOS</li>
                        <li>Flask</li>
                        <li>CodeMirror</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;