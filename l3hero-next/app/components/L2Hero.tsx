import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Suspense } from "react";

type HeroVariant = "split-50";
type HeroColorScheme = "bg-base";

interface L2HeroProps {
  variant?: HeroVariant;
  colorScheme?: HeroColorScheme;
}

export default function L2Hero({
  variant = "split-50",
  colorScheme,
}: L2HeroProps) {
  const classes = ["l2-hero", variant, colorScheme].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <Container>
        <Row>
          <Col className="copy" xs={12} lg={6}>
            <p className="brow">EFFECT.SELECT.EXPORT</p>

            <h1 className="title">
              Connection selection pixel fill community varient
            </h1>

            <p className="sub-text">
              Effect select export object. Team hand scale layout device project
              layer rectangle flows community. Object figma invite vector
              comment.
            </p>

            <div className="cta-list">
              <button className="left-btn">Button</button>

              <a href="#" className="list-anchor">
                List item
                <span className="arrow-wrapper">
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

          <Col className="media" xs={12} lg={6}>
            <Suspense fallback={<div className="media-skeleton" />}>
              <Image
                src="/assets/image.png"
                alt="Hero image"
                width={948}
                height={640}
                className="hero-img"
                priority
              />
            </Suspense>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
