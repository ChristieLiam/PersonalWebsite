import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const COURSES = [
    { code: 'CSCI 2691', name: 'Junior Developer',              desc: 'Team-based software project — built DEEBug AI tool' },
    { code: 'CSCI 2134', name: 'Software Development',          desc: 'Agile, SDLC, and team project management' },
    { code: 'CSCI 2141', name: 'Database Systems',              desc: 'SQL, schema design, and data integrity' },
    { code: 'CSCI 2170', name: 'Server-Side Scripting',         desc: 'Backend development with Python and server management' },
    { code: 'CSCI 2110', name: 'Data Structures & Algorithms',  desc: 'Optimization and efficient code design' },
];

function CourseCard({ course }) {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="reveal col-12 col-sm-6">
            <div className="glass-inner glass-hover rounded-3 p-3 h-100">
                <p className="mb-0" style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontFamily: 'monospace' }}>
                    {course.code}
                </p>
                <p className="fw-semibold mb-1 text-accent" style={{ fontSize: '0.85rem' }}>{course.name}</p>
                <p style={{ fontSize: '0.79rem', color: 'var(--text-2)', marginBottom: 0 }}>{course.desc}</p>
            </div>
        </div>
    );
}

function About() {
    const headerRef = useScrollReveal();
    const bioRef    = useScrollReveal();
    const expRef    = useScrollReveal();
    const educRef   = useScrollReveal();
    const dalRef    = useScrollReveal();
    const hsRef     = useScrollReveal();

    return (
        <div className="container page-container">
            <div className="glass rounded-4 p-4 p-lg-5">

                {/* Header */}
                <div ref={headerRef} className="reveal mb-4">
                    <div className="section-divider" />
                    <h1 className="fw-bold mb-0" style={{ color: 'var(--text-1)' }}>About Me</h1>
                </div>

                {/* Bio */}
                <div ref={bioRef} className="reveal mb-5">
                    <p className="lead mb-0" style={{ lineHeight: '1.85', color: 'var(--text-2)' }}>
                        Computer Science student with a passion for engineering complex, interconnected systems.
                        I excel at bridging the gap between technical constraints and user experience to build
                        software that is{' '}
                        <strong style={{ color: 'var(--text-1)' }}>rigorous, secure, and reliable</strong> — with
                        a proven track record of delivering production-grade infrastructure that solves
                        real-world engineering challenges.
                    </p>
                </div>

                <hr style={{ borderColor: 'var(--glass-border)', marginBottom: '2.5rem' }} />

                {/* Professional Experience */}
                <div ref={expRef} className="reveal mb-4">
                    <p className="eyebrow mb-1">Work History</p>
                    <h2 className="fw-bold mb-4" style={{ color: 'var(--text-1)' }}>Professional Experience</h2>

                    <div className="glass-inner rounded-3 p-4">
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                            <div>
                                <h4 className="fw-bold mb-1" style={{ color: 'var(--text-1)' }}>
                                    R&D Research Associate
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.15rem', fontWeight: 600 }}>
                                    LED Roadway Lighting
                                </p>
                                <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginBottom: 0 }}>
                                    Halifax, NS
                                </p>
                            </div>
                            <span className="skill-tag">Current</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '0.85rem', fontStyle: 'italic' }}>
                            Developing full-stack software solutions and deploying edge-AI technology for smart city infrastructure.
                        </p>
                        <ul style={{ paddingLeft: '1.1rem', marginBottom: 0 }}>
                            {[
                                'Engineered a full-stack lighting simulation platform using Python (Flask) and vanilla JavaScript, integrating the Radiance engine for complex raytracing and light calculations.',
                                'Deployed AI-driven computer vision models onto smart camera hardware for real-time intrusion detection and roadway statistical analysis.',
                                'Processed live data streams to validate deep learning model performance using Python and Microsoft Excel for rigorous QA.',
                                'Designed and maintained REST APIs bridging heavy computational backend scripts and frontend interfaces.',
                            ].map((point, i) => (
                                <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginBottom: '0.35rem' }}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr style={{ borderColor: 'var(--glass-border)', marginBottom: '2.5rem', marginTop: '2.5rem' }} />

                {/* Education heading */}
                <div ref={educRef} className="reveal mb-4">
                    <p className="eyebrow mb-1">Background</p>
                    <h2 className="fw-bold" style={{ color: 'var(--text-1)' }}>Education</h2>
                </div>

                {/* Timeline */}
                <div className="timeline">

                    {/* Dalhousie */}
                    <div ref={dalRef} className="reveal timeline-item">
                        <div className="timeline-dot" />
                        <div className="glass-inner rounded-3 p-4">
                            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                                <div>
                                    <h4 className="fw-bold mb-1" style={{ color: 'var(--text-1)' }}>
                                        Bachelor of Applied Computer Science
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginBottom: 0 }}>
                                        Dalhousie University — Halifax, NS
                                    </p>
                                </div>
                                <span className="skill-tag">2023 – Dec 2027</span>
                            </div>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginBottom: '1rem' }}>
                                Relevant coursework:
                            </p>
                            <div className="row g-2">
                                {COURSES.map(c => <CourseCard key={c.code} course={c} />)}
                            </div>
                        </div>
                    </div>

                    {/* High School */}
                    <div ref={hsRef} className="reveal timeline-item">
                        <div className="timeline-dot" />
                        <div className="glass-inner rounded-3 p-4">
                            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                                <div>
                                    <h4 className="fw-bold mb-1" style={{ color: 'var(--text-1)' }}>
                                        High School Diploma
                                    </h4>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', marginBottom: 0 }}>
                                        Newmarket High School — Newmarket, ON
                                    </p>
                                </div>
                                <span className="skill-tag">2018 – 2022</span>
                            </div>
                            <ul className="mt-3 mb-0" style={{ paddingLeft: '1.2rem' }}>
                                <li style={{ fontSize: '0.88rem', color: 'var(--text-2)' }}>
                                    Grade 12 Graduate &amp; Honours Student
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
