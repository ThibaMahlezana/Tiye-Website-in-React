import React from 'react'
import '../styles/global.css';
import '../styles/home.css';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.png';

export default function Home() {
  return (
    <div className="home" id="home">
      <Container>
        <div className="row">
          <div className="home-sec">
            <h1>Hello <i class="fa fa-smile-o"></i>, welcome to</h1>
            <p><img alt="logo" src={logo}/></p>
            <p><h3>A custom software company_</h3></p>
            <p>
              <div className="slogan cd-headline clip is-full-width">
                <span>We help you build </span>
                <span className="cd-words-wrapper">
                  <b className="is-visible"
                    >an Android App
                    <i class="fa fa-android" aria-hidden="true"></i
                  ></b>
                  <b>an IOS App <i class="fa fa-apple" aria-hidden="true"></i></b>
                  <b>a Website <i class="fa fa-code" aria-hidden="true"></i></b>
                </span>
              </div>
              <a className="button button-float" href="#about">read more <i class="fa fa-angle-down"></i></a>
            </p>
          </div>
        </div>
      </Container>
      <div className="social-bar">
        <div className="youtube-bar">
          <a href="https://www.youtube.com/channel/UCgZn4bJAW2YHYk-hgBPZDGg"
            ><i class="fa fa-youtube-play" aria-hidden="true"></i> tiyeCode</a
          >
        </div>
        <div className="whatsapp-bar">
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
          <span>+27 68 037 0933</span>
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
