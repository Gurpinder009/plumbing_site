"use client"
import React from 'react';
import {motion} from "framer-motion";
import styles from "./Css/drawer.module.css"
import Link from 'next/link';
import { faHome, faPhone, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Drawer() {
  return (
    <motion.section className={styles.drawer}>
      <Link href="/" className={styles.drawerLinks}>
      <FontAwesomeIcon className={styles.icon} icon={faHome} />
        
        Home</Link>
      <Link href="/services" className={styles.drawerLinks}>
      <FontAwesomeIcon className={styles.icon} icon={faScrewdriverWrench} />
        
        Services</Link>
      <Link href="/about" className={styles.drawerLinks}>
      <FontAwesomeIcon className={styles.icon} icon={faUser} />
        
        
        About</Link>
      <Link href="/contact" className={styles.drawerLinks}>
      <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        
        Contact Us</Link>
    </motion.section>
  )
}
