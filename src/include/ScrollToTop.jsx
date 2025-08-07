import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
 const location = useLocation();

  useEffect(() => {
    // Ensure this triggers on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;