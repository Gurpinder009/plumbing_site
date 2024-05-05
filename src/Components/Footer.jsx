"use client";
import { motion } from "framer-motion"
import React from 'react'
import styles from "./Css/footer.module.css";
import { faAngleRight, faEnvelope, faHome, faImages, faLocationDot, faPhone, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <motion.footer className={styles.footer}>
      <motion.div className={styles.footerGridArea}>

        <FooterServiceAreas />
        <FooterContactDetails />
        <FooterServices />
        <FooterQuickLinks />

      </motion.div>

      <CopyrightSection />

    </motion.footer>
  )
}





function FooterServiceAreas() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <h3>Availability</h3>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Weekdays: 8am - 10pm</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Weekends: 8am - 4pm</li>

    </motion.ul>
  )
}


function FooterContactDetails() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <h3>Contact Details</h3>
      <li>
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />

        13250 80 Ave Surrey, BC,
        V3W3B3
      </li>
      <li>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />

        +1604-791-6600

      </li>
      <li>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />

        +1604-791-6700

      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        Dhillon.plumbing@gmail.com</li>
    </motion.ul>
  )
}


function FooterQuickLinks() {
  return (
    <motion.ul className={styles.FooterQuickLinks}>
      <h3>Quick Links</h3>
      <li>
        <FontAwesomeIcon icon={faHome} className={styles.icon} />

        Home</li>
      <li>
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />

        Contact Us</li>
      <li>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />

        About</li>
      <li>
        <FontAwesomeIcon icon={faScrewdriverWrench} className={styles.icon} />

        Services</li>
      <li>
        <FontAwesomeIcon icon={faImages} className={styles.icon} />

        Gallery</li>

    </motion.ul>
  )
}



function FooterServices() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <h3>
        Our Services</h3>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Plumbing</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Hot Water Heater</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Burst Pipe Repair</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Toilet Repair</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Gas Line Installation</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Faucet</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Sump Pump Installation</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Heating</li>
      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Boiler Repair & Installation</li>



      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Thermostat Installation</li>



      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Radiator Repair</li>


      <li>
        <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />

        Drainage</li>




    </motion.ul>

  )
}



function CopyrightSection() {
  return (
    <motion.div className={styles.copyrightSection}>

      <motion.p>
        <FontAwesomeIcon icon={faCopyright} />
        Dhillon Bro' Mechanical LTD, all Rights Reserved.</motion.p>
      <motion.p>Designed by <strong>GSDESIGNS</strong></motion.p>
    </motion.div>
  )
}