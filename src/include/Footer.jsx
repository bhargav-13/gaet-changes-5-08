import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import ContactApi from './ContactApi';
import './footer.css';

function Footer() {
  const { data, error, loading } = useApi(endpoints.settings);

  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;
  if (loading) return <div><Loader /></div>;

  // fallback values if API doesn’t return
  const contactNo = data?.settings?.contact_no || "+91 2240278222";
  const email = data?.settings?.email || "gaetedu@gaet.edu.in";
  const address =
    data?.settings?.head_office_address ||
    "Yashodham High School Building, Yashodham, Goregaon(East), Mumbai - 400063";

  return (
    <footer>
      <div className="footer-area">
        <Container>
          <div className="inner-flex">
            {/* LEFT SIDE */}
            <div className="leftside">
              <div className="logo">
                <Link to="/">
                  <img src={data?.settings?.footer_logo} alt="GAET Logo" />
                </Link>
              </div>
              <div className="middlepart">
                <h3>Notice</h3>
                <p>
                  Goenka and Associates Educational Trust does not accept any
                  donation for granting Admission to its Schools. If any Agent
                  or individual approaches you & demands donation in the name of
                  the Trust, please inform the Trust Office immediately - Contact
                  No. 022 40278222 or meet the Trustees at the address given in
                  our Contact page.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="rightside">
              <div className="toppart">
                {/* CONTACT + EMAIL */}
                <div className="inner-part contact-email">
                  <div className="contact">
                    <h3>Contact</h3>
                    <p>
                      +91{" "}
                      <a href={`tel:${contactNo}`}>
                        {contactNo}
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3>Email</h3>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                </div>

                {/* ADDRESS + TIMINGS */}
                <div className="inner-part address-timings">
                  <div>
                    <h3>Trust Head Office</h3>
                    <p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {address}
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3>Timings</h3>
                    <p>09:30 a.m - 05:30 p.m (Mon-Fri) 2nd & 4th Saturdays Closed</p>
                  </div>
                </div>

                {/* LINKS */}
                <div className="last-part">
                  <ul className="link">
                    <li>
                      <Link to="/admission">Admissions</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* BOTTOM PART */}
              <div className="bottompart">
                <h3>Connect with us</h3>
                <ContactApi />
                <div className="copyright">
                  <p>
                    ©{new Date().getFullYear()} Goenka & Associates Educational Trust
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
