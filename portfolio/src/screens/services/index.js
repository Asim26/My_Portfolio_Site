import React from "react";

const Services = () => {
  return (
    <div>
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
                    <li>
                      <a href={process.env.REACT_APP_API_URL}>
                        <span>
                          <small>01</small>Home
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={process.env.REACT_APP_API_URL+'about'}>
                        <span>
                          <small>02</small>Resume
                        </span>
                      </a>
                    </li>
                    <li className="active">
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
          <section className="ftco-section">
            <div className="container mt-5">
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
export default Services;
