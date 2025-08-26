import React, { useEffect, useState } from "react";
import backImg from '../assets/frameThreeImage.png';

function InsideTopBanner (props) {
  const [stage, setStage] = useState("background");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("rays"), 1000),
      setTimeout(() => setStage("image"), 3000),
      setTimeout(() => setStage("overlay"), 4000),
      setTimeout(() => setStage("text"), 5000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (stage === "rays") {
      const container = document.getElementById("rays");
      if (!container) return;
      container.innerHTML = "";
      const totalRays = 24;
      const startAngle = -90;
      const endAngle = 90;
      const step = (endAngle - startAngle) / (totalRays - 1);

      for (let i = 0; i < totalRays; i++) {
        const ray = document.createElement("div");
        ray.className = "ray";
        const angle = startAngle + i * step;
        ray.style.setProperty("--angle", `${angle}deg`);
        container.appendChild(ray);
      }
    }
  }, [stage]);

  return (
    <div className="banner-section">
      <div className={`blue-bg ${stage === "background" || stage === "rays" ? "show" : "hide"}`}></div>

      <div id="rays" className={`ray-container ${stage === "rays" ? "show" : "hide"}`}></div>

      <div className={`banner-image ${stage === "image" || stage === "overlay" || stage === "text" ? "show" : "hide"}`}>
        <img src={props.BackgrondBack}alt="banner" />
      </div>

      <div className={`overlay ${stage === "overlay" || stage === "text" ? "show" : "hide"}`}></div>

      <div className={`banner-text ${stage === "text" ? "show" : "hide"}`}>
        <h1>{props.pageTitle}</h1>
      </div>
    </div>
  );
};

export default InsideTopBanner;
