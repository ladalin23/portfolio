import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { skillsData } from '../data/PortfolioData';

const SkillPage = () => {

  return (
    <section className="skills-section py-5 px-5 mt-5" id="skills" >
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-white">Skills</h1>
          <p className="text-secondary">Key skills that define my professional identity.</p>
        </div>

        <Row className="g-4">
          {skillsData.map((skill, index) => (
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </section>
  );
};

export default SkillPage;