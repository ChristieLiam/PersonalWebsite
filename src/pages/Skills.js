import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BORDERS = [
    'skill-card-border-1', 'skill-card-border-2', 'skill-card-border-3',
    'skill-card-border-4', 'skill-card-border-5', 'skill-card-border-6',
];

function SkillCard({ skill, index }) {
    const ref = useScrollReveal();

    return (
        <div ref={ref} className="reveal col-12 col-md-6" style={{ transitionDelay: `${(index % 4) * 0.07}s` }}>
            <div className={`glass-inner glass-hover rounded-3 h-100 ${BORDERS[index % BORDERS.length]}`}>
                <div className="p-4">
                    <h5 className="fw-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-1)' }}>
                        {skill.categoryName}
                    </h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginBottom: '0.85rem' }}>
                        {skill.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                        {skill.skills.map(name => (
                            <span key={name} className="skill-tag">{name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    const [skills, setSkills]         = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const headerRef                   = useScrollReveal();

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch(
                    'https://exquisite-meerkat-2c2369.netlify.app/.netlify/functions/api/skills'
                );
                if (!res.ok) throw new Error(`Status: ${res.status}`);
                const data = await res.json();
                setSkills(data.skillCategories || []);
            } catch (err) {
                console.error('Error fetching skills:', err);
            }
        };
        fetchSkills();
    }, []);

    const filtered = skills.filter(skill => {
        const term = searchTerm.toLowerCase();
        return (
            (skill.categoryName || '').toLowerCase().includes(term) ||
            skill.skills?.some(s => s.toLowerCase().includes(term))
        );
    });

    return (
        <div className="container page-container">
            <div className="glass rounded-4 p-4 p-lg-5">

                <div ref={headerRef} className="reveal mb-4">
                    <div className="section-divider" />
                    <h1 className="fw-bold mb-2" style={{ color: 'var(--text-1)' }}>My Skills</h1>
                    <p style={{ color: 'var(--text-2)', marginBottom: 0 }}>Technologies and tools I work with.</p>
                </div>

                <div className="mb-5">
                    <input
                        type="text"
                        className="form-control form-control-lg glass-input"
                        placeholder="Search skills (e.g. React, Python, SQL…)"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                {skills.length === 0 ? (
                    <p style={{ color: 'var(--text-3)' }}>Loading skills…</p>
                ) : filtered.length === 0 ? (
                    <p style={{ color: 'var(--text-3)' }}>No skills matched "{searchTerm}".</p>
                ) : (
                    <div className="row g-4">
                        {filtered.map((skill, index) => (
                            <SkillCard key={skill.categoryName || index} skill={skill} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
