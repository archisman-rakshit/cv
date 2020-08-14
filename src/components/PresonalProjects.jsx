import React from "react";

const Personal = () => {
    return (
        <div>
            <section className="colorlib-experience" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading animate-box">Personal Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Visually representing Graph Algorithms</h2>
                                            <p>Under grad project to develop an application which visualizes the various
                                                graph algorithms in BTech curriculum in an interactive way so that
                                                teachers and students alike can use it to understand the flow of the
                                                algorithm in a stepwise manner</p>
                                            <p>Github Link: <a
                                                href='https://github.com/archisman-rakshit/visual_algorithms'
                                                target="_blank" rel="noopener noreferrer">Visual Algorithms </a></p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Weather App in ReactJS</h2>
                                            <p>Developed a webapp in ReactJS to display the current and forecasted
                                                weather information of any city in the world using OpenWeather API to
                                                fetch the data</p>
                                            <p>Github Link: <a
                                                href='https://github.com/archisman-rakshit/weather-react'
                                                target="_blank" rel="noopener noreferrer">Weather App </a></p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>REST API for a shop handling products and orders</h2>
                                            <p>Developed a REST API in NodeJS to create the backend logic and data model
                                                of a shop dealing
                                                with several products and orders from customers. The data is stored in a
                                                MongoDB Atlas database and is fetched over the network whenever a data
                                                operation call is made</p>
                                            <p>Github Link: <a
                                                href='https://github.com/archisman-rakshit/node-rest-shop'
                                                target="_blank" rel="noopener noreferrer">Shop Backend </a></p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Personal;