import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowUpRight, Github } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"; 
import { skillsData } from '../data/PortfolioData';

export const Skills = () => {

  return (
    <section className="skills-section py-5 px-5" id="skills" >
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white">Skills</h1>
          <p className="text-secondary">Key skills that define my professional identity.</p>
        </div>

        <Row className="g-4">
          {skillsData.slice(0,6).map((skill, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="skill-card h-100 border-0">
                <Card.Body className="p-4">
                  <div className="skill-icon-wrapper mb-4">
                    {/* Placeholder for icon */}
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <Card.Title className="text-white fw-bold h5 mb-3">
                    {skill.title}
                  </Card.Title>
                  <Card.Text className="text-secondary small mb-4">
                    {skill.desc}
                  </Card.Text>
                  <div className="stars ">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`me-1 ${index < skill.star ? "text-warning" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <a href="/skills">
            <AnimatedBorderButton>
              View All Skill
              <ArrowUpRight style={{ width: "1.25rem", height: "1.25rem" }} />
            </AnimatedBorderButton>
          </a>
        </div>
    </section>
  );
};