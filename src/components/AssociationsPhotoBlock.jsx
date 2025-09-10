import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './AssociationsPhotoBlock.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import socialOne from '../assets/socialOne.png';
import socialTwo from '../assets/socialTwo.png';


function AssociationsPhotoBlock() {
  const initiatives = [
    {
      id: 1,
      image: socialOne,
      title: "Goenka & Associates Medical & Research Centre",
      link: "#"
    },
    {
      id: 2,
      image:socialTwo,
      title: "Goenka & Associates Social Welfare Trust",
      link: "#"
    }
  ];

    return (
        <>
            <div className="social-initiatives-wrapper">
                <div className="container">
                    <div className="content-grid">
                        {/* Title Section */}
                        <div className="title-section">
                            <h1 className="main-title">
                                Our {window.innerWidth < 768 ? 'Social' : ''}
                                {window.innerWidth >= 768 && <span className="break">Social</span>}
                                <span className="break">Initiatives</span> 
                            </h1>
                        </div>

                        {/* Initiatives Cards */}
                        <div className="cards-section">
                            <div className="cards-grid">
                                 {initiatives.map((initiative) => (
                                    <div key={initiative.id} className="initiative-card">
                                        <div className="image-container">
                                            <img src={initiative.image} alt={initiative.title} className="card-image" />
                                        </div>
                                        <div className="card-content">
                                            <h3 className="card-title">{initiative.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: initiative?.description }}/>
                                            {/* <a href={initiative.link} className="learn-more-btn">
                                                Learn More
                                            </a> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AssociationsPhotoBlock;