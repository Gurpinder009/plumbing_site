"use client";
import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SmallImageHeader from "@/Components/SmallImageHeader";
import styles from "../../Components/Css/contactUs.module.css";

function Contact() {
  return (
    <div>
      <SmallImageHeader
        title={"Contact Us"}
        imagePath={"/get.jpg"}
        alt={"Loadding..."}
      />
        <motion.div className={styles.formAndMapWrapper}>
      <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49457.41761264978!2d-122.80101743326948!3d49.163040786636465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9e4b24a853b%3A0x87bba2256d9df31!2s14485%2088a%20Ave%2C%20Surrey%2C%20BC%20V3R%201A2!5e0!3m2!1sen!2sca!4v1714697596007!5m2!1sen!2sca"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className={styles.locationIframe}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <ContactUsForm />
      </div>
        </motion.div>
    </div>
  );
}

export default Contact;

function ContactUsForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <motion.form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <motion.h1 className={styles.formHeading}>Get in touch</motion.h1>
      <motion.div className={styles.formFieldWrapper}>
        <motion.div className={styles.formField}>
          <motion.input
            className={styles.inputField}
            {...register("fname")}
            placeholder="Your Full Name"
          />
          <motion.small className={styles.error} />
        </motion.div>

        <motion.div>
          <motion.input
            {...register("email")}
            className={styles.inputField}
            placeholder="Your Email Address"
          />
          <motion.small className={styles.error} />
        </motion.div>

        <motion.div>
          <motion.input
            {...register("phone")}
            className={styles.inputField}
            placeholder="Your Phone Number"
          />
          <motion.small className={styles.error} />
        </motion.div>

        <motion.div>
          <motion.textarea
            {...register("message")}
            row={5}
            className={styles.textarea}
            placeholder="write your message here"
          />
          <motion.small className={styles.error} />
        </motion.div>
      </motion.div>

      <motion.section className={styles.buttonWrapper}>
      <motion.button className={styles.btn}>Submit</motion.button>
      <motion.button className={styles.btn}>Reset</motion.button>

      </motion.section>
    </motion.form>
  );
}
