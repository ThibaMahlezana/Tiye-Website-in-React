import React from 'react'
import '../styles/global.css';
import '../styles/services.css';
import Container from 'react-bootstrap/Container';
import reactImage from '../images/react.svg';
import flutterImage from "../images/flutter.svg";
import css3Image from "../images/CSS3.svg";
import html5Image from "../images/html5.svg";
import jsImage from "../images/js.svg";
import pythonImage from "../images/python.svg";
import phpImage from "../images/php.svg";
import javaImage from "../images/java.svg";
import kotlinImage from "../images/kotlin.svg";
import swiftImage from "../images/swift.svg"
import { FcAndroidOs } from 'react-icons/fc';

export default function Services() {
  return (
    <div className="services" id="services">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Container>
        <div className="row">
          <div className="col-12 text-center">
            <h1>Services</h1>
          </div>
          <div className="col-12 col-md-6 col-sm-4 col-lg-3">
            <div className="service-item">
              <FcAndroidOs/>
              {/* <i
                style="color: #a4c639"
                class="fa fa-android"
                aria-hidden="true"
              ></i> */}
              <h3>Android App</h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-4 col-lg-3">
            <div className="service-item">
              {/* <i
                style="color: #808080"
                class="fa fa-apple"
                aria-hidden="true"
              ></i> */}
              <h3>iOS App</h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-4 col-lg-3">
            <div className="service-item">
              {/* <i
                style="color: #ff8b74"
                class="fa fa-html5"
                aria-hidden="true"
              ></i> */}
              <h3>Website</h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-4 col-lg-3">
            <div className="service-item">
              {/* <i
                style="color: #8aaae5"
                class="fa fa-code"
                aria-hidden="true"
              ></i> */}
              <h3>Desktop software</h3>
            </div>
          </div>
          <div className="col-12">
            <h3>Technologies we use</h3>
          </div>
          <div className="tech-items">
            <div class="row">
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="react" src={reactImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="flutter" src={flutterImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="css3" src={css3Image}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="html5" src={html5Image}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="javascript" src={jsImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="python" src={pythonImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="php" src={phpImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="java" src={javaImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt='kotlin' src={kotlinImage}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 tech-item">
                <img alt="swift" src={swiftImage}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eff0f2"
            fill-opacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
      </svg>
    </div>
  )
}
