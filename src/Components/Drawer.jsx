"use client"
import React from 'react';
import { motion } from "framer-motion";
import styles from "./Css/drawer.module.css"
import Link from 'next/link';
import { faHome, faPhone, faScrewdriverWrench, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Drawer() {
  return (
    <motion.section className={styles.drawer}>

     <DrawerLink title={"Home"} icon={faHome} path="/"/>
     <DrawerLink title={"Services"} icon={faScrewdriverWrench} path="/services"/>
     <DrawerLink title={"Contact Us"} icon={faPhone} path="/contact"/>
     <DrawerLink title={"About"} icon={faUser} path="/about"/>
     <DrawerLink title={"Gallery"} icon={faImages} path="/gallery"/>


    </motion.section>
  )
}





function DrawerLink({title, icon, path}) {
  return (

    <Link href={path} className={styles.drawerLinks}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      {title}
      </Link>
  )
}