"use client"
import React from 'react'
import {motion} from "framer-motion"
import SmallImageHeader from '@/Components/SmallImageHeader'
import styles from "../../Components/Css/gallery.module.css"
import Image from 'next/image'
export default function page() {
  return (
    <motion.div>
      <SmallImageHeader title="Our Work" alt={"loading..."} imagePath={"/get.jpg"} />
      <motion.div className={styles.galleryWrapper}>
        <motion.div className={styles.imageWrapper}>
          <Image src={"/get.jpg"} alt="loading.."  width={500} height={200} className={styles.galleryImages}/>
        </motion.div>





      

    
       

      </motion.div>



    </motion.div>
  )
}
