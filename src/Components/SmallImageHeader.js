
import React from "react";
import {motion} from "framer-motion"
import styles from "./Css/smallImageHeader.module.css";
import Image from "next/image";

const defaultQuality ={
  width:1000,
  height:1000
}

export default function SmallImageHeader({title,imagePath,alt,quality=defaultQuality}){
    return <motion.div className={styles.smallImageHeaderWrapper}>
        <Image className={styles.smallImageHeaderImage} src={imagePath} width={quality.width} height={quality.height} alt={alt}/>
        <motion.h1 initial={{opacity:0,y:"-2rem"}} whileInView={{opacity:1, y:0}} transition={{delay:0.5}} viewport={{once:true}} className={styles.smallImageHeaderHeading}>{title} </motion.h1>
    </motion.div>
  }