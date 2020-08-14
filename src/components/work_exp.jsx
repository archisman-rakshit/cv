import React from "react";

const Work = () => {
    return (
        <div>
            <section className="colorlib-experience" data-section="work-experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">highlights</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
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
                                            <h2>Scholar@SAP 2nd Practical Phase <span>May 2020-present</span></h2>
                                            <p>In my second practical phase of the Scholar@SAP programme,I am mainly
                                                working as an API developer to
                                                create an API that automates most of the manual testing undertaken
                                                to check for vulnerabilities in SAP Machine Learning Foundation APIs.
                                                The API is being developed in Python FastAPI and has an optional UI
                                                component which has been developed in VueJS. I also do some pentesting
                                                for certain services as part of my security tester role in this
                                                team.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-3">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>VT Attendance App @ SAP Labs <span>December 2019-present</span></h2>
                                            <p>Under the optional technical project of the VT Scholar program, I am
                                                working closely with the Vocational Training team of SAP Labs India to
                                                add functionalities to their existing Attendance app for tracking the
                                                attendance app of scholars during their BITS classes on weekends. The
                                                work mostly consisted of developing automation under the SAP XSJS
                                                services. Currently I am working on planning a migration of the backend
                                                code from SAP XSJS to NodeJS.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-4">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Scholar@SAP 1st Practical Phase <span>August 2019-April 2020</span></h2>
                                            <p>In my first practical phase of the Scholar@SAP program,I mainly worked as
                                                an ABAP backend developer to create APIs and ABAP reports for the
                                                Enterprise Search team of S/4HANA Cloud Foundation. I also used to write
                                                unit tests for ABAP code and worked as a QA tester for certain
                                                functionalities.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-5">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Summer Trainee at Ardent Computech Pvt. Ltd, Kolkata <span>July 2018-August 2018</span>
                                            </h2>
                                            <p>As a summer trainee I worked as a Frontend Developer using HTML,CSS and
                                                ReactJS to develop the UI for a website where users can come to look up or
                                                give their reviews on Indian Regional Films. </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-6">
                                            <i className="icon-pen2"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2>Research Intern at Indian Institute of Technology, Kharagpur <span>June 2017-August 2017</span>
                                            </h2>
                                            <p>Worked as a research intern in the Maths department of IIT Kharagpur
                                                under Dr. Sourav Mukhopadhyay to determine whether the time complexity
                                                of large cryptographic systems can be improved by using the AKS method
                                                of prime testing of number having more than 100 digits.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry begin animate-box"
                                         data-animate-effect="fadeInBottom">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-none">
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

export default Work;