import React, { useEffect, useState } from "react";
import { animate, motion, useAnimate } from "framer-motion";
import "./HeroStyling.css";

const Hero = () => {
  return (
    <section className="hero-section-main">
      <motion.img
        initial={{ x: 0, y: 700 }}
        animate={{
          x: [600, 200, 100, 600], // Adding the initial position at the end
          y: [0, 200, 550, 0], // Adding the initial position at the end
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="light-blue-mesh"
        src="../../assets/Purple1.png"
      />
      <motion.img
        initial={{ x: 0, y: 700 }}
        animate={{
          x: [700, 700, 150, 700], // Adding the initial position at the end
          y: [100, 220, 100, 100], // Adding the initial position at the end
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="light-purple-mesh"
        src="../../assets/Purple2.png"
      />

      <div className="center-content">
        <div className="center-div">
          <div className="role-wrapper">
            {" "}
            <h3>
              Roberto Vidović <br /> Software Developer
            </h3>
          </div>
          <div className="intro-wrapper">
            <div className="intro-heading-wrapper">
              <h3 className="intro-subheading">TURNING CODE</h3>
              <h1 className="intro-heading">INTO CREATIVE SOLUTIONS</h1>
            </div>
            <div className="cta-wrapper">
              {" "}
              <button className="intro-cta-button">Contact me</button>
            </div>
          </div>

          <div className="contact-lines">
            <div className="top-line" />
            <div className="social-wrapper">
              <img className="github-icon" src="../../assets/github.png" />
              <img src="../../assets/linkedin.png" />
              <img src="../../assets/instagram.png" />
            </div>
            <div className="bottom-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
