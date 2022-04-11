import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-col">
              <h4>About Leno</h4>
              <p>
                We're passionate about creating the best mobile apps for
                personal development
              </p>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="footer-col last">
              <h4>Social Media</h4>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-google-plus-g fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-linkedin-in fa-stack-1x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
