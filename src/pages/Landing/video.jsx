import React from "react";
import ReactPlayer from "react-player";

function Video(props) {
  return (
    <div id="preview" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 style={{fontFamily: "Poppins"}}>Preview</h2>
            <div className="p-heading p-large" style={{fontFamily: "Poppins"}}>
              Still not sure how we can help you?<br></br> Then tap below to know more
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <div className="video-wrapper">
                <ReactPlayer
                  pip
                  playsinline
                  controls
                  url="https://res.cloudinary.com/dgolpkc2e/video/upload/v1649967222/promo_ojrp1u.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
