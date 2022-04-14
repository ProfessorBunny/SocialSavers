import { ReactComponent as BuySvg } from "../../images/svg/buy.svg";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

function DetailTwo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="basic-3">
      <div className="second">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2 style={{ fontFamily: "Poppins" }}>Buy & Recieve</h2>
                <p style={{ fontFamily: "Poppins" }}>
                  As soon as you join our promotion sale you can confirm your
                  slot in the campaign by finishing your payment <br />
                  After successful campaign we will deliver your order right at
                  your doorstep.
                </p>
                <button onClick={() => setOpen(true)} className="btn-solid-reg" style={{ fontFamily: "Poppins" }}> Show More</button>
                <Dialog maxWidth={'md'} open={open} >
                  <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#2f2c3d' }}>
                    <IconButton
                      onClick={() => setOpen(false)}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: '#2f2c3d', width: '100%' }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6} md={3} >
                        <img src={"images/checkout.png"} width="100%" />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} style={{ justifyContent: 'center' }}>
                        <Box>
                          <h3>Buy & Recieve</h3>
                          <Box style={{height: '3px', width: '20%', backgroundColor: '#ff9200', marginBottom: '4%'}}></Box>
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
                            Once the campaign is successful we will notify you
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
                                <i style={{ color: '#ff9200' }} class="fas fa-hand-holding-usd"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Extra Discount on Your First Order</td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i style={{ color: '#ff9200' }} class="far fa-credit-card"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>
                                All Major Cards Accepted & EMI Options Available
                              </td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i  style={{ color: '#ff9200' }}class="fas fa-bell"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Notified After Campaign is Successful</td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i style={{ color: '#ff9200' }} class="fas fa-truck-moving"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Track Your Order</td>
                            </tr>
                            <tr>
                              <td class="icon-cell">
                                <i style={{ color: '#ff9200' }} class="fas fa-gift"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Doorstep Delivery</td>
                            </tr>
                          </table>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3} md={3}>
                        <Box sx={{ display: { xs:'none', sm: 'none', md: 'block'} }}>
                          <img src={"images/banner.png"} width="100%" />
                        </Box>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
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
