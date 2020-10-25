import React, { createRef, useEffect } from "react";
import lotte from "lottie-web";
import anim1 from "../animations/movie-theatre.json";
import anim2 from "../animations/bus-ticket.json";
import anim3 from "../animations/fire.json";
import "./BodyComponent.css";

function BodyComponent() {
  const animationMovie = createRef();
  const animationBus = createRef();
  const animationFire = createRef();
  useEffect(() => {
    lotte.loadAnimation({
      container: animationMovie.current,
      animationData: anim1,
    });
  }, []);
  useEffect(() => {
    lotte.loadAnimation({
      container: animationBus.current,
      animationData: anim2,
    });
  }, []);
  useEffect(() => {
    lotte.loadAnimation({
      container: animationFire.current,
      animationData: anim3,
    });
  }, []);
  return (
    <div className="container body">
      <h2 className="center-align">Follow With Us.</h2>
      <hr />
      {/* <div className="animation__div" ref={animationMovie} />
      <div className="animation__div" ref={animationBus} /> */}

      <div className="row">
        <div className="col l8 s12">
          <h2>Report On The Go.</h2>
          <hr />
          <h5>
            You are the most precious person who can stop spreading fake newses
            and vulnarable things over the internet. Support us andf report
            whatever you seems like fake or vulnarable.
          </h5>
        </div>
        <div className="col l4 s12">
          <div className="animation__div" ref={animationBus} />
        </div>
      </div>
      <div className="row">
        <div className="col l4 s12">
          <div className="animation__div" ref={animationMovie} />
        </div>
        <div className="col l8 s12">
          <h2>Stop Fake News.</h2>
          <hr />
          <h5>
            Please do not upload any kind of ("Political, Religious, Pornography
            [<strong>Especially Child Pornography</strong>]") fake news or
            vulnarable thing over the social media. Only you can change our
            world.
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col l8 s12">
          <h2>Short Time Effect</h2>
          <hr />
          <h5>
            Without any doubt, in the short period of time, Civil War would
            happen! And if it goes like this about a long period of time, WW3
            would happen. So, please be careful what you're posting on the web.
            Check them twice.
          </h5>
        </div>
        <div className="col l4 s12">
          <div className="animation__div" ref={animationFire} />
        </div>
      </div>
      <h2>Servey - Comming Soon.</h2>
      <hr />
    </div>
  );
}

export default BodyComponent;
