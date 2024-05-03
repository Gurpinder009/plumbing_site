
import React from "react";
import {motion} from "framer-motion"
import styles from "./Css/smallImageHeader.module.css";
import Image from "next/image";

const defaultQuality ={
  width:400,
  height:500
}

export default function SmallImageHeader({title,imagePath,alt,quality=defaultQuality}){
    return <motion.div className={styles.smallImageHeaderWrapper}>
        <Image className={styles.smallImageHeaderImage} src={imagePath} width={quality.width} height={quality.height} alt={alt}/>
        <motion.h1 className={styles.smallImageHeaderHeading}>{title} </motion.h1>
    </motion.div>
  }