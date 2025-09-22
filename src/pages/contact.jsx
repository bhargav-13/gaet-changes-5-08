import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InsideTopBanner from "../include/InsideTopBanner";
import InsideMobileBlock from "../include/MobileInsideTopBanner";
import ApplyEnrolBlock from "../components/ApplyEnrolBlock";
import "./Contact.css";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ContactApi from "../include/ContactApi";
import { useApi } from "../hooks/useApi";
import { endpoints } from "../services/api";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet-async";
import Footer from "../include/Footer";

// Images:
import Phone from '../assets/Phone.png'
import Mail from '../assets/Mail.png'
import Map from '../assets/Map.png'


function ContactPage() {
  const {
    data: contactData,
    error: contactError,
    loading: contactLoading,
  } = useApi(endpoints.contactus);
  const {
    data: settingsData,
    error: settingsError,
    loading: settingsLoading,
  } = useApi(endpoints.settings);

  const schoolExtraInfo = [
    {
      name: "Gokuldham High School & Junior College",
      email: " ghs@gaet.edu.in",
      office:
        "Gokuldham, General Arun Kumar Vaidya Marg, Gokuldham Colony, Goregaon (E), Mumbai, Maharashtra 400063",
    },
    {
      name: "Yashodham High School & Junior College",
      email: "yhs@gaet.edu.in",
      office: "General A K Vaidya Marg, Yashodham, Goregaon East Mumbai 400063",
    },
    {
      name: "Vasant Vihar High School & Junior College (ICSE and ISC)",
      email: "vvhs@gaet.edu.in",
      office:
        "Vasant Vihar High School & Junior College Pokharan Rd Number 2, Vasant Vihar, Thane West, Thane, Maharashtra 400610",
    },
    {
      name: "Lakshdham High School (ICSE)",
      email: "lhs@gaet.edu.in",
      office:
        "Lakshdham High School Building,Gokuldham, Goregaon(East), Mumbai - 400063",
    },
    {
      name: "Thane Police School (CBSE)",
      email: " tps@gaet.edu.in",
      office:
        "Late Air Marshal Hemant Chitnis Marg,Kharkar Ali, Near Court Naka, Thane (W) - 4000 601, Maharashtra.",
    },
    {
      name: "GAET Counselling Center",
      email: "helpdesk@gaet.edu.in",
      office:
        "5VF8+9J3, General Arun Kumar Vaidya Marg, Yashodham, Goregaon, Mumbai, Maharashtra 400063",
    },
    {
      name: "GAET International School Aldeia",
      email: "helpdesk@gaet.edu.in",
      office:
        "GAET International School, near Grand Hyatt, Aldeia, Bambolim, Goa 403206",
      "color": "#A2AA84"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (contactLoading || settingsLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (contactError) return <div>Error: {contactError.message}</div>;
  if (settingsError) return <div>Error: {settingsError.message}</div>;
  if (!contactData || !settingsData) return null;

  return (
    <>
      <Helmet>
        {/* <title>{contactData?.seo?.meta_title || "GAET"}</title> */}
        <meta
          name="description"
          content={contactData?.seo?.meta_description || "GAET"}
        />
        <meta
          name="keywords"
          content={contactData?.seo?.meta_keywords || "GAET"}
        />
      </Helmet>

      <InsideTopBanner
        pageTitle={contactData?.top_section?.title}
        pageBreadcrumb="Governing Body"
        BackgrondBack={contactData?.top_section?.back_image}
        CircleFront={contactData?.top_section?.front_image}
      />
      <div className="breadcrumb-area">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="inner-content-wapper">
        <div className="contact-page">
          <div className="arrow">
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <Container>
            <h2>Require assistance?</h2>
            <div className="inner-flex">
              <div className="leftside-info">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce={true}
                  delay={300}
                >
                  <h3>Our Office</h3>
                  {/* <p>{settingsData?.settings?.address}</p> */}
                  <p>
                    <a 
                      href="https://maps.google.com/?q=Yashodham High School Building, Yashodham, Goregaon(East), Mumbai - 400063"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--blue-color)', textDecoration: 'none' }}
                    >
                      Yashodham High School Building, Yashodham, Goregaon(East),
                      Mumbai - 400063
                    </a>
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce={true}
                  delay={400}
                >
                  <h3>Contact</h3>
                  <p>
                    <a href="tel:+912240278222">+91-22-4027 8222</a>
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce={true}
                  delay={500}
                >
                  <h3>Social</h3>
                  <ContactApi />
                </ScrollAnimation>
              </div>
              <div className="map-area">
                <iframe
                  src={settingsData?.settings?.map_link}
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location of Goenka & Associates Educational Trust"
                ></iframe>
              </div>
            </div>
          </Container>
        </div>

        <div className="school-list-area">
          <div className="container">
            <h3 className="school-list-area-heading">Our Schools</h3>
            <div className="row">
              {schoolExtraInfo.map((school, index) => {
                // fallback contact number for Aldeia
                const contactNumber =
                  contactData?.school_list?.[index]?.contact_no ||
                  (school.name === "GAET International School Aldeia" ? "+91 90048 36427" : "N/A");

                // fallback color for Aldeia
                const schoolColor =
                  contactData?.school_list?.[index]?.color ||
                  (school.name === "GAET International School Aldeia" ? "#A2AA84" : "#ccc");

                return (
                  <div className="col-12 col-md-6 col-lg-6 mb-4" key={index}>
                    <div className="school-card" style={{ backgroundColor: schoolColor }}>
                      <h3>{school.name}</h3>

                      <p className="icon-line">
                        <a href={`tel:${contactNumber}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'white', textDecoration: 'none' }}>
                          <img src={Phone} alt="Phone" className="icon contact" style={{ cursor: 'pointer' }} />
                          <span className="icon-line-span">{contactNumber}</span>
                        </a>
                      </p>

                      <p className="icon-line">
                        <a href={`mailto:${school.email}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'white', textDecoration: 'none' }}>
                          <img src={Mail} alt="Email" className="icon" style={{ cursor: 'pointer' }} />
                          <span>{school.email}</span>
                        </a>
                      </p>

                      <p className="icon-line">
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(school.office)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'white', textDecoration: 'none' }}
                        >
                          <img src={Map} alt="Map" className="icon map" style={{ cursor: 'pointer' }} />
                          <span>{school.office}</span>
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ApplyEnrolBlock />
      </div>
      <Footer />
    </>
  );
}
export default ContactPage;
