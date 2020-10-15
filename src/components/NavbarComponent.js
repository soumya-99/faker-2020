import React, { useEffect } from "react";
import OurMotive from "../components/OurMotive";
import HelpUs from "./HelpUs";
import { Route, BrowserRouter, Link } from "react-router-dom";
import M from "materialize-css";

function NavbarComponent() {
  useEffect(() => {
    // var navPush = document.querySelectorAll(".pushpin");
    var navTrigger = document.querySelectorAll(".sidenav");
    // M.Pushpin.init(navPush);
    M.Sidenav.init(navTrigger);
  }, []);

  return (
    <div>
      <nav className="blue darken-1">
        <BrowserRouter>
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                Faker.
              </a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                <i class="material-icons">menu</i>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/ourmotive">Our Motive</Link>
                </li>
                <li>
                  <Link to="/helpus">Help Us</Link>
                </li>
                <li>
                  <Link to="/">JavaScript</Link>
                </li>
              </ul>
            </div>
          </div>
        </BrowserRouter>
      </nav>

      {/* For Mobile */}

      <BrowserRouter>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <Link to="/ourmotive"> OurMotive</Link>
          </li>
          <li>
            <Link to="/">Components</Link>
          </li>
          <li>
            <Link to="/">JavaScript</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default NavbarComponent;
