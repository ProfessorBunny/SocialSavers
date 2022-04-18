import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-col">
              <h4 style={{fontFamily: "Poppins"}}>About Social Savers</h4>
              <p style={{fontFamily: "Poppins"}}>
               We're passionate about providing you best promotions on different products all over the UK
              </p>
            </div>
          </div>
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <div className="footer-col last">
              <h4 style={{fontFamily: "Poppins"}}>Social Media</h4>
              {/* <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span> */}
              <span className="fa-stack">
                <a href="https://www.instagram.com/socialsaversapp">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://twitter.com/socialsaversapp">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
              {/* <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-google-plus-g fa-stack-1x"></i>
                </a>
              </span> */}
              {/* <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-linkedin-in fa-stack-1x"></i>
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
