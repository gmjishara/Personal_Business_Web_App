import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import aboutImg from "../../../public/about.jpg";

export default function page() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <Image src={aboutImg} fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Web Designers</h1>
          <h2 className={styles.imgDescription}>
            Award winning excellant tech designs
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.leftText}>
          <h1>Who Are We?</h1>
          <p>
            we are passionate about delivering exceptional products and services
            that cater to the unique needs of our valued customers. With a rich
            history of innovation and a commitment to excellence. 
          </p>
          <p>
            Our dedicated team is comprised of industry experts, creative
            thinkers, and customer-centric professionals who are driven by a
            shared mission: to exceed expectations. 
          </p>
          <p>
            In an ever-evolving world, Panther Design stands firm in its
            commitment to integrity, quality, and customer-centricity.
          </p>
        </div>
        <div className={styles.rightText}>
          <h1>What We Do?</h1>
          <p>
            we are passionate about delivering exceptional products and services
            that cater to the unique needs of our valued customers. With a rich
            history of innovation and a commitment to excellence.
          </p>
          <ul>
            <li>E-commerce website design expertise</li>
            <li>User-centric design approach</li>
            <li>Responsive and mobile-friendly designs</li>
          </ul>
          <button className="homeButton">Contact us</button>
        </div>
      </div>
    </div>
  );
}
