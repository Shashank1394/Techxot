"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OpenGraph.scss";

interface TabItem {
  id: string;
  title: string;
}

interface DataPoint {
  year: string;
  value: number;
  retailPercent: string;
  changePercent: string;
  // Position of change percent line (as % from bottom of chart area)
  linePosition: number;
}

const TAB_ITEMS: TabItem[] = [
  { id: "tab1", title: "The quick brown fox jumps over the lazy" },
  { id: "tab2", title: "The quick brown fox jumps also" },
  { id: "tab3", title: "The quick brown fox jumps over the lazy" },
  { id: "tab4", title: "The quick brown fox jumps once again" },
  { id: "tab5", title: "The quick brown fox jumps" },
];

const CHART_DATA: DataPoint[] = [
  {
    year: "2019",
    value: 104.92,
    retailPercent: "24%",
    changePercent: "9.3%",
    linePosition: 51,
  },
  {
    year: "2020",
    value: 153.71,
    retailPercent: "35.6%",
    changePercent: "46.6%",
    linePosition: 71,
  },
  {
    year: "2021",
    value: 174.77,
    retailPercent: "37.6%",
    changePercent: "13.7%",
    linePosition: 74,
  },
  {
    year: "2022",
    value: 162.19,
    retailPercent: "33.8%",
    changePercent: "-7.2%",
    linePosition: 26,
  },
  {
    year: "2023",
    value: 161.13,
    retailPercent: "32%",
    changePercent: "-0.6%",
    linePosition: 66,
  },
  {
    year: "2024",
    value: 168.71,
    retailPercent: "32.2%",
    changePercent: "4.7%",
    linePosition: 68,
  },
  {
    year: "2025",
    value: 176.13,
    retailPercent: "32.4%",
    changePercent: "4.4%",
    linePosition: 68,
  },
  {
    year: "2026",
    value: 183.0,
    retailPercent: "32.5%",
    changePercent: "3.9%",
    linePosition: 68,
  },
  {
    year: "2027",
    value: 189.95,
    retailPercent: "32.7%",
    changePercent: "3.8%",
    linePosition: 68,
  },
];

const MAX_VALUE = 220;
const CHART_HEIGHT = 472;

export default function OpenGraph() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [expandedMobileTab, setExpandedMobileTab] = useState<string | null>(
    null,
  );

  const toggleMobileTab = (id: string) => {
    setExpandedMobileTab(expandedMobileTab === id ? null : id);
  };

  return (
    <section className="open-graph">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2 className="section-title">
              The quick brown fox jumps over the lazy dog
            </h2>
          </Col>
        </Row>

        <Row className="content-row">
          {/* Left Navigation (Desktop Only) */}
          <Col lg={4} className="nav-col d-none d-lg-block">
            <nav className="tab-nav">
              {TAB_ITEMS.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab === tab.id && (
                    <span className="arrow-icon">→</span>
                  )}
                  <span className="tab-text">{tab.title}</span>
                </button>
              ))}
            </nav>
          </Col>

          {/* Active Tab Link (Tablet/Mobile) */}
          <Col xs={12} className="mobile-active-tab d-lg-none">
            <a href="#" className="active-tab-link">
              {TAB_ITEMS.find((t) => t.id === activeTab)?.title}
            </a>
          </Col>

          {/* Chart Section */}
          <Col lg={8} xs={12} className="chart-col">
            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">The quick brown fox jumps over</h3>
                <p className="chart-subtitle">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              <div className="chart-divider"></div>

              <div className="chart-area">
                {/* SVG Line Graph Overlay */}
                <svg
                  className="line-graph"
                  viewBox="0 0 720 500"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#00c853" />
                      <stop offset="100%" stopColor="#00c853" />
                    </linearGradient>
                  </defs>
                  {/* Connecting lines */}
                  <polyline
                    fill="none"
                    stroke="#00c853"
                    strokeWidth="3"
                    points="40,244 120,28 200,80 280,372 360,168 440,160 520,152 600,144 680,136"
                  />
                  {/* Dots on the line */}
                  {CHART_DATA.map((data, index) => {
                    const x = 40 + index * 80;
                    const y =
                      index === 0
                        ? 244
                        : index === 1
                          ? 28
                          : index === 2
                            ? 80
                            : index === 3
                              ? 372
                              : index === 4
                                ? 168
                                : index === 5
                                  ? 160
                                  : index === 6
                                    ? 152
                                    : index === 7
                                      ? 144
                                      : 136;
                    return (
                      <circle
                        key={data.year}
                        cx={x}
                        cy={y}
                        r="6"
                        fill="#00c853"
                      />
                    );
                  })}
                </svg>

                <div className="bars-container">
                  {CHART_DATA.map((data, index) => {
                    const barHeight = (data.value / MAX_VALUE) * CHART_HEIGHT;
                    return (
                      <div key={data.year} className="bar-group">
                        <div className="bar-top-section">
                          <span
                            className={`change-percent ${index === 3 ? "below-axis" : ""}`}
                          >
                            {data.changePercent}
                          </span>
                          <span className="bar-value">
                            ${data.value.toFixed(2)}
                          </span>
                        </div>
                        <div className="bar-wrapper">
                          <div
                            className="bar"
                            style={{ height: `${barHeight}px` }}
                          >
                            <span className="retail-percent">
                              {data.retailPercent}
                            </span>
                          </div>
                        </div>
                        <div className="year-label">{data.year}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="chart-divider"></div>

              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-dot blue"></span>
                  <span className="legend-text">Ecommerce retail sales</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot green"></span>
                  <span className="legend-text">% change</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot cyan"></span>
                  <span className="legend-text">% of total retail sales</span>
                </div>
              </div>

              <div className="chart-source">
                Source: Insider Intelligence, August 2023. UK Ecommerce Forecast
                2023.
              </div>
            </div>
          </Col>
        </Row>

        {/* Mobile/Tablet Accordion Tabs */}
        <Row className="mobile-tabs d-lg-none">
          <Col xs={12}>
            <div className="accordion-tabs">
              {TAB_ITEMS.filter((tab) => tab.id !== activeTab).map((tab) => (
                <div key={tab.id} className="accordion-item">
                  <button
                    className="accordion-header"
                    onClick={() => toggleMobileTab(tab.id)}
                  >
                    <span className="accordion-title">{tab.title}</span>
                    <span className="accordion-icon">+</span>
                  </button>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
