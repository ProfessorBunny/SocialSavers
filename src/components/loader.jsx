import $ from "jquery";

function Loader(props) {
  /* Preloader */
  $(window).on("load", function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $(".spinner-wrapper");
      setTimeout(function () {
        preloader.fadeOut(preloaderFadeOutTime);
      }, 500);
    }
    hidePreloader();
  });
  return (
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
}

export default Loader;
