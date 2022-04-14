import { ReactComponent as SelectSvg } from "../../images/svg/select.svg";
import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

function DetailOne() {
  const [open, setOpen] = useState(false)
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
                <h2 style={{ fontFamily: "Poppins" }}>Browse & Select</h2>
                <p style={{ fontFamily: "Poppins" }}>
                  Browse our endless supply of deals for UK products with our
                  tailored deal of the day page that will highlight our best
                  sales <br />
                  After finding the product you want, just sign up to our group
                  promotion sale
                </p>
                <button onClick={() => setOpen(true)} className="btn-solid-reg" style={{fontFamily: "Poppins"}}> Show More</button>
                <Dialog maxWidth={'lg'} open={open} >
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
                        <img src={"images/home.png"} width="100%" />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} style={{ justifyContent: 'center' }}>
                        <Box>
                          <h4>Browse and Select</h4>
                          <Box style={{height: '3px', width: '20%', backgroundColor: '#ff9200', marginBottom: '4%'}}></Box>
                          <p>
                            Whether you are looking to buy electronic devices
                            or house cleaning products you can find daily new
                            deals here that will surprise you
                          </p>
                          <p>
                          After finding the product you are looking for, just sign up for our
                           group promotion campaign for that product
                          </p>
                          <p>
                            You can track the progress of the campaign through
                            our app after signing up for our group promotion
                            sale
                          </p>
                          <h5>User Feedback</h5>
                          <p>
                            "You should definitely give it a try to get products
                            with best discounts"
                          </p>
                          <table>
                            <tr>
                              <td className="icon-cell">
                                <i style={{ color: '#ff9200' }} className="fas fa-mobile-alt"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Interactive UI</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i style={{ color: '#ff9200' }} className="fas fa-tag"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Huge Discounts on Different Prodcuts</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i style={{ color: '#ff9200' }} className="far fa-calendar-alt"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>New and Best Deals Highlighted Everyday</td>
                            </tr>
                            <tr>
                              <td className="icon-cell p">
                                <i style={{ color: '#ff9200' }} className="fas fa-clipboard-check"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>Keep Track of your selected products</td>
                            </tr>
                            <tr>
                              <td className="icon-cell">
                                <i style={{ color: '#ff9200' }} className="fas fa-id-card"></i>
                              </td>
                              <td style={{ paddingLeft: '5%', color: 'white' }}>
                                Checkout Your Favourite Influencers Page For
                                More Deals
                              </td>
                            </tr>
                          </table>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3} md={3}>
                        <Box sx={{ display: { xs:'none', sm: 'none', md: 'block'} }}>
                          <img src={"images/product.png"} width="100%" />
                        </Box>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailOne;
