"use client"
import React from 'react';
import {motion} from "framer-motion";
import styles from "./Css/drawer.module.css"
import Link from 'next/link';

export default function Drawer() {
  return (
    <motion.section className={styles.drawer}>
      <Link href="/" className={styles.drawerLinks}><div >Home</div></Link>
      <Link href="/services" className={styles.drawerLinks}><div >Services</div></Link>
      <Link href="/about" className={styles.drawerLinks}><div >About</div></Link>
      <Link href="/contact" className={styles.drawerLinks}><div >Contact Us</div></Link>
    </motion.section>
  )
}
