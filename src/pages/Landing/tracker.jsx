import { useEffect } from "react";
import $ from "jquery";

function Tracker() {
  useEffect(() => {
    /* Counter - CountTo */
    var a = 0;
    $(window).scroll(function () {
      if ($("#counter").length) {
        // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
        var oTop = $("#counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $(".counter-value").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-count");
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },
              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                },
              }
            );
          });
          a = 1;
        }
      }
    });
  });

  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="counter">
              <div className="cell">
                <div className="counter-value number-count" data-count="231">
                  24
                </div>
                <p className="counter-info">Happy Users</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count="85">
                  42
                </div>
                <p className="counter-info">Issues Solved</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count="59">
                  16
                </div>
                <p className="counter-info">Good Reviews</p>
              </div>
              <div className="cell">
                <div className="counter-value number-count" data-count="127">
                  1
                </div>
                <p className="counter-info">Case Studies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
