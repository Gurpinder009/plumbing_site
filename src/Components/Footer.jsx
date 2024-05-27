"use client";
import { motion } from "framer-motion"
import React from 'react'
import styles from "./Css/footer.module.css";
import { faAngleRight, faEnvelope, faHome, faImages, faLocationDot, faPhone, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

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
      <motion.h3>Availability</motion.h3>
      <ListItemComponent title={"Weekdays: 8am - 5pm"} icon={faAngleRight} />
      <ListItemComponent title={"Weekends: 9am - 2pm"} icon={faAngleRight} />
    </motion.ul>
  )
}

function ListItemComponent({ icon, title }) {
  return <motion.li>
    <FontAwesomeIcon icon={icon} className={styles.icon} />
    {title}</motion.li>
}


function FooterContactDetails() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <motion.h3>Contact Details</motion.h3>
      <ListItemComponent title={"13250 80 Ave Surrey, BC, V3W3B3"} icon={faLocationDot} />
      <ListItemComponent title={"+1604-791-6600"} icon={faPhone} />
      <ListItemComponent title={"+1604-791-6700"} icon={faPhone} />
      <ListItemComponent title={"Dhillon.plumbing@gmail.com"} icon={faEnvelope} />
      <ListItemComponent title={"Dhillon.plumbing@hotmail.com"} icon={faEnvelope} />

    </motion.ul>
  )
}


function FooterQuickLinks() {
  return (
    <motion.ul className={styles.FooterQuickLinks}>
      <motion.h3>Quick Links</motion.h3>
      <FooterQuickLinkItem  icon={faHome} path={"/"} title={"Home"} />
      <FooterQuickLinkItem  icon={faScrewdriverWrench} path={"/services"} title={"Services"} />
      <FooterQuickLinkItem  icon={faImages} path={"/gallery"} title={"Gallery"} />
      <FooterQuickLinkItem  icon={faPhone} path={"/contact"} title={"Contact"} />
      <FooterQuickLinkItem  icon={faUser} path={"/about"} title={"About"} />
    </motion.ul>
  )
}



function FooterQuickLinkItem({ title, icon, path }) {
  return <Link href={path} className={styles.footerLinkItem}>
    <motion.li whileHover={{scaleX:1.05}}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {title}</motion.li>
  </Link>
}





function FooterServices() {
  return (
    <motion.ul className={styles.footerContactDetails}>
      <motion.h3>
        Our Services</motion.h3>
      <ListItemComponent title={"Plumbing and Hydronic Heating"} icon={faAngleRight} />
      <ListItemComponent title={"Hot Water Tanks Repair & New Installation"} icon={faAngleRight} />
      <ListItemComponent title={"Burst Pipe Repair"} icon={faAngleRight} />
      <ListItemComponent title={"Gas Line Installation"} icon={faAngleRight} />
      <ListItemComponent title={"Faucets Installation & Repair"} icon={faAngleRight} />
      <ListItemComponent title={"New Sump Pump Installation"} icon={faAngleRight} />
      <ListItemComponent title={"Boiler Repair & New Installation"} icon={faAngleRight} />
    </motion.ul>

  )
}



function CopyrightSection() {
  return (
    <motion.div className={styles.copyrightSection} >
      <motion.p>
        <FontAwesomeIcon icon={faCopyright} />
        Dhillon Bro&apos;s Mechanical LTD, all Rights Reserved.</motion.p>
      <motion.p>Designed by <strong>GSDESIGNS</strong></motion.p>
    </motion.div>
  )
}