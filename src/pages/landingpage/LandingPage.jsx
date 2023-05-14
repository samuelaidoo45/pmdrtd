

import "./landingpage.css";
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <body className="landingPageBody">
            
            <header className="landingPageHeader">
                <div className="header-left">
                    <h1>PomodoroPal</h1>
                    <p>Boost Your Productivity</p>
                </div>
                <nav className="header-right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        {/* <li><a href="http://127.0.0.1:3000/home">Login</a></li> */}
                        <Link to="/login">Login</Link>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <h1>Boost Your Productivity with PomodoroPal</h1>
                <p>A simple yet powerful productivity tool that helps you stay focused and get things done more efficiently.</p>
                <a href="#" class="cta-button">Get Started</a>
            </section>
            <main>

                <section className="features">
                    <div className="feature">
                        <svg viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="17.5" stroke="#ccc" stroke-width="1.5" fill="none" />
                            <path id="timer-path" stroke="#FF6978" stroke-width="1.5" fill="none" d="M20 2.5 A 17.5 17.5 0 1 1 34.33 11.59" />
                            <text x="20" y="22.5" font-size="8" text-anchor="middle" fill="#fff">00:00</text>
                        </svg>



                        <h2>Customizable Timers</h2>
                        <p>Set your own work and break intervals to match your workflow and get the most out of each session.</p>
                    </div>
                    <div className="feature">
                        <svg viewBox="0 0 100 100">
                            <rect x="10" y="30" width="80" height="25" fill="#222533" />
                            <rect x="10" y="30" width="50" height="25" fill="#1B1E2D" />
                            <text x="50" y="50" font-size="20" text-anchor="middle" fill="#fff">50%</text>
                        </svg>

                        <h2>Track Your Progress</h2>
                        <p>See how much time you've spent working and taking breaks, and adjust your routine for optimal productivity.</p>
                    </div>
                    <div className="feature">
                        <svg viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="button-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#1B1E2D" />
                                    <stop offset="100%" stop-color="#1B1E2D" />
                                </linearGradient>
                            </defs>
                            <rect x="0" y="0" width="80" height="30" rx="15" fill="url(#button-gradient)" />
                            <text x="40" y="18" font-size="12" text-anchor="middle" fill="#fff">Click Me</text>
                        </svg>



                        <h2>Intuitive Interface</h2>
                        <p>Our user-friendly interface is designed to help you stay focused and avoid distractions while you work.</p>
                    </div>
                </section>
                <section className="">

                    <h2 className="testimonial-header">What Our Users Are Saying</h2>

                    <div className="testimonials">
                        <div className="testimonial">
                            {/* <img src="https://th.bing.com/th/id/OIP.aPrAXebVFheO1nA-8qU47gHaJA?w=200&h=243&c=7&r=0&o=5&pid=1.7" alt="User Avatar"> */}
                            <blockquote>
                                <p>"I used to struggle with procrastination, but since I started using Pomodoro Timer, I've been able to stay on track and get things done more efficiently."</p>
                                <cite>John Doe</cite>
                            </blockquote>
                        </div>
                        <div className="testimonial">
                            {/* <img src="https://th.bing.com/th/id/OIP.qeffvHdSUkQYLj5YDjZRfwHaJl?w=200&h=259&c=7&r=0&o=5&pid=1.7" alt="User Avatar"> */}
                            <blockquote>
                                <p>"This app is a game-changer! I love how customizable it is, and how it helps me stay focused and productive throughout the day."</p>
                                <cite>Jane Smith</cite>
                            </blockquote>
                        </div>
                    </div>

                </section>
                <section className="cta">
                    <h2>Ready to Boost Your Productivity?</h2>
                    <p>Start using PomodoroPal today and start getting things done!</p>
                    <a href="#" class="cta-button">Get Started</a>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 PomodoroPal</p>
            </footer>
        </body>
    )

}

export default LandingPage;
