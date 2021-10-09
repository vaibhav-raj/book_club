import React, { useState } from "react";
import styles from "./card.module.css";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import swal from "sweetalert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};

const Card = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    swal({
      title: "Please contact below number",
      text: "Mobile No. : 9412350237",
      icon: "info",      
    });
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className={styles.card_sl}>
            <div className={styles.card_image}>
              <img
                src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
            <div className={styles.card_desc}>
              <div className={styles.card_heading}>
                Audi Q8
                <br />
                <small>English | 12th</small>
              </div>
              <div className={styles.card_text}>
                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi
                that was launched in 2018 Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Itaque, cumque. .
              </div>
            </div>
            <button className={styles.card_button} onClick={handleOpen}>
              Purchase
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Why do want ??
                </Typography>
                <TextField
                  id="standard-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  sx={{ width: "100%", my: 2.5 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "15px",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "grey" }}
                    size="large"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
