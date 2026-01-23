"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./EmailPreferenceForm.scss";

interface PreferenceOption {
  id: string;
  title: string;
  description: string;
}

const PREFERENCE_OPTIONS: PreferenceOption[] = [
  {
    id: "enewsletter",
    title: "eNewsletter",
    description:
      "Bullet ellipse effect underline blur horizontal asset inspect main. Bullet ellipse effect underline blur horizontal asset inspect main.",
  },
  {
    id: "webinars",
    title: "Webinars",
    description: "Bullet ellipse effect underline blur.",
  },
  {
    id: "product-updates",
    title: "Product updates",
    description:
      "Bullet ellipse effect underline blur horizontal asset inspect main. Bullet ellipse effect.",
  },
  {
    id: "conferences",
    title: "Conferences + events",
    description:
      "Bullet ellipse effect underline blur horizontal asset inspect main. Bullet ellipse effect.",
  },
  {
    id: "emergency",
    title: "Emergency notifications",
    description:
      "Bullet ellipse effect underline blur horizontal asset inspect main.",
  },
];

export default function EmailPreferenceForm() {
  const [email, setEmail] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "enewsletter",
  ]);

  const handleSelectAll = () => {
    setSelectedOptions(PREFERENCE_OPTIONS.map((opt) => opt.id));
  };

  const handleDeselectAll = () => {
    setSelectedOptions([]);
  };

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="email-preference-form">
      <Container fluid>
        <Row>
          {/* Left Blue Section */}
          <Col lg={6} className="hero-col">
            <div className="hero-content">
              <div className="logo">TECH&gt;OT</div>
              <div className="hero-copy">
                <h1 className="headline">Stay ahead.</h1>
                <h1 className="headline">Stay informed.</h1>
                <p className="subheadline">Never miss an insight.</p>
              </div>
            </div>
          </Col>

          {/* Right Form Section */}
          <Col lg={6} className="form-col">
            <div className="form-content">
              <h2 className="form-title">Email preference center</h2>
              <p className="form-subtitle">
                Select which lists you would like to receive email communication
                from:
              </p>

              {/* Email Input */}
              <div className="email-field">
                <label className="email-label">Email*</label>
                <input
                  type="email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Select/Deselect All */}
              <div className="bulk-actions">
                <button
                  type="button"
                  className="radio-option"
                  onClick={handleSelectAll}
                >
                  <span
                    className={`radio-circle ${selectedOptions.length === PREFERENCE_OPTIONS.length ? "selected" : ""}`}
                  ></span>
                  <span className="radio-label">Select all</span>
                </button>
                <button
                  type="button"
                  className="radio-option"
                  onClick={handleDeselectAll}
                >
                  <span
                    className={`radio-circle ${selectedOptions.length === 0 ? "selected" : ""}`}
                  ></span>
                  <span className="radio-label">Deselect all</span>
                </button>
              </div>

              {/* Preference Options */}
              <div className="preferences-list">
                {PREFERENCE_OPTIONS.map((option) => (
                  <div key={option.id} className="preference-item">
                    <button
                      type="button"
                      className={`checkbox ${selectedOptions.includes(option.id) ? "checked" : ""}`}
                      onClick={() => toggleOption(option.id)}
                    >
                      {selectedOptions.includes(option.id) && (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </button>
                    <div className="preference-content">
                      <h3 className="preference-title">{option.title}</h3>
                      <p className="preference-description">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opt Out Link */}
              <a href="#" className="opt-out-link">
                Opt out from all email communications
              </a>

              {/* Save Button */}
              <button type="submit" className="save-button">
                Save preferences
              </button>

              {/* reCAPTCHA Notice */}
              <p className="recaptcha-notice">
                This site is protected by reCAPTCHA and the{" "}
                <a href="#">Google Privacy Policy</a> and{" "}
                <a href="#">Terms of Service</a> apply.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
