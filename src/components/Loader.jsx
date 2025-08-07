// import React from "react";
// import './Loader.css';
// import gaetLogo from "../assets/GAET_Trust_Logo.png";

// const Loader = () => {
//   return (
//     <div className="loader-overlay">
//       <div className="loader-wrapper">
//         <img src={gaetLogo} className="loader-image" />
//       </div>
//     </div>
//   );
// };

// export default Loader;




// Loader.jsx
import React, { useEffect, useState } from 'react';
import './Loader.css'; // We'll create this next
import gaetLogo from "../assets/GAET_Trust_Logo.png";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4600);

    // Hide loader after 6 seconds
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);



  return (
    <div className="loader-wrapper">
      {/* <img
        src={gaetLogo} 
        alt="Logo"
        className={`loader-logo ${fadeOut ? 'fade-out' : ''}`}
      /> */}
       <img 
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="logo"
          className={`loader-logo ${fadeOut ? 'fade-out' : ''}`}
      />
    </div>
  );
};

export default Loader;
