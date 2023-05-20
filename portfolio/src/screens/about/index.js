import React from "react";

const About = () => {
  return (
    <div>
      <div className="KW_progressContainer">
        <div className="KW_progressBar" />
      </div>
      <div className="page">
        <nav id="colorlib-main-nav" role="navigation">
          <a
            href="#"
            className="js-colorlib-nav-toggle colorlib-nav-toggle active"
          >
            <i />
          </a>
          <div className="js-fullheight colorlib-table">
            <div
              className="img"
              style={{ backgroundImage: "url(images/Asim.jpeg)" }}
            />
            <div className="colorlib-table-cell js-fullheight">
              <div className="row no-gutters">
                <div className="col-md-12 text-center">
                  <h1 className="mb-4">
                    <a href="/" className="logo">
                      Asim Mehmood
                    </a>
                  </h1>
                  <ul>
                    <li>
                      <a href={process.env.REACT_APP_API_URL}>
                        <span>
                          <small>01</small>Home
                        </span>
                      </a>
                    </li>
                    <li className="active">
                      <a href={process.env.REACT_APP_API_URL+'about'}>
                        <span>
                          <small>02</small>Resume
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={process.env.REACT_APP_API_URL+'services'}>
                        <span>
                          <small>03</small>Services
                        </span>
                      </a>
                    </li>
                    {/* <li><a href="portfolio.html"><span><small>04</small>Portfolio</span></a></li>
                <li><a href="blog.html"><span><small>05</small>Blog</span></a></li> */}
                    <li>
                      <a href={process.env.REACT_APP_API_URL+'contact'}>
                        <span>
                          <small>06</small>Contact
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="colorlib-page">
          <header>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="colorlib-navbar-brand">
                    <a className="colorlib-logo" href="/">
                      <span
                        className="logo-img"
                        style={{ backgroundImage: "url(images/Asim.jpeg)" }}
                      />
                      Asim Mehmood
                    </a>
                  </div>
                  <a
                    href="#"
                    className="js-colorlib-nav-toggle colorlib-nav-toggle"
                  >
                    <i />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex my-5" data-scrollax-parent="true">
                <div
                  className="col-md-4 author-img"
                  style={{ backgroundImage: "url(images/Asim.jpeg)" }}
                  data-scrollax=" properties: { translateY: '-70%'}"
                />
                <div className="col-md-2" />
                <div className="col-md-6 wrap ftco-animate">
                  <div className="about-desc">
                    <h1 className="bold-text">About</h1>
                    <div className="p-5">
                      <h2 className="mb-5">Hi! I'm Asim Mehmood</h2>
                      <p>
                        I have completed my graduation (BSCS) from the Lahore
                        Garrison University. Apart from during previous
                        experience, I have developed efficiently many projects
                        mentioned below. Besides these, I want to mention I have
                        very well experience with React Native, firebase, React
                        Js, JavaScript, PHP. I am language independent and can
                        switch the technology very quicky.
                      </p>
                      {/* <p><a href="#">Checkout my resume</a></p> */}
                      <ul className="ftco-footer-social list-unstyled mt-4">
                        <li>
                          <a href="#">
                            <span className="icon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-instagram" />
                          </a>
                        </li>
                      </ul>
                      <h5>Contact me here!</h5>
                      <p>
                        Email: <a href="#">mohammadasimmehmood@gmail.com</a>
                      </p>
                      <p>
                        Phone: <a href="#">(+92)-323-72 25 238</a>
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="#">Checkout my resume</a>
                </p>
              </div>
              <div className="row d-flex justify-content-end mt-5">
                <div className="col-md-10">
                  <div className="profile ftco-animate">
                    <h2 className="mb-4">Profile</h2>
                    <h4 className="mb-4">
                      I'm a Frontend Developer from Lahore, Pakistan. I aim to
                      make a difference through my creative solution.
                    </h4>
                    {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
                    <div className="row my-5">
                      <div className="col-md-6">
                        <p>
                          <strong>Name:</strong> <span>Asim Mehmood</span>
                        </p>
                        <p>
                          <strong>Address:</strong> <span>Lahore</span>
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          <span>(+92)-323-72 25 238</span>
                        </p>
                      </div>
                      {/* <div class="col-md-6">
		          			<p><strong>Name:</strong> <span>Asim Mehmood</span></p>
		          			<p><strong>Address:</strong> <span>88 West 21th Street, Suite 721 New York NY 10016</span></p>
		          			<p><strong>Phone:</strong> <span>(123)-456-789</span></p>
		          		</div> */}
                    </div>
                  </div>
                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4">Experience</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          React Developer <span> - Coding Pixel</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2022 - 2023</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          React Developer <span> - Luminogics</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2020 - 2021</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          React Developer <span> - W Group</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2019 - 2020</p>
                      </div>
                    </div>
                    {/* <div class="exp-wrap py-4">
          				<div class="desc">
	          				<h4>Front-End Developer <span> - Big Comany</span> </h4>
	          				<p class="location">Germany - Berlin</p>
          				</div>
          				<div class="year">
          					<p>2012 - 2014</p>
          				</div>
          			</div> */}
                  </div>
                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4">Education</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          Graphic Designing Certification
                          <span> - DigiSkills by Virtual University</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2019</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          Wordpress Certification
                          <span>- DigiSkills by Virtual University</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2019</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          SEO Certification
                          <span>- DigiSkills by Virtual University</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2019</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          E Rozgaar Tech Certification
                          <span>- Punjab University</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>Nov - Feb</p>
                        <p>2018 - 2019</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          Bachelor of Science in Computer Science
                          <span>- Lahore Garrison University</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2014 - 2018</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          Intermediate in Computer Science
                          <span>- Punjab Group of Colleges</span>
                        </h4>
                        <p className="location">Lahore - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2012 - 2014</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>
                          Matriculation
                          <span> - Punjab Group of Colleges</span>
                        </h4>
                        <p className="location">Kasur - Pakistan</p>
                      </div>
                      <div className="year">
                        <p>2010 - 2012</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 flex-column ftco-animate">
                <div className="col-md-8">
                  <h2 className="mb-4">My Skills</h2>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>React Native</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      >
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>Firebase</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>React Js</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "85%" }}
                      >
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>JavaScript</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>Bootstrap</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>HTML5</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>CSS3</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="progress-wrap">
                    <h4>SEO</h4>
                    <div className="progress">
                      <div
                        className="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "70%" }}
                      >
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
              <div className="row mb-5 justify-content-center">
                <div className="col-md-5 text-center">
                  <div className="ftco-footer-widget mb-5">
                    <ul className="ftco-footer-social list-unstyled">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook" />
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ftco-footer-widget">
                    <h2 className="mb-3">Contact Us</h2>
                    <p className="email">
                      <a href="#">mohammadasimmehmood@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </footer>
          {/* loader */}
          <div id="ftco-loader" className="show fullscreen">
            <svg className="circular" width="48px" height="48px">
              <circle
                className="path-bg"
                cx={24}
                cy={24}
                r={22}
                fill="none"
                strokeWidth={4}
                stroke="#eeeeee"
              />
              <circle
                className="path"
                cx={24}
                cy={24}
                r={22}
                fill="none"
                strokeWidth={4}
                strokeMiterlimit={10}
                stroke="#F96D00"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
