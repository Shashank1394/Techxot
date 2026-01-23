"use client";

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

type FaqItem = {
  id: number;
  question: string;
  answer?: string;
  learnMoreLink?: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
    learnMoreLink: "#",
  },
  {
    id: 2,
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
    learnMoreLink: "#",
  },
  {
    id: 3,
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
    learnMoreLink: "#",
  },
  {
    id: 4,
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
    learnMoreLink: "#",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion bg-blue">
      <Container>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <div className="faq-header">
              <h1 className="faq-title">Your questions, answered</h1>
            </div>

            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={item.id}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="faq-question">{item.question}</span>
                    <div className="faq-icon">
                      <Image
                        src={
                          openIndex === index
                            ? "http://localhost:3845/assets/12710e572110e44e806b875da2a6b13cda40d2be.svg"
                            : "http://localhost:3845/assets/7b53916d0bcd94267f19173655bc28b53a69306f.svg"
                        }
                        alt={openIndex === index ? "Collapse" : "Expand"}
                        width={32}
                        height={32}
                      />
                    </div>
                  </button>

                  {openIndex === index && item.answer && (
                    <div className="faq-answer">
                      <p className="faq-answer-text">{item.answer}</p>
                      {item.learnMoreLink && (
                        <a href={item.learnMoreLink} className="faq-learn-more">
                          <span className="learn-more-text">Learn more</span>
                          <div className="learn-more-icon">
                            <Image
                              src="http://localhost:3845/assets/b9effa780a0f1b867e2237c73ba2e36d0e7f2c6b.svg"
                              alt="Arrow right"
                              width={24}
                              height={24}
                            />
                          </div>
                        </a>
                      )}
                    </div>
                  )}

                  <div className="faq-divider" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
