import React from "react";

function Testimonials(props) {
  return (
    <div className="slider-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <div className="swiper-container card-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="images/testimonial-1.jpg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          I just finished my trial period and was so amazed with
                          the support and results that I purchased Leno.
                        </p>
                        <p className="testimonial-author">
                          Jude Thorn - Designer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="images/testimonial-2.jpg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          I don't know how I managed to get work done without
                          Leno. The speed of this application is amazing!
                        </p>
                        <p className="testimonial-author">
                          Roy Smith - Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="images/testimonial-3.jpg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          This app has the potential of becoming a mandatory
                          tool in every marketer's day to day operations.
                        </p>
                        <p className="testimonial-author">
                          Marsha Singer - Marketer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="images/testimonial-4.jpg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          Searching for a great marketing automation app was
                          difficult but thankfully I found Leno.
                        </p>
                        <p className="testimonial-author">
                          Tim Shaw - Designer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="images/testimonial-5.jpg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          Leno's support team is amazing. They've helped me with
                          some issues and I am so grateful to them.
                        </p>
                        <p className="testimonial-author">
                          Lindsay Spice - Marketer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="images/testimonial-6.jpg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          Who would have thought that Leno can provide such
                          amazing results in just a few weeks of use
                        </p>
                        <p className="testimonial-author">
                          Ann Black - Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
