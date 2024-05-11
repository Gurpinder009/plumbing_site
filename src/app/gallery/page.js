"use client";
import React from "react";
import { motion } from "framer-motion";
import SmallImageHeader from "@/Components/SmallImageHeader";
import styles from "../../Components/Css/gallery.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <motion.div>
      <SmallImageHeader
        title="Our Work"
        alt={"loading..."}
        imagePath={"/image15.jpg"}
      />
      <motion.div className={styles.galleryWrapper}>
        <GalleryImage imagePath={"/image1.jpg"}/>
        <GalleryImage imagePath={"/image2.jpg"}/>
        <GalleryImage imagePath={"/image3.jpg"}/>
        <GalleryImage imagePath={"/image4.jpg"}/>
        <GalleryImage imagePath={"/image5.jpg"}/>
        <GalleryImage imagePath={"/image6.jpg"}/>
        <GalleryImage imagePath={"/image7.jpg"}/>
        <GalleryImage imagePath={"/image8.jpg"}/>
        <GalleryImage imagePath={"/image9.jpg"}/>
        <GalleryImage imagePath={"/image10.jpg"}/>
        <GalleryImage imagePath={"/image11.jpg"}/>
        <GalleryImage imagePath={"/image12.jpg"}/>
        <GalleryImage imagePath={"/image13.jpg"}/>

        <GalleryImage imagePath={"/image14.jpg"}/>
        <GalleryImage imagePath={"/image15.jpg"}/>
        <GalleryImage imagePath={"/image16.jpg"}/>
        <GalleryImage imagePath={"/image17.jpg"}/>
        <GalleryImage imagePath={"/image18.jpg"}/>
        <GalleryImage imagePath={"/image19.jpg"}/>
        <GalleryImage imagePath={"/image20.jpg"}/>
        <GalleryImage imagePath={"/image21.jpg"}/>
        






      </motion.div>
    </motion.div>
  );
}
// {/* <h1 className={styles.hoverText}> */}
{/* <FontAwesomeIcon icon={faExpand} className={styles.icon}  /> */}
// Click to Zoom</h1>

function GalleryImage({ imagePath }) {
  return (
    <motion.div className={styles.imageWrapper} initial={{opacity:0}} whileInView={{opacity:1}} whileHover={{scale:1.2}} transition={{duration:0.5}} viewport={{ once: true }}>
        
        
      <Image
        src={imagePath}
        alt="loading.."
        width={500}
        height={200}
        className={styles.galleryImages}
      />
    </motion.div>
  );
}
