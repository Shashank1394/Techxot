"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Accordion.scss";

type AccordionItem = {
  id: string;
  question: string;
  answer?: string;
};

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: "q1",
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
  },
  {
    id: "q2",
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
  },
  {
    id: "q3",
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
  },
  {
    id: "q4",
    question: "The brown fox jumps over the lazy dog ?",
    answer:
      "Draft stroke vertical comment italic frame. Move flatten ellipse underline device. Overflow variant frame export strikethrough line hand.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState<string | null>(
    ACCORDION_ITEMS[0]?.id ?? null,
  );

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="l3-accordion">
      <Container>
        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }} className="accordion-col">
            <h2 className="accordion-heading">Your questions, answered</h2>

            <div className="accordion-list">
              {ACCORDION_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`accordion-item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="accordion-row"
                      aria-expanded={isOpen}
                      onClick={() => toggleItem(item.id)}
                    >
                      <p className="accordion-question">{item.question}</p>
                      <span className="accordion-icon" aria-hidden>
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    {isOpen && item.answer ? (
                      <div className="accordion-body">
                        <p className="accordion-answer">{item.answer}</p>
                        <a className="accordion-link" href="#">
                          <span className="label">Learn more</span>
                          <span className="pill">&gt;</span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
