"use client";
import SmallImageHeader from "@/Components/SmallImageHeader";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../Components/Css/services.module.css";
import Image from "next/image";

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
          imagePath="/get.jpg"
          title="Hot Water Heater"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Burst Pipe Repair"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Toilet Repair"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Gas Line Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Faucet"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Sump Pump Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Heating"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Boiler Repair & Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Thermostat Installation"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Radiator Repair"
          description="this is description"
        />

        <ServiceCard
          imagePath="/get.jpg"
          title="Drainage"
          description="this is description"
        />
      </motion.section>
    </div>
  );
}

function ServiceCard({ imagePath, title, description }) {
  return (
    <motion.div className={styles.serviceCard}>
      <Image
        className={styles.serviceCardImage}
        src={imagePath}
        width={300}
        height={300}
        alt={"no owrking"}
      />
      <div className={styles.serviceCardDetailsWrapper}>
        <h3 className={styles.serviceCardHeading}>{title}</h3>
        <p className={styles.serviceCardDescription}>{description}</p>
      </div>
    </motion.div>
  );
}
