"use client"
import React from 'react';
import { motion } from "framer-motion";
import styles from "./Css/drawer.module.css"
import Link from 'next/link';
import { faHome, faPhone, faScrewdriverWrench, faUser, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Drawer({ handleDrawer }) {
  return (
    <motion.section className={styles.drawer} initial={{ x: "-18rem" }} animate={{ x: 0 }} exit={{ x: "-18rem" }} transition={{ type: "tween" }} >
      <DrawerLink handleDrawer={handleDrawer} title={"Home"} icon={faHome} path="/" />
      <DrawerLink handleDrawer={handleDrawer} title={"Services"} icon={faScrewdriverWrench} path="/services" />
      <DrawerLink handleDrawer={handleDrawer} title={"Contact Us"} icon={faPhone} path="/contact" />
      <DrawerLink handleDrawer={handleDrawer} title={"About"} icon={faUser} path="/about" />
      <DrawerLink handleDrawer={handleDrawer} title={"Gallery"} icon={faImages} path="/gallery" />
    </motion.section>
  )
}





function DrawerLink({ title, icon, path, handleDrawer }) {
  return (
    <motion.div whileHover={{scaleX:1.06}}>
      <Link href={path} className={styles.drawerLinks} onClick={handleDrawer}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
        {title}
      </Link>
    </motion.div>
  )
}