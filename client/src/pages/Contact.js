import React from 'react'
import '../styles/global.css';
import '../styles/contact.css';
import Container from 'react-bootstrap/Container';
import wtsIcon from '../images/whatsapp-icon.svg';
import fcIcon from '../images/facebook-icon.svg';
import twIcon from '../images/twitter-icon.svg';
import locationIcon from '../images/location-icon.svg';
import emailIcon from '../images/mail-icon.svg';
import phoneIcon from '../images/phone-icon.svg';

export default function Contact() {
  return (
    <div class="contact" id="contact">
      <ul class="circles">
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
        <div class="row">
          <div class="col-12 text-center">
            <h1>Contact us</h1>
          </div>
          <div class="col-md-6">
            <h2>tiye {'{'} technologies {'}'}</h2>
            <p>/creating the future now_</p>
            <div className="social-links">
              <a href="#+27 619 580 694">
                <img alt="whatsapp" src={wtsIcon} />
              </a>
              <a href="https://www.facebook.com/pg/TiyeTechnologies/about/">
                <img alt="facebook" src={fcIcon} />
              </a>
              <a href="https://twitter.com/tiye_tech">
                <img alt="twitter" src={twIcon} />
              </a>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="contact-icon">
                    <img alt="location" src={locationIcon} />
                  </td>
                  <td><h5>41 Juta Street, Johannesburg, Gauteng, ZA</h5></td>
                </tr>
                <tr>
                  <td class="contact-icon">
                    <img alt="email address" src={emailIcon} />
                  </td>
                  <td><h5>info@tiye.co.za</h5></td>
                </tr>
                <tr>
                  <td class="contact-icon">
                    <img alt="phone" src={phoneIcon} />
                  </td>
                  <td><h5>+27 61 958 0694</h5></td>
                </tr>
              </tbody>
            </table>
        </div>
        </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8aaae5"
          fill-opacity="1"
          d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
