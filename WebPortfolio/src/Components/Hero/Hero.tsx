import React from "react";
import "./HeroStyling.css";

const Hero = () => {
  return (
    <section className="hero-section-main">
      <img className="hero-lines" src="../../../assets/HeroLines.png" />
      <div className="row-guide">
        <div className="hero-row-left">
          <div className="intro-div-wrapper">
            <div className="name-role-wrapper">
              <div className="name-wrapper">
                {" "}
                <h2>Roberto Vidović</h2>{" "}
                <div>
                  <img
                    className="polygon-hero"
                    src="../../../assets/PolygonHero.png"
                  />
                </div>
              </div>

              <h1>Software Developer</h1>
            </div>
            <div className="button-wrapper">
              <button className="cta-button"> Contact me</button>
            </div>
          </div>
        </div>
        <div className="hero-row-right">
          <div className="banner-wrapper">
            <img src="../../../assets/HeroVector.png" className="hero-vector" />
          </div>
        </div>
      </div>
      <img src="../../../assets/Hero Purple Mesh.png" className="hero-mesh" />
      <img
        className="orange-hero-mesh"
        src="../../../assets/OrangeMeshHero.png"
      />
      <img
        className="purple-hero-mesh"
        src="../../../assets/PurpleHeroMesh.png"
      />
    </section>
  );
};

export default Hero;
