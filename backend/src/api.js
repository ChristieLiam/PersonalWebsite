const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

router.get('/projects', (req, res) => {
    res.json({
        message: "My Projects"
    });
});

router.get('/skills', (req, res) => {
    res.json({
        "status": "success",
        "data": {
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
        },
        "meta": {
            "totalCategories": 5,
            "timestamp": "2025-11-21T23:11:04Z"
        }
    })
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
