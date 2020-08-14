import React from "react";

const About = () => {
    return (
        <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">About Me</span>
                                        <h2 className="colorlib-heading">Who Am I?</h2>
                                        <p>I am a computer graduate student from Heritage Institute of
                                            technology,Kolkata with CSE as my major.
                                            I am currently pursuing my MTech under the WILP programme of BITS Pilani
                                            while working
                                            full time in SAP Labs India under their Scholar@SAP Programme
                                        </p>
                                        <p> I love exploring new tech and am always interested in learning about new
                                            developments in the ICT domain.
                                            I also love playing games and if I am not coding, you will often find me
                                            playing some game.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-5 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">Here are some of my expertise</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-bulb"/>
                                </span>
                                <div className="desc">
                                    <h3>API and WebApp Development </h3>
                                    <p>I have experience in building REST APIs using Python and NodeJS with frontend
                                        developed in React and VueJS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                                <span className="icon">
                                    <i className="icon-phone3"/>
                                </span>
                                <div className="desc">
                                    <h3>Data Structures & Algorithms</h3>
                                    <p>As coming from the CS background, I have good grasp over fundamental concepts of
                                        DSA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-bell"/>
                                </span>
                                <div className="desc">
                                    <h3>Security Testing</h3>
                                    <p>I have had experience in working for an API security team and have moderate
                                        experience in pentesting various services and APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};

export default About;