import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import "./HeroStyling.css";

const Hero = () => {
  const [startSecondMeshAni, setStartSecondMeshAni] = useState(false);
  useState(false);
  const [restartMeshAni, setRestartMeshAni] = useState(false);
  const [loop, setLoop] = useState(false);

  /*const [bottomPurpleMesh, setBottomPurpleMesh] = useState<HTMLElement | null>(
    null
  );
  const [topPurpleMesh, setTopPurpleMesh] = useState<HTMLElement | null>(null);
  const [introWrapper, setIntroWrapper] = useState<HTMLElement | null>(null);
  const [bannerWrapper, setBannerWrapper] = useState<HTMLElement | null>(null);
  const [lineAnimationDiv, setLineAnimationDiv] = useState<HTMLElement | null>(
    null
  );
  const [header, setHeader] = useState<HTMLElement | null>(null);

  const meshStaticAnimation = (): void => {
    let counter = 1;

    const startStaticMeshAnimation = setInterval(() => {
      if (bottomPurpleMesh instanceof HTMLElement)
        bottomPurpleMesh.style.right = `${counter}px`;

      if (counter >= window.innerWidth - 200) {
        clearInterval(startStaticMeshAnimation);
        const exitStaticMeshAnimation = setInterval(() => {
          if (bottomPurpleMesh instanceof HTMLElement)
            bottomPurpleMesh.style.right = `${counter}px`;

          if (counter <= -300) {
            clearInterval(exitStaticMeshAnimation);
            headerStartAnimation();
            mainMeshOpacityAnimation();
          } else {
            counter = counter - 10;
          }
        }, 1);
      } else {
        counter = counter + 10;
      }
    }, 1);
 
  };

  const mainMeshOpacityAnimation = (): void => {
    let counter = 1;
    const opacityMeshAnimation = setInterval(() => {
      if (topPurpleMesh instanceof HTMLElement) {
        topPurpleMesh.style.opacity = `${counter}%`;
      }

      if (counter === 100) {
        clearInterval(opacityMeshAnimation);
      }
      counter = counter + 5;
    }, 1);
  };

  const headerStartAnimation = (): void => {
    let offScreenPosition = header?.getBoundingClientRect().y as number;

    const headerAnimationInterval = setInterval(() => {
      offScreenPosition = offScreenPosition + 0.5;

      if (header instanceof HTMLElement) {
        header.style.top = `${offScreenPosition}%`;
      }

      if (offScreenPosition === 0) {
        clearInterval(headerAnimationInterval);
      }
    }, 5);
  };

  const linesAnimation = (): void => {
    let counter = 1;
    let width = 100;
    const startLineAnimation = setInterval(() => {
      if (lineAnimationDiv instanceof HTMLElement) {
        lineAnimationDiv.style.width = `${width - counter}%`;

        counter++;

        if (width > 0) width = width - 0.5;
        else {
          lineAnimationDiv.style.opacity = "0";
          clearInterval(startLineAnimation);
        }
      }
    }, 10);
  };

  const startWebsiteAnimation = (): void => {
    meshStaticAnimation();
    linesAnimation();
    let counter = 1;

    const startInterval = setInterval(() => {
      if (bannerWrapper && introWrapper instanceof HTMLElement) {
        // introWrapper.style.opacity = `${counter}%`;
        bannerWrapper.style.opacity = `${counter}%`;
        console.log(counter);
        if (counter >= 50) {
          counter = counter + 5;
          console.log(counter);
          if (counter >= 105) {
            clearInterval(startInterval);
          }
        } else {
          counter++;
        }
      }
    }, 20);

    startInterval;
  };

  useEffect(() => {
    setBottomPurpleMesh(
      document.querySelector(".purple-hero-mesh") as HTMLElement
    );
    setIntroWrapper(
      document.querySelector(".intro-div-wrapper") as HTMLElement
    );
    setBannerWrapper(document.querySelector(".hero-vector") as HTMLElement);
    setLineAnimationDiv(
      document.querySelector(".line-animation-div") as HTMLElement
    );
    setTopPurpleMesh(document.querySelector(".hero-mesh") as HTMLElement);
    setHeader(document.querySelector(".header") as HTMLElement);
  }, []);

  useEffect(() => {
    if (bottomPurpleMesh) {
      startWebsiteAnimation();
    }
  }, [bottomPurpleMesh]);*/
  return (
    <section className="hero-section-main">
      <motion.img
        initial={{ x: 0, y: 700 }}
        animate={
          restartMeshAni || loop
            ? { y: 700, x: 0 }
            : startSecondMeshAni
            ? { y: 1100, x: 200 }
            : { x: 600, y: 900 }
        }
        transition={{ duration: 2 }}
        onAnimationComplete={() => {
          if (restartMeshAni) {
            setRestartMeshAni(false);
            setStartSecondMeshAni(false);
            setLoop(true);
          }
          if (loop) {
            setStartSecondMeshAni(true);
          }
          if (startSecondMeshAni) {
            setRestartMeshAni(true);
          } else {
            setStartSecondMeshAni(true);
          }
        }}
        className="light-blue-mesh"
        src="../../assets/Purple1.png"
      />
    </section>
  );
};

export default Hero;
