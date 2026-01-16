import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import profile from '../assets/images/profile-photo.jpg';
import { ChevronLeft } from "lucide-react";

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const projectDetail = state?.projectDetail;

  // Handle missing project data
  if (!projectDetail) {
    return (
      <div className="text-center py-5">
        <h3 className="text-white">No project data available.</h3>
        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate('/projects')}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <section className="project-detail col-8 mt-5 py-5 position-relative overflow-hidden">
        {/* Header / Back Button */}
        <div className="row mb-4">
          <div className="col-2">
            <button
              onClick={() => navigate('/projects')}
              className="d-flex align-items-center text-decoration-none text-white rounded-3 pe-3 btn-arrow btn btn-link p-0"
            >
              <ChevronLeft /> All Experience
            </button>
          </div>
          <div className='col-10'>
            <h1 className="fw-bold mb-3">{projectDetail.nameProject}</h1>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {projectDetail.tagPlateform?.map((tagPl) => (
                <Badge key={tagPl} bg="dark" className="border border-secondary px-2 py-2 fw-light">
                  {tagPl}
                </Badge>
              ))}
            </div>

            {/* Author Info */}
            <div className="d-flex align-items-center">
              <img
                src={profile}
                alt="Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #333',
                  objectFit: 'cover',
                }}
              />
              <div className="ms-2">
                <h5 className="text-white mb-0">La Dalin</h5>
                <p className="text-secondary mb-0">@ladalin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-4">
          <div className="glass-card p-2 rounded-3 d-flex justify-content-center" style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
            <img
              src={projectDetail.MainImage}
              className="img-fluid rounded-2"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt={projectDetail.nameProject}
            />
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mb-4">
          <h2 className="h4 fw-bold mb-3">Tech Stack</h2>
          <div className="d-flex flex-wrap gap-2">
            {projectDetail.tags?.map((tech) => (
              <Badge key={tech} bg="dark" className="border border-secondary px-3 py-2 fw-light">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-5">
          <h2 className="h4 fw-bold mb-3">Description</h2>
          <div className="text-secondary lh-lg" style={{ fontSize: '1.2rem' }}>
            <p dangerouslySetInnerHTML={{ __html: projectDetail.desc }} />
          </div>
        </section>

        {/* Page Info / Gallery */}
        {projectDetail.images?.length > 0 && (
          <section>
            <h2 className="h4 fw-bold mb-2">Page Info</h2>
            <div className="mb-4 mt-3">
              <h3 className="h5 d-flex align-items-center text-white gap-2">
                <FaStar className="text-white" /> Landing Page
              </h3>
              <p className="text-white mt-2" style={{ fontSize: '1.1rem' }}>
                High-converting and sleek landing page designed for property discovery and lead generation.
              </p>
            </div>

            {/* Gallery Images */}
            <div className="d-flex flex-column gap-4">
              {projectDetail.images.map((img, index) => (
                <div key={index} className="glass-card p-2 rounded-3 d-flex justify-content-center">
                  <img src={img} className="img-fluid rounded-2" alt={`Project Screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default ProjectDetailPage;
