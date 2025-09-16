import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './PhotoGallery.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';



function PhotoGalleryPage() {
    const [visibleImages, setVisibleImages] = useState(13); // Initial count of images to show
    const [isExpanded, setIsExpanded] = useState(false); // To track "View More" or "View Less"
    const { data, error, loading } = useApi(endpoints.photoGallery);
    useEffect(() => {
        window.scrollTo(0, 0);

        // Initialize Fancybox when the component mounts
        Fancybox.bind("[data-fancybox='gallery']", {
            infinite: true,
            keyboard: true,
        });

        return () => {
            // Cleanup Fancybox bindings on unmount
            Fancybox.destroy();
        };
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;
    if (loading) return <div><Loader /></div>;


    const toggleImages = () => {
        if (isExpanded) {
            // Reset to initial 10 images
            setVisibleImages(12);
        } else {
            // Show all images
            setVisibleImages(data.gallery_list.length);
        }
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

    return (
        <>
            <Helmet>
                {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
                <meta name="description" content={data?.seo?.meta_description || "GAET"} />
                <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
            </Helmet>

            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageBreadcrumb="Governing Body"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            />
            {/* <InsideMobileBlock
                pageTitle={data.top_section.title}
                pageBreadcrumb="Governing Body"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            /> */}
            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>Photo Gallery</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='inner-content-wapper'>
                <div className='photo-gallery-area'>
                    <div className='inside-block'>
                        {/* Render images from API */}
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                            <Masonry columnsCount={4} gutter="10px" className="my-masonry-wrapper">
                                {data.gallery_list.slice(0, visibleImages).map((gallery, index) => (
                                    <a
                                        href={gallery.image}
                                        data-fancybox="gallery"
                                        key={index}
                                    >
                                        <img
                                            src={gallery.image}
                                            alt={gallery.title || "Gallery Image"}
                                            style={{ width: "100%", display: "block" }}
                                        />
                                    </a>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>

                    <div className='text-center mt-4 mt-lg-5'>
                        <Button variant="more" onClick={toggleImages}>
                            {isExpanded ? "View Less" : "View More"}
                        </Button>
                    </div>
                </div>

                <ApplyEnrolBlock />
            </div>
            <Footer />
        </>
    );
}

export default PhotoGalleryPage;

