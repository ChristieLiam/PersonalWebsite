import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProjectCard({ project, index }) {
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 0.07}s` }}>
            <div className="glass-inner glass-hover project-card rounded-3 p-4">

                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                    <div>
                        <h3 className="fw-bold mb-1" style={{ fontSize: '1.12rem', color: 'var(--text-1)' }}>
                            {project.title}
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginBottom: 0 }}>
                            {project.role} · {project.context}
                        </p>
                    </div>
                </div>

                <p className="mt-3 mb-3" style={{ color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: '1.72' }}>
                    {project.summary}
                </p>

                <p className="eyebrow mb-2" style={{ fontSize: '0.68rem' }}>Key Contributions</p>
                <ul className="contrib-list mb-4">
                    {project.keyContributions.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>

                <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="skill-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SectionHeading({ eyebrow, title }) {
    const ref = useScrollReveal();
    return (
        <div ref={ref} className="reveal mb-4">
            <p className="eyebrow mb-1">{eyebrow}</p>
            <h2 className="fw-bold" style={{ color: 'var(--text-1)' }}>{title}</h2>
        </div>
    );
}

function Projects() {
    const [projects, setProjects] = useState([]);
    const headerRef = useScrollReveal();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(
                    'https://exquisite-meerkat-2c2369.netlify.app/.netlify/functions/api/projects'
                );
                if (!res.ok) throw new Error(`Status: ${res.status}`);
                const data = await res.json();
                setProjects(data.projects);
            } catch (err) {
                console.error('Fetch error:', err);
            }
        };
        fetchProjects();
    }, []);

    const professional = projects.filter(p => p.category === 'professional');
    const projectWork  = projects.filter(p => p.category !== 'professional');

    return (
        <div className="container page-container">
            <div className="glass rounded-4 p-4 p-lg-5">

                <div ref={headerRef} className="reveal mb-5">
                    <div className="section-divider" />
                    <h1 className="fw-bold mb-2" style={{ color: 'var(--text-1)' }}>My Work</h1>
                    <p style={{ color: 'var(--text-2)', marginBottom: 0 }}>
                        Professional experience and personal projects.
                    </p>
                </div>

                {projects.length === 0 ? (
                    <p style={{ color: 'var(--text-3)' }}>Loading…</p>
                ) : (
                    <>
                        {/* Professional Experience */}
                        {professional.length > 0 && (
                            <div className="mb-5">
                                <SectionHeading eyebrow="Work History" title="Professional Experience" />
                                <div className="d-flex flex-column gap-4">
                                    {professional.map((p, i) => (
                                        <ProjectCard key={p.id} project={p} index={i} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Divider */}
                        {professional.length > 0 && projectWork.length > 0 && (
                            <hr style={{ borderColor: 'var(--glass-border)', margin: '2.5rem 0' }} />
                        )}

                        {/* Project Work */}
                        {projectWork.length > 0 && (
                            <div>
                                <SectionHeading eyebrow="Portfolio" title="Project Work" />
                                <div className="d-flex flex-column gap-4">
                                    {projectWork.map((p, i) => (
                                        <ProjectCard key={p.id} project={p} index={i} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Projects;
