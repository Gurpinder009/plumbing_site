"use client";
import SmallImageHeader from "@/Components/SmallImageHeader";
import React from "react";
import styles from "@/Components/Css/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <SmallImageHeader
        title="About Us" 
        imagePath="/image18.jpg"
        alt="Loading..."
      />

      <div className={styles.aboutUsWrapper}>
        <Image
          className={styles.aboutUsImage}
          width={800}
          height={800}
          src="/groupImage.jpg"
          alt="Group working together" 
        />
        <div className={styles.aboutUsDetailContainer}>
          <h2 className={styles.aboutUsHeading}>About Us</h2>
          <p className={styles.aboutUsDescription}>
            Need a plumber in Vancouver?
            <br />
            <br />
            Dhillon Bro&apos;s Plumbing and Heating is your one-stop shop for all
            your plumbing and hydronic heating needs. With over 7 years of experience, we&apos;re trusted
            for our reliable, efficient, and affordable services. Our team is
            highly skilled and can handle everything from minor repairs to major
            installations and renovations any plumbing, heating and gas work. We
            understand the importance of promptness and provide immediate
            response with no overtime charges.
            <br />
            <br />

           <em> Owners are always on site and engaged providing the perfect results for the client !</em>

            <br />
            <br />
            <b>Call us today for:</b>
            <ul>
              <li>Residential and commercial plumbing services</li>
              <li>Kitchen and bathroom installations and renovations</li>
              <li>Repairs, from simple fixes to major plumbing issues</li>
              <li>Fast and reliable service</li>
            </ul>
            We&apos;ll get the job done right, every time.
          </p>
        </div>
      </div>
    </div>
  );
}


