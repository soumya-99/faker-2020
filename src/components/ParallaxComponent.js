import React, { useEffect } from "react";
import M from "materialize-css";
import "./ParallaxComponent.css";

function ParallaxComponent() {
  //Effect Hook
  useEffect(() => {
    var elem = document.querySelectorAll(".parallax");
    M.Parallax.init(elem, {});
  }, []);

  //Logos
  const logo1 = require("../images/fake2.jpg");
  const logo2 = require("../images/fake1.jpg");
  const logo3 = require("../images/conspiracy.jpg");

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={logo1} className="logo__one" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header red-text">⚠ Stop Spreading Fake News.</h2>
          <p className="blue-text">
            Fake News is a really very dangerous thing for this and future genaration. It would cause Civil War in a short period of time. We can stop it with our will power. Whoever post any fake news on any social media, not only report, immediately take legal steps. We are always with you.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={logo2} className="logo__two" />
        </div>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header green-text">⚠ Web of Fake Conspiracies.</h2>
          <p className="amber-text text-darken-4">
            100% of 200% conspiracy theories are fake over the internet, that you can't ever imagine. Many many people are trying to 
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src={logo3} className="logo__two" />
        </div>
      </div>
    </div>
  );
}

export default ParallaxComponent;
