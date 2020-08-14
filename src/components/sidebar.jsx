import React from "react";

const Sidebar = () => {
  return(
      <div>
          <div>
              <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
              <aside id="colorlib-aside" className="border js-fullheight">
                  <div className="text-center">
                      <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                      <h1 id="colorlib-logo"><a href="index.html">Archisman Rakshit</a></h1>
                      <span className="email"><i className="icon-mail"></i> archisman1997@gmail.com</span>
                  </div>
                  <nav id="colorlib-main-menu" role="navigation" className="navbar">
                      <div id="navbar" className="collapse">
                          <ul>
                              <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                              <li><a href="#about" data-nav-section="about">About</a></li>
                              <li><a href="#workexp" data-nav-section="work-experience">Work Experience</a></li>
                              <li><a href="#projects" data-nav-section="projects">Personal Projects</a></li>
                          </ul>
                      </div>
                  </nav>
                  <nav id="colorlib-main-menu">
                      <ul>
                          <li><a href="https://www.instagram.com/archisman.rakshit/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                          <li><a href="https://www.linkedin.com/in/archismanrakshit/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                          <li><a href="https://github.com/archisman-rakshit" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                      </ul>
                  </nav>
              </aside>
          </div>
      </div>
  )
};

export default Sidebar;