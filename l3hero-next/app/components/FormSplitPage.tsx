"use client";

import { Container, Row, Col } from "react-bootstrap";
import "./FormSplitPage.scss";

export default function FormSplitPage() {
  return (
    <div className="l3-form-split">
      <Container fluid>
        <Row>
          <Col xs={12} lg={6} className="content-col">
            <div className="content-wrapper">
              <div className="logo">TECH&gt;OT</div>

              <div className="hero-copy">
                <h2 className="hero-headline">Don&apos;t hesitate!</h2>
                <h1 className="hero-title">
                  The quick brown fox jumps over the lazy dog
                </h1>
              </div>

              <div className="info-section">
                <div className="info-block">
                  <p className="info-label">About</p>
                  <p className="info-text">
                    Bullet ellipse effect underline blur horizontal asset
                    inspect main. Project auto strikethrough main underline fill
                    follower.
                  </p>
                </div>

                <div className="info-block">
                  <p className="info-label">How to:</p>
                  <p className="info-text">
                    Bullet ellipse effect underline blur horizontal asset
                    inspect main.
                  </p>
                  <ul className="info-list">
                    <li>
                      Bullet ellipse effect underline blur horizontal asset
                      inspect main.
                    </li>
                    <li>
                      Bullet ellipse effect underline blur horizontal asset
                      inspect main.
                    </li>
                    <li>
                      Bullet ellipse effect underline blur horizontal asset
                      inspect main.
                    </li>
                  </ul>
                </div>

                <div className="info-block">
                  <p className="info-label">Looking for technical support?</p>
                  <p className="info-text">
                    Get help when you need it. Our support team is available 24
                    hours a day, seven days a week only for you.
                  </p>
                </div>

                <a className="explore-link" href="#">
                  <span className="label">Explore our link location</span>
                  <span className="pill">&gt;</span>
                </a>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6} className="form-col">
            <div className="form-wrapper">
              <h3 className="form-headline">The quick brown fox jumps over</h3>

              <div className="form-intro">
                <p className="intro-text">
                  Bullet ellipse effect underline blur horizontal asset inspect
                  main. Project auto strikethrough main underline fill follower.
                  Object follower auto pen polygon boolean flatten ellipse.
                </p>
              </div>

              <p className="form-note">
                Bullet ellipse effect underline blur horizontal asset inspect
                main. Project auto strikethrough main underline fill follower.
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">First Name*</label>
                  <input type="text" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name*</label>
                  <input type="text" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label">Email*</label>
                  <input type="email" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label">Language*</label>
                  <div className="select-wrapper">
                    <select className="form-select">
                      <option value="">Please Select</option>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                    <span className="select-chevron">&#8964;</span>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Submit
                </button>

                <p className="recaptcha-notice">
                  This site is protected by reCAPTCHA and the{" "}
                  <a href="#">Google Privacy Policy</a> and{" "}
                  <a href="#">Terms of Service</a> apply.
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
