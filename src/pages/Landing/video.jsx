import React from "react";
import ReactPlayer from "react-player";

function Video(props) {
  return (
    <div id="preview" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>PREVIEW</h2>
            <div className="p-heading p-large">
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
                  loop
                  controls
                  url="https://cdn.biteable.com/social/renders/9654440/5743078/2810683/b9fb2327748ae6db515b5e8e1d955e7b79da5946.mp4"
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
