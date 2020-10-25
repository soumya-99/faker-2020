import React from "react";

function FooterComponent() {
  return (
    <div>
      <footer className="page-footer pink darken-1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About Us</h5>
              <hr/>
              <p className="grey-text text-lighten-4">
                This is an open source website for spreading social awareness. Please be with us and help us for your own future. Thank You.  
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="https://www.facebook.com/soumyadeep.mondal.984">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://www.instagram.com/m0ndal.s0umyadeep/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://twitter.com/Soumyadeep5000">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Faker Inc.
            <a className="grey-text text-lighten-4 right" href="#!">
              All Rights Reserved.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
