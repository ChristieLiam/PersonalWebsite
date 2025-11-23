import React from "react";
import { useTheme } from '../PageTheme';

import linkedinLogo from "../assets/LinkedIn-logo/LI-In-Bug.png";
import githubLight from "../assets/GitHub-logo/github-mark.svg";
import githubDark from "../assets/GitHub-logo/github-mark-white.svg";

function ContactMe() {
    const { theme } = useTheme();
    const githubLogo = theme === 'light' ? githubLight : githubDark;

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">

                    <div className="card shadow-lg border-0 rounded-4 text-center p-5 bg-body-tertiary">

                        <h2 className="fw-bold mb-3">Let's Connect!</h2>
                        <p className="text-muted mb-5">
                            I'm currently open to new opportunities and collaborations.
                            Feel free to reach out via LinkedIn or check out my code on GitHub.
                        </p>

                        {/* Icon Container */}
                        <div className="d-flex justify-content-center gap-4 align-items-center">

                            <a href="https://www.linkedin.com/in/liam-christie-8873b62a8/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} className="social-logo" alt="LinkedIn" title="Connect on LinkedIn" />
                            </a>

                            <a href="https://github.com/ChristieLiam" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} className="social-logo" alt="GitHub" title="View GitHub Profile" />
                            </a>

                        </div>

                        {/* Optional Email Text */}
                        <div className="mt-5">
                            <p className="small text-muted mb-0">Prefer email?</p>
                            <a href="mailto:lm577319@dal.ca" className="text-decoration-none fw-semibold">
                                lm577319@dal.ca
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;