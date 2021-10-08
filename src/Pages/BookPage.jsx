import React from "react";
import Filter from "../Components/Filter/Filter";
import Card from "../Components/Card/Card";
import styles from "./Home.module.css";

const BookPage = () => {
  return (
    <div className={styles.home}>
      <Filter />
       <div className={styles.books}>
        <Card />
      </div>
    </div>
  );
};

export default BookPage;
