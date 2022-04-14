function Download() {
  return (
    <div id="download" className="basic-4" style={{paddingTop:'10px', paddingBottom: '10px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5" style={{paddingTop:'10%'}}>
            <div className="text-container">
              <h2 style={{fontFamily: "Poppins"}}>
                Download <span className="blue">Social Savers</span>
              </h2>
              <p className="p-large" style={{fontFamily: "Poppins"}}>
                 Social savers is dedicated to
                providing the best discount there is to help people across the UK
                <span style= {{color: '#8e1f1f', fontWeight: 'bold', font: '700'}}> SAVE MORE BY SAVING TOGETHER</span>.  
                  Download now to sign up to our new
                  and exciting deals and enjoy our premium subscription service
                  for a week!
              </p>
              <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-google-play"></i><span style={{fontFamily: "Poppins"}}>PLAY STORE</span>
              </a>
              <a className="btn-solid-lg">
                <i className="fab fa-apple"></i><span style={{fontFamily: "Poppins"}}>Coming Soon</span>
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
