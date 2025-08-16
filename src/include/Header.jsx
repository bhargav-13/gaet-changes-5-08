import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import "./header.css";
import ContactApi from "./ContactApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("");
    const [visibleSubmenu, setVisibleSubmenu] = useState(null);

    const location = useLocation();

    const isWhiteHeader = ["/faq", "/associations", "/our-social-initiatives", "/privacy", "/accessibility", "/terms&policies"].includes(location.pathname);
    const isFixedHeader = [
        "/about",
        "/vision-mission",
        "/about-our-founders",
        "/governing-body",
        "/journey-of-gaet",
        "/the-gaet-advantage",
        "/photo-gallery",
        "/admission",
        "/contact-us",
        "/our-school",
    ].includes(location.pathname);

    // Handle scroll for header styling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fetch menu data
    useEffect(() => {
        axios
            .post(
                "https://admin.gaet.edu.in/api/menu",
                { branch_id: 1 },
                { headers: { "x-api-key": "123456" } }
            )
            .then((response) => {
                setData(response.data);
                setLoading(false);
                if (response.data.data.menu_list.length > 0) {
                    const defaultMenu = response.data.data.menu_list[0].title;
                    const defaultMenuimage = response.data.data.menu_list[0];
                    const imagePath = process.env.PUBLIC_URL + defaultMenuimage.image;
                    setActiveTab(defaultMenu);
                    setVisibleSubmenu(defaultMenu);
                    setActiveImage(imagePath);
                }
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p></p>;
    if (error) return <p>Error: {error}</p>;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSubmenuChange = (imageSrc, menuTitle) => {
        setActiveImage(imageSrc);
        setVisibleSubmenu(menuTitle);
        setActiveTab(menuTitle);
    };

    return (
        <>
            {/* Main Header */}
            <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
                <Container className="d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation - visible on large screens only */}
                    <nav className="desktop-nav d-none d-lg-flex">
                        {/* Schools with dropdown */}
                        <div className="nav-item">
                            <span className="nav-link">Schools <FontAwesomeIcon icon={faAngleDown} /></span>
                            <ul className="submenu">
                                {data?.data?.menu_list
                                    ?.find((menu) => menu.title === "Schools")
                                    ?.menu_item.map((submenu, subIndex) => (
                                        <li key={`${submenu.id}-${subIndex}`}>
                                            <Link to={submenu.menu_link}>{submenu.menu_name}</Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        {/* About us with dropdown */}
                        <div className="nav-item">
                            <span className="nav-link">About us <FontAwesomeIcon icon={faAngleDown} /></span>
                            <ul className="submenu">
                                {data?.data?.menu_list
                                    ?.find((menu) => menu.title.toLowerCase() === "about us")
                                    ?.menu_item.map((submenu, subIndex) => (
                                        <li key={`${submenu.id}-${subIndex}`}>
                                            {submenu.id === 13 || submenu.id === 15 ? (
                                                <a
                                                    href={submenu.menu_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {submenu.menu_name}
                                                </a>
                                            ) : (
                                                <Link to={submenu.menu_link}>{submenu.menu_name}</Link>
                                            )}
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        {/* Other static links */}
                        <Link to="/admission" className="nav-link">
                            Admissions
                        </Link>
                        <Link to="/associations" className="nav-link">
                            Associations
                        </Link>
                        <Link to="#" className="nav-link">
                            Why GAET
                        </Link>
                    </nav>


                    {/* Hamburger menu for mobile (unchanged) */}
                    <button
                        className={isMenuOpen ? "btn-menu active d-lg-none" : "btn-menu d-lg-none"}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={isMenuOpen ? "full-menu-area open" : "full-menu-area"}>
                <div className="topbar">
                    <Container>
                        <div className="logo">
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + "/images/white-logo.png"} alt="logo" />
                            </Link>
                        </div>
                        <div className="rightside">
                            {/* Close button for mobile menu */}
                            <button className="btn-close" onClick={toggleMenu}></button>
                        </div>
                    </Container>
                </div>

                {/* Mobile Navigation Menu */}
                <div className="inner-flex">
                    <div className="leftpart">
                        <div className="menu-area">
                            <Tab.Container activeKey={activeTab}>
                                {/* Dynamic Navigation Menu from fetched data */}
                                <Nav variant="pills" className="flex-column">
                                    {data.data.menu_list.map((menu, index) => (
                                        <Nav.Item key={`${menu.id}-${index}`}>
                                            <Nav.Link
                                                eventKey={menu.title}
                                                onClick={() => handleSubmenuChange(process.env.PUBLIC_URL + menu.image, menu.title)}
                                                onMouseEnter={() => handleSubmenuChange(process.env.PUBLIC_URL + menu.image, menu.title)}
                                            >
                                                {menu.title}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/contact-us" onClick={toggleMenu}>
                                            Contact
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                {/* Dynamic Content */}
                                <Tab.Content>
                                    {data.data.menu_list.map((menu, index) => (
                                        <Tab.Pane
                                            key={`${menu.id}-${index}`}
                                            eventKey={menu.title}
                                            className={visibleSubmenu === menu.title ? "submenu-visible" : ""}
                                        >
                                            <ul className="submenu">
                                                {menu.menu_item.map((submenu, subIndex) => (
                                                    <li key={`${submenu.id}-${subIndex}`}>
                                                        {submenu.id === 13 || submenu.id === 15 ? (
                                                            <a
                                                                href={submenu.menu_link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={toggleMenu}
                                                            >
                                                                {submenu.menu_name}
                                                            </a>
                                                        ) : (
                                                            <Link to={submenu.menu_link} onClick={toggleMenu}>
                                                                {submenu.menu_name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Tab.Container>
                        </div>

                        {/* Additional Links and ContactApi */}
                        <div className="bottompart">
                            <ul className="link">
                                <li><Link to="/admission" onClick={toggleMenu}>Admissions</Link></li>
                                <li><Link to="/the-gaet-advantage" onClick={toggleMenu}>Safety</Link></li>
                                <li><Link to="/associations" onClick={toggleMenu}>Associations</Link></li>
                                <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
                            </ul>
                            <ContactApi />
                        </div>
                    </div>

                    {/* Right part: Image */}
                    <div className="rightpart">
                        <img src={activeImage || process.env.PUBLIC_URL + "/images/school-1.jpg"} className="photo1" alt="Menu Illustration" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;