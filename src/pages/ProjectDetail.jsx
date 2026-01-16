import React from 'react';
import { FaStar } from "react-icons/fa";
import { Badge } from 'react-bootstrap'; 
import { useLocation } from 'react-router-dom';
import profile from '../assets/images/profile-photo.jpg';
import { ChevronLeft } from "lucide-react";

const ProjectDetailPage = ({ project }) => {
  const { state } = useLocation();
  const projectDetail = state?.projectDetail;
  return (
    <div className="row justify-content-center">
      <section className="project-detail col-8 mt-5 py-5 position-relative overflow-hidden" >
        Total
      </section>
    </div>
  );
};

export default ProjectDetailPage;