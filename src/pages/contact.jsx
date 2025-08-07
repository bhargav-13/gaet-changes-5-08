import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Contact.css';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ContactApi from '../include/ContactApi';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';



function ContactPage() {

    const { data: contactData, error: contactError, loading: contactLoading } = useApi(endpoints.contactus);
    const { data: settingsData, error: settingsError, loading: settingsLoading } = useApi(endpoints.settings);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (contactLoading || settingsLoading) return <div><Loader /></div>;
    if (contactError) return <div>Error: {contactError.message}</div>;
    if (settingsError) return <div>Error: {settingsError.message}</div>;
    if (!contactData || !settingsData) return null;


    return (
        <>
            <Helmet>
                {/* <title>{contactData?.seo?.meta_title || "GAET"}</title> */}
                <meta name="description" content={contactData?.seo?.meta_description || "GAET"} />
                <meta name="keywords" content={contactData?.seo?.meta_keywords || "GAET"} />
            </Helmet>


            <InsideTopBanner
                pageTitle={contactData?.top_section?.title}
                pageBreadcrumb="Governing Body"
                BackgrondBack={contactData?.top_section?.back_image}
                CircleFront={contactData?.top_section?.front_image}
            />
            <InsideMobileBlock
                pageTitle={contactData?.top_section?.title}
                pageBreadcrumb="Governing Body"
                BackgrondBack={contactData?.top_section?.back_image}
                CircleFront={contactData?.top_section?.front_image}
            />
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='inner-content-wapper'>
                <div className='contact-page'>
                    <div className='arrow'>
                        <div className='top'></div>
                        <div className='bottom'></div>
                    </div>
                    <Container>

                        <h2>Require assistance?</h2>
                        <div className='inner-flex'>
                            <div className='leftside-info'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                                    <h3>Office</h3>
                                    <p>{settingsData?.settings?.address}</p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <h3>Contact</h3>
                                    <p><Link to="/">{settingsData?.settings?.contact_no}</Link></p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                    <h3>Connect with us</h3>
                                    <ContactApi />
                                </ScrollAnimation>
                            </div>
                            <div className='map-area'>
                                <iframe
                                    src={settingsData?.settings?.map_link}
                                    width="600"
                                    height="450"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps location of Goenka & Associates Educational Trust">
                                </iframe>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className='school-list-area'>
                    <Container>
                        <h2>Our Schools</h2>
                        {contactData?.school_list?.map((school, index) => (
                            <ul className="list">
                                <li key={index}
                                    style={{ '--hover-color': school.color }}>
                                    <h3>{school.name.replace(/ \(.*\)$/, '')}</h3>
                                    <div className='btn-flex'>
                                        <Link to={school.google_map_link} target="_blank" rel="noopener noreferrer">
                                            <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.602346 12.1682C-0.848056 8.34537 0.388115 4.27192 3.5871 1.81292C6.7224 -0.598324 11.1605 -0.604293 14.3073 1.79502C17.5121 4.23909 19.0059 8.4528 17.2631 12.0935C14.9761 16.8713 12.1534 21.3774 9.56241 26C9.30186 25.9224 2.51884 17.2145 0.602346 12.1682ZM13.8268 9.33912C13.8702 6.55783 11.696 4.2749 8.99209 4.25401C6.30552 4.23611 4.0561 6.53097 4.07057 9.27645C4.08505 11.9473 6.23894 14.2094 8.83866 14.281C11.5165 14.3556 13.7833 12.1115 13.8268 9.33912Z" fill={school.color} />
                                            </svg>
                                        </Link>
                                        <Link to={`tel:+91${school.contact_no}`}>
                                            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.09389 5.97434C8.35487 7.71329 8.13275 9.12713 6.43361 10.0399C6.00604 10.2695 5.60903 11.6535 5.84779 12.0353C7.211 14.2098 8.71302 16.2947 10.315 18.2723C10.6176 18.6451 11.8004 18.6988 12.2085 18.3707C13.555 17.288 14.7794 17.5654 16.0843 18.2932C16.8839 18.7406 17.714 19.1313 18.4998 19.6056C20.2628 20.6645 20.5043 22.311 19.0523 23.8501C17.1282 25.8903 14.7961 26.4511 12.2196 25.6487C11.3617 25.3802 10.4455 25.0581 9.75139 24.4854C4.6123 20.2409 0.903059 14.9286 0.0562627 7.85646C-0.318549 4.72456 1.21123 2.22201 3.69332 0.554641C5.53128 -0.680226 7.33038 0.223554 7.7163 2.50537C7.91342 3.64777 7.97173 4.81702 8.09389 5.97434Z"
                                                    fill={school.color} />
                                            </svg>
                                        </Link>
                                        <Link to={`#`}>
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.66537 9.16683V16.5002L21.9987 23.8335L40.332 16.5002V9.16683C40.332 8.6806 40.1389 8.21428 39.7951 7.87047C39.4512 7.52665 38.9849 7.3335 38.4987 7.3335H5.4987C5.01247 7.3335 4.54615 7.52665 4.20234 7.87047C3.85852 8.21428 3.66537 8.6806 3.66537 9.16683ZM40.332 20.4492V34.8335C40.332 35.3197 40.1389 35.786 39.7951 36.1299C39.4512 36.4737 38.9849 36.6668 38.4987 36.6668H5.4987C5.01247 36.6668 4.54615 36.4737 4.20234 36.1299C3.85852 35.786 3.66537 35.3197 3.66537 34.8335V20.4492L21.9987 27.7825L40.332 20.4492Z" fill={school.color} />
                                            </svg>


                                        </Link>
                                        <Link to={'#'}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.3691 19.9009C29.4791 20.9794 29.5422 22.0232 29.5422 23.0001C29.5422 24.8288 29.3212 26.8938 28.9831 28.9817C26.8953 29.3198 24.8303 29.5408 23.0016 29.5408C21.1811 29.5408 19.1167 29.3203 17.0199 28.9811C16.6819 26.8933 16.4609 24.8286 16.4609 23.0001C16.4609 22.0236 16.524 20.9796 16.6342 19.9009C18.8349 20.2532 21.0303 20.4845 23.0016 20.4845C24.973 20.4845 27.1684 20.2532 29.3691 19.9009Z" fill={school.color} />
                                                <path d="M32.346 19.3572C32.4821 20.6193 32.5612 21.8481 32.5612 23C32.5612 24.6807 32.3929 26.5246 32.125 28.396C35.925 27.6031 39.4373 26.5901 41.3189 26.0134C41.9268 25.8271 42.1658 25.7529 42.4863 25.6247C42.6465 25.5607 42.7934 25.4955 42.9848 25.4041C43.0786 24.6157 43.1269 23.8134 43.1269 23C43.1269 20.8495 42.7895 18.7778 42.1651 16.835L42.0024 16.8862C40.0349 17.4847 36.3518 18.5428 32.346 19.3572Z" fill={school.color} />
                                                <path d="M41.0182 14.0291C39.0404 14.6285 35.608 15.6025 31.9297 16.3608C31.0824 11.2111 29.5973 6.07496 28.8828 3.74902C34.1958 5.37108 38.5756 9.13235 41.0182 14.0291Z" fill={school.color} />
                                                <path d="M28.9631 16.9094C26.8808 17.2458 24.8223 17.4656 22.999 17.4656C21.1757 17.4656 19.1173 17.2458 17.0352 16.9094C17.833 12.0368 19.2573 7.0592 19.9856 4.68305C20.1719 4.07495 20.2461 3.83609 20.3743 3.51551C20.4383 3.35536 20.5035 3.20846 20.5949 3.0171C21.3832 2.92326 22.1856 2.875 22.999 2.875C23.8488 2.875 24.6862 2.92767 25.5085 3.02992C25.5259 3.09664 25.542 3.15635 25.5579 3.21283C25.6051 3.37972 25.6789 3.61426 25.8027 4.00783L25.8157 4.04917C26.4365 6.02261 28.0818 11.5269 28.9631 16.9094Z" fill={school.color} />
                                                <path d="M14.0687 16.3607C14.9122 11.2338 16.3875 6.12529 17.1006 3.79855L17.1158 3.74902C11.8027 5.37106 7.42297 9.13233 4.98047 14.029C6.95814 14.6284 10.3905 15.6024 14.0687 16.3607Z" fill={school.color} />
                                                <path d="M3.83686 16.835C3.2123 18.7779 2.875 20.8495 2.875 23C2.875 23.8412 2.92662 24.6704 3.02686 25.4846L3.34403 25.5904L3.34656 25.5912L3.34966 25.5923L3.35185 25.5929C3.45393 25.6268 6.44585 26.6148 10.386 27.5952C11.4978 27.8718 12.6751 28.1451 13.8768 28.3956C13.6088 26.5244 13.4406 24.6807 13.4406 23C13.4406 21.8477 13.5197 20.6189 13.6557 19.3572C9.64904 18.5425 5.96501 17.4841 3.99811 16.8856L3.98442 16.8815L3.83686 16.835Z" fill={school.color} />
                                                <path d="M23.0013 32.5593C24.682 32.5593 26.5259 32.391 28.3973 32.123C27.6044 35.923 26.5914 39.4353 26.0147 41.3167C25.8284 41.9249 25.7542 42.1637 25.626 42.4844C25.562 42.6446 25.4968 42.7914 25.4054 42.9829C24.6171 43.0766 23.8147 43.1249 23.0013 43.1249C22.1879 43.1249 21.3856 43.0766 20.5972 42.9829C20.5058 42.7914 20.4406 42.6446 20.3766 42.4844C20.2484 42.1639 20.1742 41.9249 19.9879 41.3169C19.4112 39.4355 18.3984 35.9234 17.6055 32.1238C19.4706 32.3908 21.3148 32.5593 23.0013 32.5593Z" fill={school.color} />
                                                <path d="M9.65818 30.5249C7.16657 29.9048 5.04448 29.2821 3.75 28.8848C5.6985 35.2673 10.734 40.3027 17.1166 42.2512L17.1014 42.2018C16.4787 40.1701 15.2749 36.0176 14.4181 31.5838C12.7517 31.2616 11.1316 30.8913 9.65818 30.5249Z" fill={school.color} />
                                                <path d="M42.1998 28.8999C40.1681 29.5226 36.0153 30.7265 31.5813 31.5832C30.7245 36.0173 29.5207 40.1699 28.898 42.2018L28.8828 42.2512C35.2653 40.3027 40.3008 35.2673 42.2493 28.8848L42.1998 28.8999Z" fill={school.color} />
                                                <path d="M3.08594 25.5356C3.15561 25.5447 3.2124 25.5542 3.23124 25.5585C3.24774 25.5625 3.2736 25.5694 3.28297 25.5719L3.30369 25.5778L3.31485 25.5813L3.32658 25.5849L3.33641 25.588C3.33089 25.5862 3.21907 25.5583 3.08594 25.5356Z" fill={school.color} />
                                            </svg>

                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        ))}
                    </Container>
                </div>

                <ApplyEnrolBlock />
            </div>
            <Footer />
        </>
    );
}
export default ContactPage;