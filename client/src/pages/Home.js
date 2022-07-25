import React from 'react'
import '../styles/global.css';
import '../styles/home.css';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.png';
import ytIcon from '../images/youtube.svg';
import wtIcon from '../images/whatsapp.svg';

export default function Home() {
  return (
    <div className="home" id="home">
      <Container>
        <div className="row">
          <div className="home-sec">
            <h1>Hello, welcome to</h1>
            <p><img alt="logo" src={logo}/></p>
            <p><h3>A custom software company_</h3></p>
            <p>
              <a className="button button-float" href="#about">read more <i class="fa fa-angle-down"></i></a>
            </p>
          </div>
        </div>
      </Container>
      <div className="social-bar">
        <div className="youtube-bar">
          <a href="https://www.youtube.com/channel/UCgZn4bJAW2YHYk-hgBPZDGg">
            <img alt="youtube" src={ytIcon} /> tiyeCode
          </a>
        </div>
        <div className="whatsapp-bar">
          <img src={wtIcon} alt="whatsapp" />
          <span>+27 61 9580 694</span>
        </div>
      </div>
      <svg id="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eff0f2"
          fill-opacity="1"
          d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
