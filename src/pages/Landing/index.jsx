import $ from "jquery";
import { Navbar, Footer, Copyright, Loader } from "../../components";
import Header from "./header";
// import Testimonials from "./testimonials";
import Features from "./features";
import Video from "./video";
import DetailOne from "./detailOne";
import DetailTwo from "./detailTwo";
// import Screenshots from "./screenshots";
import Download from "./download";
import Tracker from "./tracker";
function Landing(props) {
  /* Back To Top Button */
  // create the back to top button
  $("body").prepend(
    '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
  );
  var amountScrolled = 700;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });

  return (
    <>
      {/* <Loader /> */}
      <Navbar />
      <Header />
      <Features />
      <DetailOne />
      <DetailTwo />
      {/* <Tracker /> */}
      <Video />
      {/* <Screenshots /> */}
      <Download />
      {/* <Testimonials /> */}
      <Footer />
      <Copyright />
    </>
  );
}

export default Landing;
