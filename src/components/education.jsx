import React from "react";

const Education = () => {
    return (
        <div>
            <section className="colorlib-about" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-5 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <h2 className="colorlib-heading">Here are my educational qualifications</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-book"/>
                                </span>
                                <div className="desc">
                                    <h3>MTech in Software Engineering (2019-2021) </h3>
                                    <p>I am currently pursuing my Masters in Software Engineering from BITS Pilani under
                                        their WILP Programme</p>
                                    <p className="timeline-label">CGPA: 9.06</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                                <span className="icon">
                                    <i className="icon-book2"/>
                                </span>
                                <div className="desc">
                                    <h3>BTech in Computer Science (2015-2019) </h3>
                                    <p>Completed my under grad from Heritage Institute of Technology majoring in Computer Science and Engineering</p>
                                    <p className="timeline-label">DGPA: 8.94</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-book"/>
                                </span>
                                <div className="desc">
                                    <h3>ISC (Class 12 Boards) (2013-2015) </h3>
                                    <p>Gave my board exams under the CISCE board having PCM as major subjects</p>
                                    <p className="timeline-label">Percentage: 97.5%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;