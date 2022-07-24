import React from 'react'
import '../styles/global.css';
import '../styles/portfolio.css';
import Container from 'react-bootstrap/Container';
import web01Image from '../images/web-1.png';
import web02Image from '../images/web-2.png';
import web03Image from '../images/web-3.png';
import system01 from '../images/system-1.png';
import system02 from '../images/system-2.png';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <div className='row'>
          <div className="col-12 text-center">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="img-box-wrapper clearfix">
            <div className="row justify-content-center">
              <div className="img-box websites col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <a href="http://www.olroundtech.co.za">
                  <img
                    src={web01Image}
                    alt="olround tech"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div className="img-box websites col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <a href="http://www.tmgmakerspace.co.za">
                  <img
                    src={web02Image}
                    alt="tmg makerspace"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div className="img-box websites col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <a href="http://www.biztweak.co.za">
                  <img
                    src={web03Image}
                    alt="Biztweak"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="img-box systems col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <a>
                  <img
                    src={system01}
                    alt="system 01"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div className="img-box systems col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                <a>
                  <img
                    src={system02}
                    alt="system 01"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ccd8e2"
          fill-opacity="1"
          d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
