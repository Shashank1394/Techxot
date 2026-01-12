import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Suspense } from "react";

type HeroVariant =
  | "unified-frame"
  | "unified-vertical"
  | "unified-dot"
  | "unified-ecosystem";
type HeroColorScheme = "bg-base";

interface L3HeroProps {
  variant?: HeroVariant;
  colorScheme?: HeroColorScheme;
}

async function Delay({ ms = 2000 }: { ms?: number }) {
  await new Promise((r) => setTimeout(r, ms));
  return null;
}

export default function L3Hero({
  variant = "unified-frame",
  colorScheme,
}: L3HeroProps) {
  const isUnifiedFrame = variant === "unified-frame";
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
            <Suspense fallback={<div className="media-skeleton" />}>
              <Delay ms={3000} />

              {isUnifiedFrame ? (
                <Image
                  src="/assets/frame-img.png"
                  alt="Frame image"
                  width={600}
                  height={600}
                  className="frame-img"
                  priority
                  sizes="(min-width: 992px) 600px, 100vw"
                />
              ) : (
                <Image
                  src="/assets/standard-img.png"
                  alt="Standard image"
                  width={600}
                  height={600}
                  className="standard-img"
                  priority
                  sizes="(min-width: 992px) 600px, 100vw"
                />
              )}
            </Suspense>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
