import React from "react";
import styles from "./style.module.css";
import dashboard from "../../../public/dashboard.jpg"
import ecom from "../../../public/ecommerce.jpg"
import wordpress from "../../../public/wordpress.jpg"
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.portfolioTitle}>Our Works</h1>
      <h1>Choose a gallery</h1>
      <div className={styles.galleryContainer}>
        <div className={styles.imgBox}>
          <Image src={dashboard} fill={true} className={styles.img}/>
          <h1>Dashboard</h1>
        </div>

        <div className={styles.imgBox}>
          <Image src={ecom} fill={true} className={styles.img}/>
          <h1>E-Commerce</h1>
        </div>

        <div className={styles.imgBox}>
        <Image src={wordpress} fill={true} className={styles.img}/>
          <h1 >Wordpress</h1>
        </div>
      </div>
    </div>
  );
}
