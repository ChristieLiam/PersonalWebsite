import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/me.jpg';

function Home() {
    const [weather, setWeather] = useState(null);
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=${API_KEY}`
                );
                if (!res.ok) throw new Error(`Status: ${res.status}`);
                const data = await res.json();
                setWeather(data);
            } catch (err) {
                console.error('Weather fetch failed:', err);
            }
        };
        fetchWeather();
    }, [API_KEY]);

    return (
        <div className="container page-container">
            <div className="glass hero-section rounded-4 p-4 p-sm-5">
                <div className="row align-items-center gy-5 w-100 m-0">

                    {/* ── Left col ───────────────────────── */}
                    <div className="col-lg-7 ps-lg-3">

                        {/* Status chip */}
                        <div className="mb-4 anim-1">
                            <span className="hero-status">Available for Internships Summer 2027</span>
                        </div>

                        {/* Heading */}
                        <div className="mb-4 anim-2">
                            <p className="hero-intro mb-1">Hi, I'm</p>
                            <span className="hero-name gradient-text">Liam Christie.</span>
                        </div>

                        {/* Bio */}
                        <p className="hero-body mb-5 anim-3">
                            CS student at <strong style={{ color: 'var(--text-1)' }}>Dalhousie University</strong>{' '}
                            with a passion for engineering complex systems — from full-stack web apps
                            to edge-AI smart city infrastructure. I build software that is{' '}
                            <strong style={{ color: 'var(--text-1)' }}>rigorous, secure, and reliable</strong>.
                        </p>

                        {/* CTAs */}
                        <div className="d-flex flex-wrap gap-3 mb-4 anim-4">
                            <Link to="/projects" className="btn btn-accent btn-lg px-4 rounded-pill">
                                View My Work →
                            </Link>
                            <Link to="/contact" className="btn btn-outline-accent btn-lg px-4 rounded-pill">
                                Get In Touch
                            </Link>
                        </div>

                        {/* Weather */}
                        <div className="anim-5">
                            {weather ? (
                                <span className="weather-badge">
                                    <span>📍 {weather.name}, NS</span>
                                    <span style={{ opacity: 0.3 }}>·</span>
                                    <span>{Math.round(weather.main.temp - 273.15)}°C</span>
                                    <span style={{ opacity: 0.3 }}>·</span>
                                    <span className="text-capitalize">{weather.weather[0].description}</span>
                                    <span style={{ opacity: 0.3 }}>·</span>
                                    <span>{weather.main.humidity}% humidity</span>
                                </span>
                            ) : (
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>
                                    Loading weather…
                                </span>
                            )}
                        </div>
                    </div>

                    {/* ── Right col ──────────────────────── */}
                    <div className="col-lg-5 text-center anim-3">
                        <div className="hero-img-wrap">
                            <img src={profileImage} alt="Liam Christie" className="hero-img" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
