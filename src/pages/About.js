import React from 'react';

function About() {

    return (
        <div className="container mt-5 p-5 mb-4 bg-light-subtle secondary rounded-3 shadow-lg">

            <h1>About Me</h1>

            <p className="lead">
                I am a third-year Computer Science student at Dalhousie University with a strong passion for building secure, scalable software.
                My focus lies at the intersection of <strong>Full-Stack Development</strong>, <strong>Artificial Intelligence</strong>, and <strong>Cybersecurity</strong>.
                I have hands-on experience building full-stack applications (like email servers and AI tools) and am eager to apply my technical skills
                in a challenging co-op role.
            </p>

            <hr className="my-4" />

            <h2>Education</h2>

            <h4>Bachelor of Computer Science</h4>
            <p className="text-muted">Dalhousie University, Halifax, NS (Anticipated Graduation: April 2027)</p>

            <p>
                My academic path focuses on the core principles of software engineering and security.
                I have completed advanced coursework in:
            </p>
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        <li><strong>Network Security & Cryptology:</strong> In-depth study of protocols (TCP/IP, TLS), firewalls, and encryption.</li>
                        <li><strong>Server Side Scripting:</strong> Backend development using Python and server management.</li>
                        <li><strong>Database Systems:</strong> SQL, database design, and data integrity.</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li><strong>Software Development:</strong> Agile methodologies, SDLC, and team-based project management.</li>
                        <li><strong>Data Structures & Algorithms:</strong> Optimization and efficient code design.</li>
                        <li><strong>Junior Developer Project:</strong> Core contributor to DEEBug (AI Training Tool).</li>
                    </ul>
                </div>
            </div>

            <h4 className="mt-4">High School Diploma</h4>
            <p className="text-muted">Newmarket Highschool, Newmarket, ON (2018-2022)</p>
            <ul>
                <li>Grade 12 Graduate & Honours Student</li>
            </ul>

        </div>
    );
}

export default About;