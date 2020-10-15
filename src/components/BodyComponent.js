import React, { createRef, useEffect } from "react";
import lotte from "lottie-web";
import anim1 from "../animations/movie-theatre.json";
import anim2 from "../animations/bus-ticket.json";
import "./BodyComponent.css";

function BodyComponent() {
  const animationMovie = createRef();
  const animationBus = createRef();
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
  return (
    <div className="container body">
      <h2 className="center-align">Follow With Us.</h2>
      <hr />
      {/* <div className="animation__div" ref={animationMovie} />
      <div className="animation__div" ref={animationBus} /> */}

      <div className="row">
        <div className="col l8 s12">
          <h2>Report On The Go.</h2>
        </div>
        <div className="col l4 s12">
          <div className="animation__div" ref={animationMovie} />
        </div>
      </div>
      <div className="row">
        <div className="col l4 s12">
          <div className="animation__div" ref={animationBus} />
        </div>
        <div className="col l8 s12">
          <h2>Stop Fake News.</h2>
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
