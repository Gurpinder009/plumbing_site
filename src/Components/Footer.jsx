"use client";
import { motion } from "framer-motion"
import React from 'react'
import styles from "./Css/footer.module.css";

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
      <li>Weekdays 8 - 10</li>
      <li>Weekends 8 - 4</li>
      <li>British Columbia</li>
    </motion.ul>
  )
}


function FooterContactDetails() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <h3>Contact Details</h3>
      <li>L 14485 88A Avenue, Surrey, BC</li>
      <li>P +17788623249</li>
      <li>EM innfo@gmail.com</li>
    </motion.ul>
  )
}


function FooterQuickLinks() {
  return (
    <motion.ul className={styles.FooterQuickLinks}>
      <h3>Quick Links</h3>
      <li>Home</li>
      <li>Contact Us</li>
      <li>About</li>
      <li>Services</li>
      <li>Gallery</li>

    </motion.ul>
  )
}



function FooterServices() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <h3>Our Services</h3>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>
      <li>Plumbing</li>




    </motion.ul>

  )
}



function CopyrightSection() {
  return (
    <motion.div className={styles.copyrightSection}>

      <motion.p>c dhillonbrother, all Rights Reserved.</motion.p>
      <motion.p>Designed and coded by <strong>GSDESIGNS</strong></motion.p>
    </motion.div>
  )
}