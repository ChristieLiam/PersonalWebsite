import React, {useEffect, useState} from 'react';
import {useTheme} from '../PageTheme';


function Skills() {
    const {theme} = useTheme();
    const [skills, setSkills] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch("https://exquisite-meerkat-2c2369.netlify.app/.netlify/functions/api/skills");

                if (!res.ok) {
                    throw new Error(`HTTP Error! Status: ${res.status}`);
                }

                const data = await res.json();

                setSkills(data.skillCategories || []);

            } catch (err) {
                console.error("Error fetching skills:", err);
            }
        };

        fetchSkills();
    }, []);

    const filteredSkills = skills.filter((skill) => {
        const lowerTerm = searchTerm.toLowerCase();

        const categoryName = skill.categoryName || "";
        const matchesCategory = categoryName.toLowerCase().includes(lowerTerm);

        const matchesSkillList = skill.skills?.some(s =>
            s.toLowerCase().includes(lowerTerm)
        );

        return matchesCategory || matchesSkillList;
    });



    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="card shadow-lg border-0 rounded-4 p-4 mb-4 bg-body-tertiary">
                    <h2 className="text-center mb-4 fw-bold">My Skills</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg border-0 shadow-sm"
                            placeholder="Search for a skill (e.g., React, Python)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="row g-4">
                        {filteredSkills ? (
                            filteredSkills.map((skill, index) => (
                                <div className="col-12">

                                    <div className="card h-100 border-0 shadow-sm rounded-3">
                                        <div className="card-body text-start">

                                            <h4 className="card-title fw-bold text-primary">
                                                {skill.categoryName}
                                            </h4>

                                            <p className="card-text text-muted small">
                                                {skill.description}
                                            </p>

                                            <div className="d-flex flex-wrap gap-2 mt-3">
                                                {skill.skills.map((skillName, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`badge bg-body-secondary text-${theme === `dark` ? ('light') : ('dark')} border  border-secondary-subtle rounded-pill px-3 py-2`}
                                                    >
                                                        {skillName}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className="text-center w-100">
                                <p className="mt-2">Loading skills...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Skills;
