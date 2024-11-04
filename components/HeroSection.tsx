import React from "react";
import * as Svg from "@/public/svg.js";
import "./HeroSection.css";

function mainLanding() {
  const features = [
    " Simple and quick scheduling",
    " Beautiful live and continuous display",
    " Online reservation ",
  ];
  return (
    <div className="Container">
      <img className="playerPic" src="/playerPic.JPG" />
      <div className="Container1">
        <section className="landing">
          <img className="PhonePic" src="/enimSportsFootball.png" />
          <div className="container2">
            <div className="btns">
              <button className="btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trophy"
                  viewBox="0 0 16 16"
                >
                  {Svg.SvgTrophyPath}
                </svg>
                E-SPORT
              </button>
              <button className="btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trophy"
                  viewBox="0 0 16 16"
                >
                  {Svg.SvgTrophyPath}
                </svg>
                SPORT
              </button>
            </div>
            <h2>
              Schedule your <br></br>next future{" "}
              <span className="blueColor"> KOOORA </span> <br></br> tournament
              with <span className="blueColor"> ENIMSPORTS </span>
            </h2>

            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <span className="checkmark">✔</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <button className="btns">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trophy"
                viewBox="0 0 16 16"
              >
                {Svg.SvgTrophyPath}
              </svg>
              Create a tournament for free
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
export default mainLanding;
