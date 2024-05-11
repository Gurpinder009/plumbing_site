"use client";
import SmallImageHeader from "@/Components/SmallImageHeader";
import React from "react";
import styles from "../../Components/Css/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <SmallImageHeader
        title={"About Us"}
        imagePath={"/image18.jpg"}
        alt={"Loadding..."}
      />
      
      <div className={styles.aboutUsWrapper}>
        <Image className={styles.aboutUsImage} width={800} height={800} src="/groupImage.jpg"/>
        <div className={styles.aboutUsDetailContainer}>
          <h2 className={styles.aboutUsHeading}>About Us</h2>
          <p className={styles.aboutUsDescription}>
            Need a plumber in Vancouver?
            <br />
            <br />

            Dhillon Bro's Plumbing and Heating is your one-stop shop for all
            your plumbing needs. With over 7 years of experience, we're trusted
            for our reliable, efficient, and affordable services. Our team is
            highly skilled and can handle everything from minor repairs to major
            installations and renovations in kitchens and bathrooms. We
            understand the importance of promptness and provide immediate
            response with no overtime charges. <br /><br/>
            Call us today for: Residential plumbing services Kitchen and
            bathroom installations and renovations Repairs, from simple fixes to
            major plumbing issues Fast and reliable service <br />
            <br />
            We'll get the job done right, every time.
          </p>
        </div>
      </div>
    </div>
  );
}
