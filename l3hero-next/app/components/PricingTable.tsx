"use client";

import { Container, Row, Col } from "react-bootstrap";
import "./PricingTable.scss";

type Plan = {
  name: string;
  price: string;
};

const PLANS: Plan[] = [
  {
    name: "Lite",
    price: "Free",
  },
  {
    name: "Standard",
    price: "$5/month",
  },
  {
    name: "Pro",
    price: "$15/month",
  },
];

const FEATURES = [
  { label: "Account settings", included: [true, true, true] },
  {
    label: "Create users and manage permissions",
    included: [true, true, true],
  },
  { label: "Account settings", included: [true, true, true] },
  {
    label: "Create users and manage permissions",
    included: [true, true, true],
  },
  { label: "Account settings", included: [true, true, true] },
  {
    label: "Create users and manage permissions",
    included: [true, true, true],
  },
  { label: "Account settings", included: [true, true, true] },
  {
    label: "Create users and manage permissions",
    included: [true, true, true],
  },
  { label: "Account settings", included: [true, true, true] },
  {
    label: "Create users and manage permissions",
    included: [true, true, true],
  },
  { label: "Account settings", included: [true, true, true] },
];

export default function PricingTable() {
  return (
    <div className="l3-pricing-table">
      <Container>
        <Row>
          <Col xs={12} className="pricing-col">
            <h2 className="heading">Pick your plan</h2>

            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>

            <div className="pricing-header">
              <div className="header-empty"></div>
              {PLANS.map((plan) => (
                <div key={plan.name} className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-price">{plan.price}</p>
                </div>
              ))}
            </div>

            <div className="pricing-body">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="feature-row">
                  <div className="feature-label">
                    <p className="feature-title">{feature.label}</p>
                  </div>
                  {feature.included.map((included, pidx) => (
                    <div key={pidx} className="feature-check">
                      {included ? "✓" : ""}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
