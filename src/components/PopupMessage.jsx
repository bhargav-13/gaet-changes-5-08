import React, { useState, useEffect } from "react";
import "./PopupMessage.css";

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
  const PopupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 4600);


    return () => {
      clearTimeout(PopupTimer);
    }

  }, []);


  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popupmsg fixed">
        <div className="popup-content">
          <h2>NOTICE</h2>
          <p>
            <b>
              Goenka and Associates Educational Trust does not accept any donation for granting Admission to its Schools.
            </b>
          </p>
          <p>
            If any Agent or individual approaches you & demands donation in the name of the Trust, please inform the Trust Office immediately - Contact No. 022 40278222 or meet the Trustees at the address given in our Contact page.
          </p>
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default PopupMessage;
