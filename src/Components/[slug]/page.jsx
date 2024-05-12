"use client"

import SmallImageHeader from '@/Components/SmallImageHeader'
import React from 'react'
import { motion } from 'framer-motion'
import styles from "../../../Components/Css/services.module.css"

export default function page({ heading="asdfas", paragraph="Asdfasf" }) {
  return (
    <motion.div>
      <SmallImageHeader title={"Slug is working"} imagePath={"/image2.jpg"} alt={"this is fine"} />
      <motion.div>
        <motion.h1 className={styles.serviceCard} >{heading}</motion.h1>
        <motion.p>
          {paragraph}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
