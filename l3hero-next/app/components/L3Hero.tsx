"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

interface L3HeroProps {
  variant?: string;
  colorScheme?: string;
}

export default function L3Hero({ variant, colorScheme }: L3HeroProps) {
  const classes = ["l3-hero", variant, colorScheme].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <Container>
        <Row>
          <Col className="copy" xs={12} md={12} lg={5}>
            <p className="brow">EFFECT.SELECT.EXPORT</p>

            <h1 className="title">
              Connection selection pixel fill community varient
            </h1>

            <p className="sub-text">
              Effect select export object. Team hand scale layout device project
              layer rectangle flows community. Object figma invite vector
              comment
            </p>

            <div className="cta-list">
              <button className="left-btn">Button</button>

              <a href="#" className="list-anchor">
                List item
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="right-arrow"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </Col>

          <Col className="media" xs={12} md={12} lg={{ span: 6, offset: 1 }}>
            <Image
              src="/assets/frame-img.png"
              alt="Main"
              width={600}
              height={600}
              className="frame-img"
              priority
            />

            <Image
              src="/assets/vertical-img.png"
              alt="Hand"
              width={200}
              height={200}
              className="vertical-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
