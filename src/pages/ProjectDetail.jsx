import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import profile from '../assets/images/profile-photo.jpg';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ProjectDetailPage = ({ project }) => {
  const { state } = useLocation();
  const projectDetail = state?.projectDetail;
  return (
    <div className="row justify-content-center">
      <section className="project-detail col-8 mt-5 py-5 position-relative overflow-hidden" >
        <div className="row">
          <div className="col-2">
              <a href="/projects" className="d-flex align-items-center text-decoration-none text-white rounded-3 pe-3 btn-arrow "  ><ChevronLeft />All Experience</a>
          </div>
          <div className='col-8'>
            <div className="mb-2">
              <h1 className=" fw-bold mb-3">{projectDetail.nameProject}</h1>
              <div className="d-flex flex-wrap gap-2">
                {projectDetail.tagPlateform.map((tagPl) => (
                  <Badge key={tagPl} bg="dark" className="border border-secondary px-2 py-2 fw-light">
                    {tagPl}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="container-fluid py-3 mb-2" >
              <div className="row align-items-center">
                <div className="col-auto">
                  <img src={profile} alt="Profile" style={{ width: '40px', height: '40px',
                      borderRadius: '50%', border: '1px solid #333', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="col">
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{  color: '#FFFFFF', fontSize: '1rem', fontWeight: '600', margin: 0, letterSpacing: '0.5px' }} >
                      La Dalin
                    </h4>
                    <p style={{ color: '#71767b', fontSize: '0.95rem', margin: 0, fontWeight: '400'}} >
                      @ladalin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className='col-8'>
            <div className="d-flex flex-column gap-4">
              <div className="glass-card p-2 rounded-3 d-flex justify-content-center" style={{width: '100%',  height: '400px', overflow: 'hidden'}} >
                <img src={projectDetail.MainImage} className="img-fluid rounded-2" style={{width: '100%',  height: '100%', objectFit: 'cover'}} alt="Landing" />
              </div>
            </div>
            {/* Tech Stack Section */}
            <section className="mb-4 mt-4">
              <h2 className="h4 fw-bold mb-3">Tech Stack</h2>
              <div className="d-flex flex-wrap gap-2">
                {projectDetail.tags.map((tech) => (
                  <Badge key={tech} bg="dark" className="border border-secondary px-3 py-2 fw-light">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Description Section */}
            <section className="mb-5">
              <h2 className="h4 fw-bold mb-3">Description</h2>
              <div className="text-secondary lh-lg" style={{ fontSize: '1.2rem' }} > 
                  <p dangerouslySetInnerHTML={{ __html: projectDetail.desc }} />
              </div>
            </section>
            {/* Page Info / Gallery Section */}
            {projectDetail?.images?.length > 0 && (
              <section>
                <h2 className="h4 fw-bold mb-2">Page Info</h2>

                <div className="mb-4 mt-5">
                  <h3 className="h5 d-flex align-items-center text-white gap-2">
                    <FaStar className="text-white" /> Landing Page
                  </h3>
                  <p
                    className="text-white mt-3"
                    style={{ fontSize: '1.1rem' }}
                  >
                    High-converting and sleek landing page designed for property discovery and lead generation.
                  </p>
                </div>

                {/* Screenshots Stack */}
                <div className="d-flex flex-column gap-4">
                  {projectDetail.images.map((projectImage, index) => (
                    <div
                      key={index}
                      className="glass-card p-2 rounded-3 d-flex justify-content-center"
                    >
                      <img
                        src={projectImage}
                        className="img-fluid rounded-2"
                        alt="Landing"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;