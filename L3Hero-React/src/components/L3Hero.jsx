import { Col, Row, Container } from "react-bootstrap";
import mainImg from "/public/main-img.png";
import handImg from "/public/hand-img.png";

export default function L3Hero() {
  return (
    <div className="l3-hero unified-frame">
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
            <img src={mainImg} alt="Main" className="main-img" />
            <img src={handImg} alt="Hand" className="hand-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
