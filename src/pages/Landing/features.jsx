import { ReactComponent as GatherSvg } from "../../images/svg/gather.svg";
import { ReactComponent as PromoteSvg } from "../../images/svg/promote.svg";
import { ReactComponent as SellSvg } from "../../images/svg/sell.svg";

function Features() {
  return (
    <div id="features" className="tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>HOW DOES IT WORK?</h2>
            <div className="p-heading p-large">
              Social Savers is designed for providing the best disocunts on
              different goods by removing the middleman between manufacturers
              and buyers
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
                <i className="fas fa-cog"></i>GATHERING
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
                <i className="fas fa-binoculars"></i>PROMOTING
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
                <i className="fas fa-search"></i>SELLING
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
                          <p>
                            We will work together with different manufacturers
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
                          <p>
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
                          <p>
                            Manufactures can offer higher stages of discounts
                            for achieving set targets within the time frame
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
                          <p>
                            Manufacturers will upload the products with possible
                            level of discounts higher than available anywhere
                            else
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
                          <p>
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
                          <p>
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
                          <p>
                            Influencers will launch campaign using their social
                            media platform to attract a large pool of people to
                            buy a product as a group
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
                          <p>
                            The influencers can decide to wait longer if there
                            is a higher discount available when more people join
                            the campaign
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
                          <p>
                            Buyers will have to wait until the set target is
                            achieved, until then they can track the progress of
                            their order through our app
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
                          <p>
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
                          <p>
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
                          <p>
                            After your purchase being successful we will ship the order to your doorstep
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
