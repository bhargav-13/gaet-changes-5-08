import React, { useEffect, useState } from 'react';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Faq.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';

function PrivacyPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, loading } = useApi(endpoints.supportLegal, { page_id: 27 });
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!loading) {
      // Delay hiding the loader to allow fade-out
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 6000); // should match fade-out time

      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  if (loading) return <div><Loader /></div>;

  return (
    <>

      <Helmet>
        {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
        <meta name="description" content={data?.seo?.meta_description || "GAET"} />
        <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
      </Helmet>

      <div className='top-title-bar'>
        <h1>Terms & Policies</h1>
        <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
      </div>

      <div className='faq-page'>
        <div className="content-block">
          <div className="content">
            {data?.details?.slice().reverse().map((supportLegal, index) => (
              <div key={index}>
                <h2>{supportLegal.title || 'Privacy Policy'}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: supportLegal.description || '<p>No details available.</p>'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ApplyEnrolBlock />
      <Footer />
    </>
  );
}
export default PrivacyPage;