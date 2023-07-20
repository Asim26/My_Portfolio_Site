import React from "react";

const Home = () => {
  return (
    <div style={{}}>
      <div className="KW_progressContainer">
        <div className="KW_progressBar"></div>
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
                    {/* <li className="active">
                      <a href={process.env.REACT_APP_API_URL}>
                        <span>
                          <small>01</small>Home
                        </span>
                      </a>
                    </li> */}
                    {/* <li>
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
                    </li> */}
                    {/* <li><a href="portfolio.html"><span><small>04</small>Portfolio</span></a></li>
                <li><a href="blog.html"><span><small>05</small>Blog</span></a></li> */}
                    {/* <li>
                      <a href={process.env.REACT_APP_API_URL+'contact'}>
                        <span>
                          <small>06</small>Contact
                        </span>
                      </a>
                    </li> */}
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
          <section className="home-slider owl-carousel js-fullheight">
            <div className="slider-item js-fullheight">
              <div className="overlay" />
              <div className="container">
                <div
                  className="row slider-text align-items-center text-center justify-content-center"
                  data-scrollax-parent="true"
                >
                  <div
                    className="col-md-12 ftco-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <p>
                      <a href="#" className="scroll">
                        Hello! I'm
                      </a>
                    </p>
                    <h1
                      className="mb-3"
                      data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                    >
                      Asim Mehmood
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item js-fullheight">
              <div className="overlay" />
              <div className="container">
                <div
                  className="row slider-text align-items-center text-center justify-content-center"
                  data-scrollax-parent="true"
                >
                  <div
                    className="col-md-12 ftco-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <p>
                      <a href="#" className="scroll">
                        I'm from Pakistan
                      </a>
                    </p>
                    <h1
                      className="mb-3"
                      data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
                    >
                      A Software Engineer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END slider */}
          <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex" data-scrollax-parent="true">
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
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>What i do</span>
                  <h2>My services</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3">
                      <span className="icon-layers" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">React Js</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3">
                      <span className="icon-gears" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">React Native</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3">
                      <span className="icon-code" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading">JavaScript</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>Portfolio</span>
                  {/* <h2>Checkout a few of my works</h2> */}
                  <h2>
                    A complete list of projects will be provided on request
                  </h2>
                </div>
              </div>
              {/* <div class="row no-gutters">
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="portfolio-single.html" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/work-1.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
              <div class="icon d-flex text-center justify-content-center align-items-center">
                <span class="icon-search"></span>
              </div>
            </a>
            <div class="text">
              <h4 class="subheading">Illustration</h4>
              <h2 class="heading"><a href="portfolio-single.html">Even the all-powerful Pointing has no control</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
              <p><a href="#">View Project</a></p>
            </div>
          </div>
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="portfolio-single.html" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/work-2.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
              <div class="icon d-flex text-center justify-content-center align-items-center">
                <span class="icon-search"></span>
              </div>
            </a>
            <div class="text order-1">
              <h4 class="subheading">Application</h4>
              <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
              <p><a href="#">View Project</a></p>
            </div>
          </div>
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="portfolio-single.html" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/work-3.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
              <div class="icon d-flex text-center justify-content-center align-items-center">
                <span class="icon-search"></span>
              </div>
            </a>
            <div class="text">
              <h4 class="subheading">Web Design</h4>
              <h2 class="heading"><a href="portfolio-single.html">Even the all-powerful Pointing has no control</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
              <p><a href="#">View Project</a></p>
            </div>
          </div>
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="portfolio-single.html" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/work-4.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
              <div class="icon d-flex text-center justify-content-center align-items-center">
                <span class="icon-search"></span>
              </div>
            </a>
            <div class="text order-1">
              <h4 class="subheading">Application</h4>
              <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
              <p><a href="#">View Project</a></p>
            </div>
          </div>
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="portfolio-single.html" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/work-5.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
              <div class="icon d-flex text-center justify-content-center align-items-center">
                <span class="icon-search"></span>
              </div>
            </a>
            <div class="text">
              <h4 class="subheading">Animation</h4>
              <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
              <p><a href="#">View Project</a></p>
            </div>
          </div>
          <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
            <a href="portfolio-single.html" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/work-6.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
              <div class="icon d-flex text-center justify-content-center align-items-center">
                <span class="icon-search"></span>
              </div>
            </a>
            <div class="text order-1">
              <h4 class="subheading">Branding</h4>
              <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
              <p><a href="#">View Project</a></p>
            </div>
          </div>
        </div> */}
            </div>
          </section>
          <section className="ftco-section ftco-counter" id="section-counter">
            <div className="container">
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <div classname="row justify-content-center mb-5 pb-5">
                    <div classname="col-md-7 text-center heading-section ftco-animate">
                      <span>Portfolio</span>
                      <h2>What Our Clients Says</h2>
                      <div className="video-container">
                        <video
                        controls="controls"
                        src="video/video_testimonial_fiverr.MP4"
                        type="video/mp4"
                        width="600px"
                        height="300px"
                        className="video-p"
                        style={{width:'70%', height:'70%', marginTop:'50px'}}
                      >
                        Your browser does not support the HTML5 Video element.
                      </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-5 pb-5">
                <div className="col-md-7 text-center heading-section ftco-animate">
                  <span>Portfolio</span>
                  <h2>I love to share my achievements</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-start">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Clients</span>
                      <strong className="number" data-number={300}>
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Project done</span>
                      <strong className="number" data-number={890}>
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="col-md-5 counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <span className="ftco-label">Cups of coffee</span>
                      <strong className="number" data-number={1000}>
                        0
                      </strong>
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
                    <p className=" email">
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
export default Home;
