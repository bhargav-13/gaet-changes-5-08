import React from 'react';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';

function ContactApi() {
    const { data: settings, error } = useApi(endpoints.settings);

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!settings) return null;

    const { facebook, instagram, linked_in, email_id, twitter, youtube, } = settings?.settings || {};

    const socialLinks = [
        { url: facebook, icon: '/images/facebook.svg', name: 'Facebook' },
        { url: instagram, icon: '/images/insta.svg', name: 'Instagram' },
        { url: linked_in, icon: '/images/linkdin.svg', name: 'LinkedIn' },
        { url: `mailto:${email_id}`, icon: '/images/mail.svg', name: 'Email' },
        { url: twitter, icon: '/images/xicon.svg', name: 'Twitter' },
        { url: youtube, icon: '/images/youtube.svg', name: 'YouTube' }
    ];

    return (
        <ul className='social'>
            {socialLinks.map((social, index) => (
                <li key={index}>
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${social.name} page`}
                    >
                        <img src={social.icon} alt={social.name} />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ContactApi;