"use client"
import React from 'react'
import { motion } from "framer-motion"
import styles from "./Css/navbar.module.css";
import { fontFamily } from './fontStyle';
import Link from 'next/link';


export default function NavBar() {
    return (
        <motion.nav className={`${styles.navbar} ${fontFamily.className} `} >
            <motion.h1 className={styles.brandName}>
                Dhillon Brothers
            </motion.h1>
            <motion.section className={styles.linkSection}>
                <LinkComponent path="/" name={"Home"} />
                <LinkComponent path="/services" name={"Services"} />
                <LinkComponent path="/about" name={"About Us"} />
                <LinkComponent path="/contact" name={"Contact Us"} />
            </motion.section>


            <motion.div className={styles.menu}>M</motion.div>
        </motion.nav>
    )
}


function LinkComponent({ path, name }) {
    return (
        <Link href={path} className={styles.link}>
            {name}
        </Link>
    )
}
