"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "../Components/Css/home.module.css"

export default function Home() {
  return (
    <motion.main>
      <Slider />
    </motion.main>
  );
}

function Slider() {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);
  return (
    <motion.div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Slide path="/image14.jpg" />
          </div>
          <div className="embla__slide">
            <Slide path="/image2.jpg" />
          </div>
          <div className="embla__slide">
            <Slide path="/image15.jpg" />
          </div>
        </div>
      </div>

      <motion.div>this is working fien</motion.div>
    </motion.div>
  );
}

function Slide({ path }) {
  return (
    <div className={styles.slideImageWrapper}>
      <motion.div className={styles.slideText}>
        <h1>Dhillon Bro's Mechanical LTD</h1>
        <p>Stuck with a plumbing problem? Don't worry, help is just a call away! Here in Surrey, BC </p>
      </motion.div>
      <Image className={styles.slideImage} src={path} width={1000} height={1000} alt="This is not working"></Image>
    </div>
  );
}
