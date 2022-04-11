import "../utils/easing.js";
import $ from "jquery";
import { useEffect } from "react";
import { ReactComponent as LogoSvg } from "../images/svg/logo.svg";

function Navbar() {
  /* Navbar Scripts */

  useEffect(() => {
    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function (event) {
      if (!$(this).parent().hasClass("dropdown"))
        $(".navbar-collapse").collapse("hide");
    });
    // jQuery to collapse the navbar on scroll
    $(window).on("scroll load", function () {
      if ($(".navbar").offset().top > 20) {
        $(".fixed-top").addClass("top-nav-collapse");
      } else {
        $(".fixed-top").removeClass("top-nav-collapse");
      }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
      $(document).on("click", "a.page-scroll", function (event) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top,
            },
            600,
            "easeInOutExpo"
          );
        event.preventDefault();
      });
    });
  });

  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      <a className="navbar-brand logo-text page-scroll" href="index.html">
        Social
      </a>
      <a className="navbar-brand logo-image" href="index.html">
        <LogoSvg />
      </a>
      <a className="navbar-brand logo-text page-scroll" href="index.html">
        Savers
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#header">
              HOME <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#features">
              FEATURES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#details">
              DETAILS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#preview">
              PREVIEW
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#download">
              DOWNLOAD
            </a>
          </li>
        </ul>
        <span className="nav-item social-icons">
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
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
