import React, {useEffect, useState} from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("https://exquisite-meerkat-2c2369.netlify.app/.netlify/functions/api/projects");

                if (!res.ok) throw new Error(`Status: ${res.status}`);

                const data = await res.json();

                setProjects(data.projects);

            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mt-5 p-5 mb-4 bg-light-subtle secondary rounded-3 shadow-lg">
            <h1 className="display-4 fw-bold">My Projects</h1>
            <p className="lead">Here are some of the projects I've worked on.</p>
            <hr className="my-4" />

            <div className="row">
                {projects ? (
                    projects.map((project, index) => (
                        <div className="col-12 mb-4" key={project.id || index}>
                            <div className="card h-100 shadow-sm p-4">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h3 className="fw-bold">{project.title}</h3>
                                        <h6 className="text-muted">{project.role} | {project.context}</h6>
                                    </div>
                                </div>

                                <p className="mt-3">{project.summary}</p>

                                <h5>Key Contributions:</h5>
                                <ul>
                                    {project.keyContributions.map((point, i) => (
                                        <li>{point}</li>
                                    ))}
                                </ul>

                                <div className="mt-3">
                                    <strong>Technologies: </strong>
                                    {project.technologies.map((tech, i) => (
                                        <span className="badge bg-secondary me-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
            </div>
        </div>
    );
}

export default Projects;