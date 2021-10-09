import React from "react";
import styles from "./card.module.css";

const Card = () => {
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
            <div className={styles.card_desc} >
              <div className={styles.card_heading}>Audi Q8
                <br />
              <small>English | 12th</small>
              </div>
              <div className={styles.card_text}>
                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi
                that was launched in 2018  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, cumque. .
              </div>
            </div>
            <button  className={styles.card_button}>
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
