"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "../Components/Css/home.module.css";
import serviceStyles from "../Components/Css/services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faScrewdriverWrench,
  faShield,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { ServiceCard } from "./services/page";
import Link from "next/link";

export default function Home() {
  return (
    <motion.main>
      <Slider />
      <WhyChooseUsSection />
      <hr className="" />
      <SeviceCardsSection />
    </motion.main>
  );
}

//? Slider Componenet
function Slider() {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);
  return (
    <motion.div>
      <motion.div className="embla" ref={emblaRef}>
        <motion.div className="embla__container">
          <motion.div className="embla__slide">
            <Slide path="/image14.jpg" />
          </motion.div>
          <motion.div className="embla__slide">
            <Slide path="/image2.jpg" />
          </motion.div>
          <motion.div className="embla__slide">
            <Slide path="/image15.jpg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

//? component for individial Slide
function Slide({ path }) {
  return (
    <motion.div className={styles.slideImageWrapper}>
      <motion.div className={styles.slideText}>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: "-4rem" }}
          viewport={{ once: true }}
        >
          Dhillon Bro&apos;s Mechanical LTD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: "-4rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stuck with a plumbing problem? Don&apos;t worry, help is just a call away!
          Here in Surrey, BC
        </motion.p>
        <SlideButtons />
      </motion.div>
      <Image
        className={styles.slideImage}
        src={path}
        width={1000}
        height={1000}
        alt="This is not working"
      ></Image>
    </motion.div>
  );
}

//? Slide Buttons Componenet
function SlideButtons() {
  return (
    <motion.div
      className={styles.slideButton}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: "-4rem" }}
      
      viewport={{ once: true }}
    >
      <Link href={"/about"}>
        <motion.div whileHover={{backgroundColor:"#1e6091",color:"#fff"}}>About Us</motion.div>
      </Link>
      <Link href={"/gallery"}>
        <motion.div whileHover={{backgroundColor:"#1e6091",color:"#fff"}}>Our Work</motion.div>
      </Link>
    </motion.div>
  );
}

//? component of WhyChooseUs Section in home page
function WhyChooseUsSection() {
  return (
    <div className={styles.whyChooseUsWrapper}>
      <h1 className={styles.whyChooseUsHeading}>Why Choose Us</h1>
      <p style={{ textAlign: "center", color: "#555555" }}>
        Our plumbers are background-checked, trained, and dedicated to providing
        excellent service. We offer upfront pricing so you know exactly what to
        expect, and we guarantee our work so you can have peace of mind.
      </p>

      <ul className={styles.whyChooseUsContainer}>
        <WhyChooseUsItem icon={faShield} title={"Reliability"} />
        <WhyChooseUsItem icon={faTruckFast} title={"Quick Service"} />
        <WhyChooseUsItem icon={faScrewdriverWrench} title={"Cost Effective"} />
        <WhyChooseUsItem icon={faHandshake} title={"Customer Satisfaction"} />
      </ul>
    </div>
  );
}

//? Component for individual card in WhyChoose section
function WhyChooseUsItem({ icon, title }) {
  return (
    <motion.li
      className={styles.whyChooseUsItem}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      viewport={{ once: true }}
    >
      <FontAwesomeIcon
        className={styles.whyChooseUsItemIcon}
        icon={icon}
      ></FontAwesomeIcon>
      <h3>{title}</h3>
    </motion.li>
  );
}

//? Wrapper for ServiceCards secton
function SeviceCardsSection() {
  return (
    <div className={styles.whyChooseUsWrapper}>
      <h1 className={styles.whyChooseUsHeading}>Services Offered</h1>
      <p style={{ textAlign: "center", color: "#555555" }}>
        At Dhillon Bro&apos;s Plumbing LTD, we offer expert plumbing services to keep
        your home&apos;s water flowing smoothly. From leaky pipes to drain cleaning,
        our licensed and insured plumbers can handle any problem, big or small.
        We&apos;re committed to providing fast, reliable service so you can get back
        to enjoying your home.
      </p>

      <motion.section className={serviceStyles.servicesWrapper}>
        <ServiceCard
          imagePath="/image21.jpg"
          title="Plumbing"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image8.jpg"
          title="Hot Water Heater"
          description="this is description"
        />

        <ServiceCard
          imagePath="/image3.jpg"
          title="Burst Pipe Repair"
          description="this is description"
        />
      </motion.section>
    </div>
  );
}
