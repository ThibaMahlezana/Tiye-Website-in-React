import React from 'react'
import '../styles/global.css';
import '../styles/contact.css';
import Container from 'react-bootstrap/Container';
import { FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

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
              <a href="#+27 68 037 0933">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/pg/TiyeTechnologies/about/">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/tiye_tech">
                <FaTwitter/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
