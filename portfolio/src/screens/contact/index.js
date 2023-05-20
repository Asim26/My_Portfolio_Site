import React from "react";

const Contact = () => {
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
                    <li>
                      <a href={process.env.REACT_APP_API_URL+'services'}>
                        <span>
                          <small>03</small>Services
                        </span>
                      </a>
                    </li>
                    {/* <li><a href="portfolio.html"><span><small>04</small>Portfolio</span></a></li>
                <li><a href="blog.html"><span><small>05</small>Blog</span></a></li> */}
                    <li className="active">
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
          <section className="ftco-section contact-section">
            <div className="container mt-5">
              <div className="row d-flex mb-5 contact-info">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="w-100" />
                <div className="col-md-3">
                  <p>
                    <span>Address:</span> Lahore
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:mohammadasimmehmood@gmail.com">
                      mohammadasimmehmood@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="row block-9">
                <div className="col-md-6 pr-md-5">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name
                        id
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary py-3 px-5"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6" id="map" />
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
export default Contact;
