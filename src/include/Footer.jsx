import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import ContactApi from './ContactApi';
import './footer.css';


// New

function Footer() {
  // const { data, settings, error } = useApi(endpoints.settings);
  const { data, error, loading } = useApi(endpoints.settings);


  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;
    if (loading) return <div><Loader /></div>;




  return (
    <footer>
            <div className='footer-area'>
        <Container>
                    <div className='inner-flex'>
                        <div className='leftside'>
              {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}> */}
                            <div className='logo'>
                <Link to="/">
                  <img src={data?.settings?.footer_logo} alt="GAET Logo" />
                </Link>

              </div>
                            <div className='middlepart'>
                <h3>Notice</h3>
                <p>
                  Goenka and Associates Educational Trust does not accept any
                  donation for granting Admission to its Schools. If any Agent
                  or individual approaches you & demands donation in the name of
                  the Trust, please inform the Trust Office immediately -
                  Contact No. 022 40278222 or meet the Trustees at the address
                  given in our Contact page.
                </p>
              </div>
              {/* </ScrollAnimation> */}
            </div>
            <div className="rightside">
              <div className="toppart">
                <div className="inner-part contact-email">
                  <div className="contact">
                    <h3>Contact</h3>
                    <p>
                      <Link
                        to={`tel:${
                          data?.settings?.contact_no || "02240278222"
                        }`}
                      >
                        {data?.settings?.contact_no || "022 40278222"}
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3>Email</h3>
                    <p>gaetedu@gaet.edu.in</p>
                  </div>
                </div>
                <div className="inner-part address-timings">
                  <div>
                    <h3>Trust Head Office</h3>
                    <p>
                      Yashodham High School Building, Yashodham, Goregaon(East),
                      Mumbai - 400063
                    </p>
                  </div>

                  <div>
                    <h3>Timimgs</h3>
                    <p>
                      09:30 a.m - 05:30 p.m (M  on-Fri)2nd & 4th Saturdays Closed
                    </p>  
                  </div>
                </div>
                <div className="last-part">
                  <ul className="link">
                    <li>
                      <Link to="/admission">Admissions</Link>
                    </li>
                    <li>
                      <Link to="/the-gaet-advantage">Safety</Link>
                    </li>
                    <li>
                      <Link to="/associations">Associations</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="middlePart-separator">
                {/* <h3>Notice</h3>
                                <p>
                                    Goenka and Associates Educational Trust does not accept any donation for granting Admission to its Schools. If any Agent or individual approaches you & demands donation in the name of the Trust, please inform the Trust Office immediately - Contact No. 022 40278222 or meet the Trustees at the address given in our Contact page.
                                </p> */}
              </div>
              <div className="bottompart">
                <h3>Connect with us</h3>
                <ContactApi />
                <div className="copyright">
                  <p>
                    ©{new Date().getFullYear()} Goenka & Associates Educational
                    Trust
                  </p>
                  <div className="d-flex">
                    <Link to="/terms&policies">Terms & Policies</Link>
                    <Link to="/accessibility">Accessibility</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="rays">
          <img src="/images/footer-rays.svg" alt="Decorative rays" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
