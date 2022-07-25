import React from 'react'
import '../styles/global.css';
import '../styles/about.css';
import Container from 'react-bootstrap/Container';
import bgImage from '../images/home-bg.png';

export default function About() {
  return (
    <div className="about" id="about">
      <Container>
        <div className="row">
          <div className="col-12 text-center">
            <h1>About us</h1>
          </div>
          <div className="col-lg-6">
            <h3>HELLO, WE ARE TIYE TECHNOLOGIES</h3>
            <p>
              <span className="about-tags">Design</span>
              <span className="about-tags">Develop</span>
              <span className="about-tags">Host</span>
            </p>
            <p className="about-description">
              We are a custom software development company, providing a complete
              software design and development service. We help individuals or
              companies to bring their software ideas to life.
            </p>
            <p className="about-quote">
              "Ideas are the currency of the future. ― Kevin Roberts"
            </p>
          </div>
          <div className="col-lg-6 d-none d-sm-block">
            <div className="about-image"><img alt='about img' src={bgImage} /></div>
          </div>
        </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ccd8e2"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,261.3C640,267,800,245,960,245.3C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
