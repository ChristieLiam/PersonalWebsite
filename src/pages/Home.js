import React, {useEffect, useState} from 'react';
import profileImage from '../assets/images/me.jpg';

//TODO Make Webpage rescale to fit on any screen
//TODO Make New Unit Tests


function Home() {
    const [weather, setWeather] = useState(null);

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=${API_KEY}`);

                if (!res.ok) {
                    throw new Error(`Weather API Error! Status: ${res.status}`);
                }

                const data = await res.json();
                setWeather(data);

            } catch (err) {
                console.error("Weather fetch failed:", err);
                setWeather(null);
            }
        };

        fetchWeather();
    }, [API_KEY]);

    return (
        <div className="container mt-5">
            <div className="p-5 mb-4 bg-light-subtle secondary rounded-3 shadow-lg">
                <div className="container-fluid py-5">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-4 fw-bold">Welcome To My Website!</h1>
                            <p className="fs-4">
                                Welcome to my project for CSCI 3172 (Web-Centric Computing).
                                This is a multi-page portfolio built from scratch using React,
                                React Router, and Bootstrap 5. The frontend is deployed on
                                <strong> AWS Amplify</strong>, while the backend utilizes
                                <strong> Netlify Functions</strong> for serverless API integration.
                            </p>
                            <hr className="my-4"/>
                            <p>Explore the site to see my projects or learn more about my skills.</p>

                            {weather ? (
                                <div className="alert alert-info d-inline-block">
                                    <strong>Current Weather in {weather.name}:</strong><br/>
                                    <span>Temp: {Math.round(weather.main.temp - 273.15)}°C</span>
                                    <span className="mx-2">|</span>
                                    <span>Humidity: {weather.main.humidity}%</span>
                                    <span className="mx-2">|</span>
                                    <span className="text-capitalize">{weather.weather[0].description}</span>
                                </div>
                            ) : (
                                <p className="text-muted">Loading weather data...</p>
                            )}

                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src={profileImage}
                                alt="Liam Catching Baseball"
                                className="img-fluid shadow-lg rounded-2"
                                style={{maxWidth: '300px', height: 'auto'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;