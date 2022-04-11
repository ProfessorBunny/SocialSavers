import { ReactComponent as BuySvg } from "../../images/svg/buy.svg";
import React from "react";
import Popup from "reactjs-popup";
function DetailTwo() {
  return (
    <div className="basic-3">
      <div className="second">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Buy & Recieve</h2>
                <p>
                  As soon as you join our promotion sale you can confirm your
                  slot in the campaign by finishing your payment <br />
                  After successfull campaign we will deliver your order right at
                  your doorstep.
                </p>
                <Popup
                  trigger={
                    <button className="btn-solid-reg"> Show More</button>
                  }
                  modal
                >
                  {(close) => (
                    <div className="lightbox-basic">
                      <div class="row">
                        <button
                          title="Close (Esc)"
                          type="button"
                          class="mfp-close x-button"
                          onClick={close}
                        >
                          ×
                        </button>
                        <div class="col-lg-4">
                          <img
                            class="img-fluid"
                            style={{height:"80%"}}
                            src="images/checkout.png"
                            alt="alternative"
                          />
                        </div>
                        <div class="col-lg-4">
                          <h3>Buy & Recieve</h3>
                          <hr />
                          <p>
                            With our premium subscription you can join as many
                            promotions as you want and enjoy faster home
                            delivery
                          </p>
                          <p>
                            You can confirm your slot for the campaign by making
                            the payment for the product without any hassle
                          </p>
                          <p>
                            Once the campaign is successfull we will notify you
                            and deliver your product at your address
                          </p>

                          <h4>User Feedback</h4>
                          <p>
                            You get prodcuts with huge discounts on EMI and they
                            are delivered right at your doorstep, can't get
                            better than that
                          </p>
                          <table>
                            <tr>
                              <td class="icon-cell">
                                <i class="fas fa-hand-holding-usd"></i>
                              </td>
                              <td>Extra Discount on Your First Order</td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i class="far fa-credit-card"></i>
                              </td>
                              <td>
                                All Major Cards Accepted & EMI Options Available
                              </td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i class="fas fa-bell"></i>
                              </td>
                              <td>Notified After Campaign is Successfull</td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i class="fas fa-truck-moving"></i>
                              </td>
                              <td>Track Your Order</td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i class="fas fa-gift"></i>
                              </td>
                              <td>Doorstep Delivery</td>
                            </tr>
                          </table>
                        </div>
                        <div class="col-lg-4">
                          <img
                            class="img-fluid"
                            style={{height:"80%"}}
                            src="images/banner.png"
                            alt="alternative"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
            <div className="col-lg-6">
              <BuySvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTwo;
