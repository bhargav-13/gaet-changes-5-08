import React, { useEffect, useState } from 'react'
import './ProjectUnderWay.css'
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';

const ProjectUnderWay = () => {

    const { data, error, loading } = useApi(endpoints.journey);

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;
  if (loading) return <div><Loader /></div>;

    return (
        <>                
            <section>
                <div className="project-underway">
                    <div className="left-panel">
                        <h1>Projects Underway</h1>
                        <p dangerouslySetInnerHTML={{ __html: data.projects_underway_description || 'description' }} />
                    </div>
                    <div className="right-panel">
                        {data.projects_underway.map((underway, index) => (
                            <div className="project-card" key={index}>
                                <img
                                    src={underway.image || process.env.PUBLIC_URL + '/images/DSC08444 1.png'}
                                    alt="Students in classroom with purple uniforms"
                                />
                                <h2>{underway.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProjectUnderWay