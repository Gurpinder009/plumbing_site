"use client";
import SmallImageHeader from "@/Components/SmallImageHeader";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../Components/Css/services.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <SmallImageHeader
        title="Our Services"
        alt={"loading..."}
        imagePath={"/image2.jpg"}
      />
      <motion.section className={styles.servicesWrapper}>
        <ServiceCard
          imagePath="/image21.jpg"
          title="Plumbing"
          description="this is description"
          
        />

        <ServiceCard
          imagePath="/image8.jpg"
          title="Hot Water Heater"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image3.jpg"
          title="Burst Pipe Repair"
          description="this is description"
        />

        <ServiceCard
          imagePath="/download.jpeg"
          title="Toilet Repair"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image1.jpg"
          title="Gas Line Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image17.jpg"
          title="Faucet"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image8.jpg"
          title="Sump Pump Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image17.jpg"
          title="Heating"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image1.jpg"
          title="Boiler Repair & Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image2.jpg"
          title="Thermostat Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image8.jpg"
          title="Radiator Repair"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image7.jpg"
          title="Drainage"
          description="this is description"
        />
      </motion.section>
    </div>
  );
}

export function ServiceCard({ imagePath, title, description }) {
  return (
    <motion.div
        className={styles.serviceCard}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
    <Link href="/contact">
        <Image
          className={styles.serviceCardImage}
          src={imagePath}
          width={100}
          height={100}
          alt={"no owrking"}
        />
        <div className={styles.serviceCardDetailsWrapper}>
          <h3 className={styles.serviceCardHeading}>{title}</h3>
          <p className={styles.serviceCardDescription}>{description}</p>
        </div>
    </Link>
      </motion.div>
  );
}
