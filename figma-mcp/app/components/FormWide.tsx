import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

type FormWideProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

export default function FormWide({
  title = "The quick brown fox jumps over",
  subtitle = "The quick brown fox jumps over",
  description = "Bullet ellipse effect underline blur horizontal asset inspect main. Project auto strikethrough main underline fill follower. Object follower auto pen polygon boolean flatten ellipse.",
}: FormWideProps) {
  return (
    <div className="form-wide">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="form-wide-header">
              <h1 className="form-wide-title">{title}</h1>
              <h2 className="form-wide-subtitle">{subtitle}</h2>
              <p className="form-wide-description">{description}</p>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="form-field">
              <label className="form-label">Requesting*</label>
              <div className="form-select-wrapper">
                <select className="form-input form-select">
                  <option value="">
                    I&apos;m looking for a payment solution for ...
                  </option>
                </select>
                <Image
                  src="/assets/chevron-down.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="select-icon"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="form-field">
              <label className="form-label">Company*</label>
              <input type="text" className="form-input" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="form-field">
              <label className="form-label">First Name*</label>
              <input type="text" className="form-input" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="form-field">
              <label className="form-label">Last Name*</label>
              <input type="text" className="form-input" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="form-field">
              <label className="form-label">Label*</label>
              <input type="text" className="form-input" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="form-field">
              <label className="form-label">Label*</label>
              <input type="text" className="form-input" />
            </div>
          </Col>
          <Col xs={12}>
            <div className="form-field">
              <label className="form-label">Label*</label>
              <input type="text" className="form-input" />
            </div>
          </Col>

          <Col xs={12}>
            <div className="form-wide-consent">
              <label className="consent-label">
                <input type="checkbox" className="consent-checkbox" />
                <span className="consent-text">
                  I agree to the processing of my personal data. I have read the{" "}
                  <a href="#" className="consent-link">
                    privacy policy
                  </a>
                  . *
                </span>
              </label>
            </div>

            <button type="submit" className="form-wide-submit">
              Get your free quote
            </button>

            <p className="form-wide-disclaimer">
              This site is protected by reCAPTCHA and the{" "}
              <a href="#" className="disclaimer-link">
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="disclaimer-link">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
