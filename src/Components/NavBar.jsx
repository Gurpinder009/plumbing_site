"use client"
import React from 'react'
import { motion } from "framer-motion"
import styles from "./Css/navbar.module.css";
import { fontFamily } from './fontStyle';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faScrewdriverWrench, faImages, faUser, faPhone, faBars, } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


export default function NavBar({handleDrawer}) {
    return (
        <motion.nav className={`${styles.navbar} ${fontFamily.className} `} >
            <motion.h1 className={styles.brandName}>
                <Image className={styles.brandLogo} src={"/logo.png"} width={250} height={60} />
            </motion.h1>
            <motion.section className={styles.linkSection}>
                <LinkComponent path="/" icon={faHome} name={"Home"} />
                <LinkComponent path="/services" icon={faScrewdriverWrench} name={"Services"} />
                <LinkComponent path="/gallery" icon={faImages} name={"Gallery"} />

                <LinkComponent path="/about" icon={faUser} name={"About us"} />
                <LinkComponent path="/contact" icon={faPhone} name={"Contact Us"} />
            </motion.section>


            <motion.button className={styles.menu} onClick={handleDrawer}>
                <FontAwesomeIcon icon={faBars} />
            </motion.button>
        </motion.nav>
    )
}


function LinkComponent({ path, name, icon }) {
    return (
        <Link href={path} className={styles.link}>
            <FontAwesomeIcon icon={icon} /> {name}
        </Link>
    )
}
