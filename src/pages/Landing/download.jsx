function Download() {
  return (
    <div id="download" className="basic-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h2>
                Download <span className="blue">Social Savers</span>
              </h2>
              <p className="p-large">
                You are only a few clicks away from getting a new gaming console
                or trendy jacket at the best price out there! Download now to
                save more by saving together
              </p>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-apple"></i>APP STORE
              </a>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-google-play"></i>PLAY STORE
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img
                className="img-fluid"
                src="images/app.png"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
