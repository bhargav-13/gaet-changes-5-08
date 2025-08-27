import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import InsideTopBanner from "../include/InsideTopBanner";
import InsideMobileBlock from "../include/MobileInsideTopBanner";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Admission.css";
import { endpoints } from "../services/api";
import Loader from "../components/Loader";
import { useApi } from "../hooks/useApi";
import { Helmet } from "react-helmet-async";
import Footer from "../include/Footer";

function AdmissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, loading } = useApi(endpoints.admission);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;
  console.log(data.contact_us.front_image);

  return (
    <>
      <Helmet>
        {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
        <meta
          name="description"
          content={data?.seo?.meta_description || "GAET"}
        />
        <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
      </Helmet>

      <InsideTopBanner
        pageTitle={data.top_section.title}
        pageBreadcrumb="Addmission"
        BackgrondBack={data.top_section.back_image}
        CircleFront={data.top_section.front_image}
      />
      {/* <InsideMobileBlock
        pageTitle={data.top_section.title}
        pageBreadcrumb="Addmission"
        BackgrondBack={data.top_section.back_image}
        CircleFront={data.top_section.front_image}
      /> */}
      <div className="breadcrumb-area">
        <Breadcrumb>
          <Breadcrumb.Item active>Admission</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="inner-content-wapper">
        <div className="two-photo-area">
          <div className="left-part">
            <div className="photo-block">
              <img src={data.online_admission[0].image} alt="" />
            </div>
            <div className="content-block">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={500}
              >
                <h2>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.online_admission[0].title,
                    }}
                  />
                </h2>
                <Link
                  to={data.online_admission[0].link}
                  className="common-button-more cyan"
                >
                  Click Here
                </Link>
              </ScrollAnimation>
            </div>
          </div>
          <div className="right-part">
            <div className="photo-block">
              <img src={data.online_admission[1].image} alt="" />
            </div>
            <div className="content-block">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={500}
              >
                <h2>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.online_admission[1].title,
                    }}
                  />
                </h2>
                <Link
                  to={data.online_admission[1].link}
                  className="common-button-more cyan"
                >
                  Click Here
                </Link>
              </ScrollAnimation>
            </div>
          </div>
          <div className="full-part">
            <img src={data.contact_us[0].back_image} alt="" />
            <div className="center-content">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={500}
              >
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.contact_us[0].title,
                    }}
                  />
                </p>

                <Link
                  to={data.contact_us[0].link}
                  className="common-button-more blue"
                >
                  Contact Us
                </Link>
              </ScrollAnimation>
            </div>
            <div className="kids-photo">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={800}
              >
                <img src={data.contact_us[0].front_image} alt="" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="content-block">
        <div className="inner-top-content-block">
          <div className="row">
            <div className="col-10">
              <h3 className="admission-name">
                To Apply for <br />{" "}
                <span className="span-blue">
                  Inhouse Admissions <br />{" "}
                </span>{" "}
                for A.Y. 2024-2025
              </h3>
            </div>
            <div className="col-2 click-here-btn-row">
              <button className="click-here-btn">Click Here</button>
            </div>
          </div>
        </div>
        <div className="inner-top-content-block">
          <div className="row">
            <div className="col-10">
              <h3 className="admission-name">
                To Apply for <br />{" "}
                <span className="span-blue">
                  {" "}
                  Online Admissions <br />{" "}
                </span>{" "}
                for A.Y. 2024-2025
              </h3>
            </div>
            <div className="col-2 click-here-btn-row">
              <button className="click-here-btn">Click Here</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default AdmissionPage;
