const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());


router.get('/projects', (req, res) => {
    res.json({
        "projects": [
            {
                "id": "deebug-ai",
                "title": "DEEBug - AI Debugging Tool",
                "role": "Frontend Developer & Backend Contributor",
                "context": "CSCI-2691 Junior Developer Class",
                "summary": "A web-based AI tool designed to help developers detect and fix performance bugs (like low accuracy) in deep learning models.",
                "keyContributions": [
                    "Engineered the frontend redesign from a single-script upload system to a modular, multi-step pipeline.",
                    "Built React.js components for the five key pipeline stages: Data Preparation, Model Definition, Training, Evaluation, and Visualization.",
                    "Integrated the CodeMirror library to create in-browser, syntax-highlighted code editors with pre-filled templates.",
                    "Implemented form validation to ensure users followed required function templates.",
                    "Contributed to the Python (Flask) backend API to manage the ML workflow and script assembly.",
                    "Integrated backend systems to analyze results with the Gemini API and display TensorFlow visualizations."
                ],
                "technologies": [
                    "React.js",
                    "Python",
                    "Flask",
                    "CodeMirror",
                    "Tailwind CSS",
                    "Gemini API",
                    "TensorFlow"
                ],
                "links": {
                    "demo": null,
                    "repo": null
                }
            },
            {
                "id": "webmail-client",
                "title": "Full-Stack Webmail Client",
                "role": "Creator & Full-Stack Developer",
                "context": "Academic Project",
                "summary": "A full-stack web application built from scratch to handle user authentication, email composition, and storage.",
                "keyContributions": [
                    "Engineered a RESTful API using Node.js and Express to handle all user and email operations.",
                    "Implemented a complete user authentication system using Express Sessions and crypto for secure SHA-256 password hashing.",
                    "Designed and managed a MySQL database schema for users, login credentials, and email storage.",
                    "Developed a responsive, multi-page front-end with HTML, Bootstrap, and vanilla JavaScript."
                ],
                "technologies": [
                    "Node.js",
                    "Express",
                    "MySQL",
                    "HTML5",
                    "Bootstrap",
                    "Vanilla JavaScript",
                    "Crypto (SHA-256)"
                ],
                "links": {
                    "demo": null,
                    "repo": null
                }
            },
            {
                "id": "hotel-booking",
                "title": "Hotel Web Booking Platform",
                "role": "Creator & Full-Stack Developer",
                "context": "Academic Project",
                "summary": "A full-stack web application for browsing and booking hotel rooms using a custom file-based database.",
                "keyContributions": [
                    "Built a custom backend server from scratch using the native Node.js http module (no framework) to handle routing.",
                    "Engineered a custom REST API (/api/rooms) that serves room data from a JSON file-based database.",
                    "Implemented server-side business logic for date conflict validation and room availability checks using the fs module.",
                    "Developed a responsive front-end using vanilla JavaScript to consume the API and handle booking forms."
                ],
                "technologies": [
                    "Node.js (Native http module)",
                    "File System (fs)",
                    "JSON Database",
                    "HTML5",
                    "Bootstrap",
                    "Vanilla JavaScript"
                ],
                "links": {
                    "demo": null,
                    "repo": null
                }
            },
            {
                "id": "portfolio-site",
                "title": "Personal Portfolio Website",
                "role": "Frontend Developer",
                "context": "CSCI 3172",
                "summary": "A multi-page personal portfolio built to showcase skills, education, and projects, meeting WCAG accessibility standards.",
                "keyContributions": [
                    "Built from scratch using React and React Router to create a multi-page application.",
                    "Styled with Bootstrap 5 for a clean, modern design meeting WCAG accessibility requirements.",
                    "Deployed to AWS Amplify with a continuous deployment (CI/CD) pipeline connected to GitHub."
                ],
                "technologies": [
                    "React.js",
                    "React Router",
                    "Bootstrap 5",
                    "AWS Amplify",
                    "Git",
                    "CI/CD"
                ],
                "links": {
                    "demo": null,
                    "repo": "https://github.com/ChristieLiam/"
                }
            }
        ]
    });
});

router.get('/skills', (req, res) => {
    res.json({
        "skillCategories": [
            {
                "id": "programming-web-dev",
                "categoryName": "Programming & Web Development",
                "description": "Foundation from CS degree and projects",
                "skills": [
                    "Python",
                    "Java",
                    "JavaScript",
                    "SQL",
                    "HTML5",
                    "CSS",
                    "C",
                    "JSX",
                    "Object-Oriented Programming (OOP)",
                    "Full-Stack Development",
                    "Front-End Development",
                    "Server-Side Scripting"
                ]
            },
            {
                "id": "cybersecurity-net-sec",
                "categoryName": "Cybersecurity & Network Security",
                "description": "High-value category from cheat sheets",
                "skills": [
                    "Cybersecurity",
                    "Network Security",
                    "Cryptography",
                    "Information Security",
                    "Intrusion Detection and Prevention (IDS/IPS)",
                    "Firewalls",
                    "Vulnerability Assessment",
                    "Network Protocols",
                    "TCP/IP",
                    "SSH",
                    "TLS",
                    "VPN",
                    "SQL Injection",
                    "Malware Analysis",
                    "Social Engineering",
                    "Phishing Prevention"
                ]
            },
            {
                "id": "data-ai",
                "categoryName": "Data & AI",
                "description": "Covers AI project and Database course",
                "skills": [
                    "Data Analysis",
                    "Data Management",
                    "Database Systems",
                    "Artificial Intelligence (AI)",
                    "Machine Learning (ML)",
                    "SQL",
                    "Python"
                ]
            },
            {
                "id": "tools-methodologies",
                "categoryName": "Tools & Methodologies",
                "description": "Tools and processes used",
                "skills": [
                    "Git",
                    "Source Control",
                    "Agile Methodologies",
                    "Software Development Life Cycle (SDLC)",
                    "Nmap",
                    "Wireshark",
                    "Microsoft Office Suite (Excel, PowerPoint, Word)",
                    "Google Workspace",
                    "Windows OS",
                    "macOS"
                ]
            },
            {
                "id": "interpersonal-soft-skills",
                "categoryName": "Interpersonal & Soft Skills",
                "description": "Crucial skills built in other jobs",
                "skills": [
                    "Communication",
                    "Teamwork",
                    "Problem-Solving",
                    "Adaptability",
                    "Time Management",
                    "Attention to Detail",
                    "Self-Starter",
                    "Dependability"
                ]
            }
        ]
    })
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
