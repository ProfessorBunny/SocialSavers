import { ReactComponent as GatherSvg } from "../../images/svg/gather.svg";
import { ReactComponent as PromoteSvg } from "../../images/svg/promote.svg";
import { ReactComponent as SellSvg } from "../../images/svg/sell.svg";

function Features() {
  return (
    <div id="features" className="tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 style={{fontFamily: "Poppins"}}>How does it work?</h2>
            <div className="p-heading p-large" style={{fontFamily: "Poppins"}}>
            Social savers is designed for providing the best discounts on all kinds of products by taking advantage of group buying
             and purchasing left over merchandise from numerous corporations and local stores across the UK.
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="nav nav-tabs" id="lenoTabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="nav-tab-1"
                data-toggle="tab"
                href="#tab-1"
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
              >
                <i className="fas fa-cog"></i><span style={{fontFamily: "Poppins"}}>PRODUCTS</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-tab-2"
                data-toggle="tab"
                href="#tab-2"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
              >
                <i className="fas fa-binoculars"></i><span style={{fontFamily: "Poppins"}}>PROMOTING</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-tab-3"
                data-toggle="tab"
                href="#tab-3"
                role="tab"
                aria-controls="tab-3"
                aria-selected="false"
              >
                <i className="fas fa-search"></i><span style={{fontFamily: "Poppins"}}>SELLING</span>
              </a>
            </li>
          </ul>

          <div className="tab-content" id="lenoTabsContent">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="tab-1"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card left-pane first">
                      <div className="card-body">
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                            We will work together with different Suppliers
                            to provide you with best discounts
                          </p>
                        </div>
                        <div className="card-icon">
                          <i className="fas fa-people-carry"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card left-pane">
                      <div className="card-body">
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                            In return they will get a bulk of orders from our
                            customers
                          </p>
                        </div>
                        <div className="card-icon">
                          <i className="fas fa-coins"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <GatherSvg />
                  </div>

                  <div className="col-lg-4">
                    <div className="card right-pane first">
                      <div className="card-body">
                        <div className="card-icon">
                          <i className="far fa-calendar-check"></i>
                        </div>
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                          Suppliers can offer higher stages of discounts
                            for achieving set targets within given time frames
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card right-pane">
                      <div className="card-body">
                        <div className="card-icon">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                          Suppliers agree to bigger and better discounts not normally 
                          available anywhere else because of bulk buying
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab-2"
              role="tabpanel"
              aria-labelledby="tab-2"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card left-pane first">
                      <div className="card-body">
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                            Find your favourite influencer and check out what
                            wonderful new promotion they are campaigning this
                            week
                          </p>
                        </div>
                        <div className="card-icon">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card left-pane">
                      <div className="card-body">
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                            See what promotion is trending and check out the
                            influencers profile for their promotional post to
                            see how many others have already signed up
                          </p>
                        </div>
                        <div className="card-icon">
                          <i className="fas fa-search"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <PromoteSvg />
                  </div>

                  <div className="col-lg-4">
                    <div className="card right-pane first">
                      <div className="card-body">
                        <div className="card-icon">
                          <i className="fas fa-hashtag"></i>
                        </div>
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                          Influencers launch campaigns using their social media 
                          platform to attract a large pool of consumers to 
                          purchase a product as a group
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card right-pane">
                      <div className="card-body">
                        <div className="card-icon">
                          <i className="fas fa-user-clock"></i>
                        </div>
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                          Exciting new deals of the day up for grabs every day showing 
                          the best promotion available on our platform
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab-3"
              role="tabpanel"
              aria-labelledby="tab-3"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card left-pane first">
                      <div className="card-body">
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                          Once signed up, consumers must wait until the campaign reaches its goal 
                          to raise a set amount of buyers. 
                          Until then, they can track the progress of the campaign through our app
                          </p>
                        </div>
                        <div className="card-icon">
                          <i className="far fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card left-pane">
                      <div className="card-body">
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                            If the set target is not achieved within the
                            time frame then every buyer will be refunded with the full amount
                          </p>
                        </div>
                        <div className="card-icon">
                          <i className="fas fa-hand-holding-usd"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <SellSvg />
                  </div>

                  <div className="col-lg-4">
                    <div className="card right-pane first">
                      <div className="card-body">
                        <div className="card-icon">
                          <i className="fas fa-bell"></i>
                        </div>
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                            Once the set target is achieved all the buyers will 
                            be notified about their purchase being successful
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card right-pane">
                      <div className="card-body">
                        <div className="card-icon">
                          <i className="fas fa-door-open"></i>
                        </div>
                        <div className="text-wrapper">
                          <p style={{fontFamily: "Poppins"}}>
                          After the campaign is successful, the product is shipped on the doorstep of every consumer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
