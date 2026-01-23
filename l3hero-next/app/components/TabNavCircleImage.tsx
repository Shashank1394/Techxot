"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import "./TabNavCircleImage.scss";

interface TabItem {
  id: string;
  label: string;
}

const TAB_ITEMS: TabItem[] = [
  { id: "tab1", label: "Item" },
  { id: "tab2", label: "Item" },
  { id: "tab3", label: "Item" },
  { id: "tab4", label: "Item" },
  { id: "tab5", label: "Item" },
  { id: "tab6", label: "Item" },
];

// Plus icon for collapsed accordion items
const PlusIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8V24M8 16H24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Minus icon for expanded accordion items
const MinusIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16H24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Shield icon for badge
const ShieldIcon = () => (
  <svg
    width="48"
    height="69"
    viewBox="0 0 48 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40C15.163 40 8 32.837 8 24C8 15.163 15.163 8 24 8Z"
      fill="white"
      fillOpacity="0.3"
    />
    <path
      d="M24 52V65M16 69H32"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
  </svg>
);

// Arrow icon for learn more link
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
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TabNavCircleImage() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="tab-nav-circle-image">
      <Container>
        {/* Header Section */}
        <Row>
          <Col xs={12}>
            <div className="header-section">
              <h2 className="main-title">
                Connection selection pixel fill community variant
              </h2>
              <p className="main-subtitle">
                Fuel your growth with business funding. Then arm yourself with
                all the tools to take your business up a notch. Fuel your growth
                with business funding. Then arm yourself with all the tools to
                take your business up a notch.
              </p>
            </div>
          </Col>
        </Row>

        {/* Desktop Tab Navigation - 6 equal columns using Bootstrap grid */}
        <Row className="tab-navigation desktop-tabs">
          {TAB_ITEMS.map((tab) => (
            <Col key={tab.id} xs={2} className="tab-col">
              <button
                className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-label">{tab.label}</span>
                <span className="tab-underline"></span>
              </button>
            </Col>
          ))}
        </Row>

        {/* Desktop Content Section */}
        <Row className="content-section desktop-content">
          <Col xs={12} md={12} lg={5} className="text-col">
            <div className="text-content">
              <h3 className="content-title">Unmatched scale</h3>
              <p className="content-description">
                Fuel your growth with business funding. Then arm yourself with
                all the tools to take your business up a notch. Fuel your growth
                with business funding.
              </p>
              <div className="learn-more-link">
                <span className="link-text">Learn more</span>
                <a href="#" className="link-icon">
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </Col>

          <Col
            xs={12}
            md={12}
            lg={{ span: 6, offset: 1 }}
            className="image-col"
          >
            <div className="image-wrapper">
              <div className="circle-image">
                <Image
                  src="/assets/image.png"
                  alt="Featured image"
                  width={536}
                  height={536}
                  className="main-image"
                />
              </div>
              <div className="badge-icon">
                <ShieldIcon />
              </div>
            </div>
          </Col>
        </Row>

        {/* Tablet/Mobile Accordion Section */}
        <div className="accordion-section">
          {/* First Accordion Item (Active) with Header */}
          <div
            className={`accordion-item ${activeTab === "tab1" ? "active" : ""}`}
          >
            <button
              className="accordion-header"
              onClick={() => setActiveTab(activeTab === "tab1" ? "" : "tab1")}
            >
              <span className="accordion-label">{TAB_ITEMS[0].label}</span>
              <span className="accordion-icon">
                {activeTab === "tab1" ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
          </div>

          {/* Content Area (shown when first tab is active) */}
          {activeTab === "tab1" && (
            <div className="accordion-content-area">
              <div className="content-wrapper">
                <div className="text-content">
                  <h3 className="content-title">Unmatched scale</h3>
                  <p className="content-description">
                    Fuel your growth with business funding. Then arm yourself
                    with all the tools to take your business up a notch. Fuel
                    your growth with business
                  </p>
                  <div className="learn-more-link">
                    <span className="link-text">Learn more</span>
                    <a href="#" className="link-icon">
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
                <div className="image-content">
                  <div className="image-wrapper">
                    <div className="circle-image">
                      <Image
                        src="/assets/image.png"
                        alt="Featured image"
                        width={360}
                        height={360}
                        className="main-image"
                      />
                    </div>
                    <div className="badge-icon">
                      <ShieldIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Accordion Items (2-6) */}
          {TAB_ITEMS.slice(1).map((tab) => (
            <div
              key={tab.id}
              className={`accordion-item ${activeTab === tab.id ? "active" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => setActiveTab(activeTab === tab.id ? "" : tab.id)}
              >
                <span className="accordion-label">{tab.label}</span>
                <span className="accordion-icon">
                  {activeTab === tab.id ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>

              {/* Content shown when this tab is active */}
              {activeTab === tab.id && (
                <div className="accordion-content-area">
                  <div className="content-wrapper">
                    <div className="text-content">
                      <h3 className="content-title">Unmatched scale</h3>
                      <p className="content-description">
                        Fuel your growth with business funding. Then arm
                        yourself with all the tools to take your business up a
                        notch. Fuel your growth with business
                      </p>
                      <div className="learn-more-link">
                        <span className="link-text">Learn more</span>
                        <a href="#" className="link-icon">
                          <ArrowIcon />
                        </a>
                      </div>
                    </div>
                    <div className="image-content">
                      <div className="image-wrapper">
                        <div className="circle-image">
                          <Image
                            src="/assets/image.png"
                            alt="Featured image"
                            width={360}
                            height={360}
                            className="main-image"
                          />
                        </div>
                        <div className="badge-icon">
                          <ShieldIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
