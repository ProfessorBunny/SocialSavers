import $ from "jquery";
import { useEffect } from "react";
import "../../utils/morphext.js";
import { ReactComponent as LandingSvg } from "../../images/svg/landing.svg";

function Header() {
  useEffect(() => {
    /* Rotating Text - Morphtext */
    $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 2000,
      complete: function () {
        // Called after the entrance animation is executed.
      },
    });
  });

  return (
    <header id="header" className="header" >
      <div className="header-content" style={{paddingTop:'9.5rem'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h3 style={{fontFamily: "Poppins"}}>
                  ARE YOU LOOKING FOR THE BEST DISCOUNTS &nbsp;
                  <span id="js-rotating">
                    ON PRODUCTS ?, AT ONE PLACE ?, ALL ACROSS UK ?
                  </span>
                </h3>
                <p className="p-large" style={{fontFamily: "Poppins"}}>
                  Well look no further because Social savers offers them for different
                  products all over the UK. You are only a few clicks away from getting a new gaming console
                or trendy jacket at the best price out there. 
                Signing up now allows you to view our deal of the day and enjoy our week long premium subscription service.
                </p>
                <a className="btn-solid-lg page-scroll" href="#your-link">
                  <i className="fab fa-google-play"></i><span style={{fontFamily: "Poppins"}}>PLAY STORE</span>
                </a>
                <a className="btn-solid-lg page-scroll">
                  <i className="fab fa-apple" ></i><span style={{fontFamily: "Poppins"}}>Coming Soon</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <LandingSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
