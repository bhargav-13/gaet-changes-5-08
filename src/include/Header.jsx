import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import axios from "axios";
import "./header.css";
import ContactApi from "./ContactApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                const menuList = response.data?.data?.menu_list;
                if (menuList?.length > 0) {
                    const defaultMenu = menuList[0];
                    setActiveTab(defaultMenu.title);
                    setVisibleSubmenu(defaultMenu.title);
                    setActiveImage(process.env.PUBLIC_URL + defaultMenu.image);
                }
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSubmenuChange = (imageSrc, menuTitle) => {
        setActiveImage(imageSrc);
        setVisibleSubmenu(menuTitle);
        setActiveTab(menuTitle);
    };

    if (loading) return null;
    if (error) return <p>Error: {error}</p>;

    // Helper: remove board names from school titles
    const cleanSchoolName = (name) =>
        name.replace(/\s*\(.*?(ICSE|ISC|CBSE|CBSC).*?\)/gi, "").trim();

    return (
        <>
            <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
                <Container className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
                        </Link>
                    </div>

                    <nav className="desktop-nav d-none d-lg-flex">
                        {/* Schools dropdown */}
                        <div className={`nav-item ${activeTab === "Schools" ? "active" : ""}`}>
                            <span className="nav-link">
                                Schools <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                            <ul className="submenu">
                                {data?.data?.menu_list
                                    ?.find((menu) => menu.title === "Schools")
                                    ?.menu_item.map((submenu, subIndex) => (
                                        <li key={`${submenu.id}-${subIndex}`}>
                                            <Link to={submenu.menu_link}>
                                                {cleanSchoolName(submenu.menu_name)}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        {/* About Us dropdown */}
                        <div className={`nav-item ${activeTab === "About us" ? "active" : ""}`}>
                            <span className="nav-link">
                                About us <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                            <ul className="submenu">
                                {data?.data?.menu_list
                                    ?.find((menu) => menu.title.toLowerCase() === "about us")
                                    ?.menu_item
                                    .filter((submenu) => submenu.menu_name.toLowerCase() !== "the gaet advantage")
                                    .map((submenu, subIndex) => (
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

                        {/* Static Links */}
                        <Link to="/admission" className="nav-link">Admissions</Link>
                        <Link to="/associations" className="nav-link">Associations</Link>
                        <Link to="/the-gaet-advantage" className="nav-link">Why GAET</Link>
                        <Link to="/contact-us" className="nav-link">Contact Us</Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className={isMenuOpen ? "btn-menu active d-lg-none" : "btn-menu d-lg-none"}
                        onClick={toggleMenu}
                    >
                        <span></span><span></span><span></span>
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
                            <button className="btn-close" onClick={toggleMenu}></button>
                        </div>
                    </Container>
                </div>

                {/* Mobile Menu */}
                <div className="inner-flex">
                    <div className="leftpart">
                        <div className="menu-area">
                            <Tab.Container activeKey={activeTab}>
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
                                        <Nav.Link as={Link} to="/the-gaet-advantage" onClick={toggleMenu}>
                                            Why GAET
                                        </Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/contact-us" onClick={toggleMenu}>
                                            Contact Us
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    {data.data.menu_list.map((menu, index) => (
                                        <Tab.Pane
                                            key={`${menu.id}-${index}`}
                                            eventKey={menu.title}
                                            className={visibleSubmenu === menu.title ? "submenu-visible" : ""}
                                        >
                                            <ul className="submenu">
                                                {menu.menu_item
                                                    .filter((submenu) =>
                                                        menu.title.toLowerCase() !== "about us" ||
                                                        submenu.menu_name.toLowerCase() !== "the gaet advantage"
                                                    )
                                                    .map((submenu, subIndex) => (
                                                        <li key={`${submenu.id}-${subIndex}`}>
                                                            {submenu.id === 13 || submenu.id === 15 ? (
                                                                <a
                                                                    href={submenu.menu_link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={toggleMenu}
                                                                >
                                                                    {menu.title === "Schools"
                                                                        ? cleanSchoolName(submenu.menu_name)
                                                                        : submenu.menu_name}
                                                                </a>
                                                            ) : (
                                                                <Link to={submenu.menu_link} onClick={toggleMenu}>
                                                                    {menu.title === "Schools"
                                                                        ? cleanSchoolName(submenu.menu_name)
                                                                        : submenu.menu_name}
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

                    <div className="rightpart">
                        <img
                            src={activeImage || process.env.PUBLIC_URL + "/images/school-1.jpg"} className="photo1"
                            alt="Menu Illustration"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;