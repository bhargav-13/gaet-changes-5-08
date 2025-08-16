import React, { Suspense, useMemo  } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Header from "../src/include/Header";
// import Footer from "./include/Footer";
import ScrollToTopOnRouteChange from "./include/ScrollToTop";

import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import Favicon from "react-favicon";
import PopupMessage from "./components/PopupMessage";
import Loader from "./components/Loader";

const HomePage = React.lazy(() => import("./pages/home"));
const AboutPage = React.lazy(() => import("./pages/about"));
const VisionMissionPage = React.lazy(() => import("./pages/vision-mission"));
const AboutOurFoundersPage = React.lazy(() => import("./pages/about-founders"));
const GoverningBodyPage = React.lazy(() => import("./pages/governing-body"));
const JourneyGaetPage = React.lazy(() => import("./pages/journey-of-gaet"));
const TheGaetAdvantagePage = React.lazy(() => import("./pages/the-gaet-advantage"));
const PhotoGalleryPage = React.lazy(() => import("./pages/photo-gallery"));
const AdmissionPage = React.lazy(() => import("./pages/admission"));
const AssociationsPage = React.lazy(() => import("./pages/associations"));
const FaqPage = React.lazy(() => import("./pages/faq"));
const ContactPage = React.lazy(() => import("./pages/contact"));
const OurSchool = React.lazy(() => import("./pages/ourSchool"));
const GonekaAssociates = React.lazy(() => import("./pages/GonekaAssociates"));
const PrivacyPage = React.lazy(() => import("./pages/Privacy"));
const Accessibility = React.lazy(() => import("./pages/AccessibilityPage"));
const Announcements = React.lazy(() => import("./pages/AnnouncementEvents"));


function App() {

  const scrollTopSvgPath = useMemo(() => "M17.71,11.29l-5-5a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-5,5a1,1,0,0,0,1.42,1.42L11,9.41V17a1,1,0,0,0,2,0V9.41l3.29,3.3a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,11.29Z", []);

  return (
    <div className="App">
      <Favicon url={process.env.PUBLIC_URL + "/images/favicon.png"} />
      <HelmetProvider>
        <Helmet>
          <title>Goenka & Associates Educational Trust</title>
          <link rel="icon" href={process.env.PUBLIC_URL + "/images/favicon.png"} />
        </Helmet>
        {/* <PopupMessage /> */}
        {/* <Suspense fallback={<div><Loader/></div>}> */}
        <Suspense>
          <Router>
            <ScrollToTopOnRouteChange />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/our-school" element={<OurSchool />} /> */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/vision-mission" element={<VisionMissionPage />} />
                <Route
                  path="/about-our-founders"
                  element={<AboutOurFoundersPage />}
                />
                <Route path="/governing-body" element={<GoverningBodyPage />} />
                <Route path="/journey-of-gaet" element={<JourneyGaetPage />} />
                <Route
                  path="/the-gaet-advantage"
                  element={<TheGaetAdvantagePage />}
                />
                <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
                <Route path="/admission" element={<AdmissionPage />} />
                <Route path="/associations" element={<AssociationsPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/terms&policies" element={<PrivacyPage />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route
                  path="/our-social-initiatives"
                  element={<GonekaAssociates />}
                />
              </Routes>
            </main>
            {/* <Footer /> */}
          </Router>
        </Suspense>
      </HelmetProvider>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath={scrollTopSvgPath}
      />
    </div>
  );
}

export default React.memo(App);
