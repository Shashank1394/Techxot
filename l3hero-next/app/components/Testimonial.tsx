"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import "./Testimonial.scss";

// Arrow icon component
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <Container>
        <Row className="testimonial-row">
          {/* Left Content Block */}
          <Col lg={5} className="content-block">
            <div className="content-inner">
              <h2 className="heading">
                The quick brown fox jumps over the lazy dog
              </h2>
              <div className="description">
                <p>
                  Flows reesizing scrolling figma reesizing prototype inspect
                  component ellipse. Layer team underline align figjam frame
                  edit flatten. Rectangle arrange library background layer
                  vector. Connection device vertical style stroke. Edit rotate
                  rotate arrange link rotate vector.
                </p>
                <p>
                  Draft stroke vertical comment italic frame. Move flatten
                  ellipse underline device. Overflow variant frame export
                  strikethrough line hand. Export move auto blur style star
                  slice outline export.
                </p>
              </div>
              <div className="action">
                <span className="learn-more">Learn More</span>
                <div className="arrow-circle">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </Col>

          {/* Right Testimonial Card */}
          <Col lg={{ span: 5, offset: 1 }} className="card-block">
            <div className="testimonial-card">
              {/* Top Image */}
              <div className="card-image-top">
                <Image
                  src="/assets/image.png"
                  alt="Testimonial image 1"
                  width={488}
                  height={244}
                  className="image"
                />
              </div>

              {/* Card Content */}
              <div className="card-content">
                {/* Second Image */}
                <div className="card-image-bottom">
                  <Image
                    src="/assets/image.png"
                    alt="Testimonial image 2"
                    width={295}
                    height={104}
                    className="image"
                  />
                </div>

                {/* Quote */}
                <p className="quote">
                  &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure reprehenderit.&rdquo;
                </p>

                {/* Author */}
                <p className="author-name">Firstname Lastname</p>
                <p className="author-title">Full Company Title, Company</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
