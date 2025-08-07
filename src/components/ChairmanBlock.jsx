import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/Container';
import './ChairmanBlock.css';
import { fetchData } from './Api';

const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    const decodedText = txt.value;

    // Remove all HTML tags
    return decodedText.replace(/<\/?[^>]+(>|$)/g, "");
};

function ChairmanBlock() {

    const [founder, setFounder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFounderData = async () => {
            try {
                const response = await fetchData();
                setFounder(response.data.founder_list);
            } catch (error) {
                setError(error.response ? error.response.statusText : error.message);
            }
        };

        fetchFounderData();
    }, []);

    if (error) return <div>Error: {error}</div>;

    // Ensure the content is not displayed until data is available
    if (!founder) return null;

    return (
        <>
            <div className='chairman-section'>
                <Container>
                    <div className='content-area'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                        <div className="message">{decodeHtml(founder.title)}</div>

                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}  delay={1000}>
                        <div className='bottom-bar'>
                            <div className='name'>{founder.name}</div>
                            <p>{founder.designation}<br/>{founder.description}</p>
                            <Link to={founder.link} className='btn-more'>Read More</Link>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className='chairman-photo'>
                            <img src={founder.image} alt="LATE SHRI K.M GOENKA" />
                    </div>
                </Container>
                
            </div>
        </>
    );
}
export default ChairmanBlock;