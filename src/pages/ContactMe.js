import React from 'react';
import { useTheme } from '../PageTheme';
import { useScrollReveal } from '../hooks/useScrollReveal';

import linkedinLogo from '../assets/LinkedIn-logo/LI-In-Bug.png';
import githubLight  from '../assets/GitHub-logo/github-mark.svg';
import githubDark   from '../assets/GitHub-logo/github-mark-white.svg';

function ContactMe() {
    const { theme } = useTheme();
    const githubLogo = theme === 'light' ? githubLight : githubDark;
    const ref = useScrollReveal();

    return (
        <div className="container page-container">
            <div className="row justify-content-center">
                <div className="col-md-9 col-lg-7">
                    <div ref={ref} className="reveal">
                        <div className="glass rounded-4 text-center overflow-hidden">

                            {/* gradient top bar */}
                            <div className="contact-top-bar" />

                            <div className="p-5">
                                <div className="section-divider mx-auto mb-3" />
                                <h2 className="fw-bold mb-2" style={{ color: 'var(--text-1)' }}>Let's Connect</h2>
                                <p className="mb-5 mx-auto" style={{ color: 'var(--text-2)', maxWidth: '380px' }}>
                                    Open to new opportunities and collaborations. Reach out via LinkedIn,
                                    explore my code on GitHub, or just send an email.
                                </p>

                                <div className="d-flex justify-content-center gap-5 align-items-center mb-5">
                                    <div className="d-flex flex-column align-items-center gap-2">
                                        <a
                                            href="https://www.linkedin.com/in/liam-christie-8873b62a8/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Connect on LinkedIn"
                                        >
                                            <img src={linkedinLogo} className="social-logo" alt="LinkedIn" />
                                        </a>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>LinkedIn</span>
                                    </div>

                                    <div className="d-flex flex-column align-items-center gap-2">
                                        <a
                                            href="https://github.com/ChristieLiam"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="View GitHub Profile"
                                        >
                                            <img src={githubLogo} className="social-logo" alt="GitHub" />
                                        </a>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>GitHub</span>
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginBottom: '0.3rem' }}>
                                        Prefer email?
                                    </p>
                                    <a
                                        href="mailto:liam_christie@outlook.com"
                                        className="text-decoration-none fw-semibold text-accent"
                                        style={{ fontSize: '0.98rem' }}
                                    >
                                        liam_christie@outlook.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
