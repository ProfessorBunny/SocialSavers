import { ReactComponent as SelectSvg } from "../../images/svg/select.svg";
import React from "react";
import Popup from "reactjs-popup";

function DetailOne() {
  return (
    <>
      <div id="details" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SelectSvg />
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Browse & Select</h2>
                <p>
                  Browse our endless supply of deals for UK products with our
                  tailored deal of the day page that will highlight our best
                  sales <br />
                  After finding the product you want, just sign up to our group
                  promotion sale
                </p>
                <Popup
                  trigger={
                    <button className="btn-solid-reg"> Show More</button>
                  }
                  modal
                >
                  {(close) => (
                    <div className="lightbox-basic">
                      <div className="row">
                        <button
                          title="Close (Esc)"
                          type="button"
                          className="mfp-close x-button"
                          onClick={close}
                        >
                          ×
                        </button>
                        <div className="col-lg-4">
                          <img
                            className="img-fluid"
                            style={{height:"80%"}}
                            src="images/home.png"
                            alt="alternative"
                          />
                        </div>
                        <div className="col-lg-4">
                          <h3>Browse and Select</h3>
                          <hr />
                          <p>
                            Whether you are looking to buy electronic devices
                            for house cleaning products you can find daily new
                            deals here that will surprise you
                          </p>
                          <p>
                            After finding the product you are looking for, just
                            sign up for our group promotion sale for that
                            product
                          </p>
                          <p>
                            You can track the progress of the campaign through
                            our app after signing up for our group promotion
                            sale
                          </p>

                          <h4>User Feedback</h4>
                          <p>
                            You should definitely give it a try to get products
                            with best discounts
                          </p>
                          <table>
                            <tr>
                              <td className="icon-cell">
                                <i className="fas fa-mobile-alt"></i>
                              </td>
                              <td>Interactive UI</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i className="fas fa-tag"></i>
                              </td>
                              <td>Huge Discounts on Different Prodcuts</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i className="far fa-calendar-alt"></i>
                              </td>
                              <td>New and Best Deals Highlighted Everyday</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i className="fas fa-clipboard-check"></i>
                              </td>
                              <td>Keep Track of your selected products</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i className="fas fa-id-card"></i>
                              </td>
                              <td>
                                Checkout Your Favourite Influencers Page For
                                More Deals
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-lg-4">
                          <img
                            className="img-fluid"
                            style={{height:"80%"}}
                            src="images/product.png"
                            alt="alternative"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailOne;
