"use client";
import React, { useRef} from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SmallImageHeader from "@/Components/SmallImageHeader";
import styles from "../../Components/Css/contactUs.module.css";
import emailjs from "@emailjs/browser"

function Contact() {
  return (
    <div>
      <SmallImageHeader
        title={"Contact Us"}
        imagePath={"/image14.jpg"}
        alt={"Loadding..."}
      />
        <motion.div className={styles.formAndMapWrapper} initial={{opacity:0,y:"-2rem"}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:1}}>
      <div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.773924331471!2d-122.85802272393333!3d49.14791667137286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9843c95948d%3A0x8218547c990e8051!2s13250%2080%20Ave%2C%20Surrey%2C%20BC%20V3W%203B3!5e0!3m2!1sen!2sca!4v1714856485676!5m2!1sen!2sca"
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
  const formRef = useRef();
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

    emailjs.sendForm('service_fff4nh7', 'template_simple1', data, 'GH5SGKEL9d62Zh1YV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      formRef.current.reset();
  };

  return (
    <motion.form ref={formRef} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <motion.h1 className={styles.formHeading}>GET IN TOUCH</motion.h1>
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
      <motion.button whileHover={{backgroundColor:"#1e6091", color:"#fff"}} className={styles.btn}>Reset</motion.button>
      <motion.button whileHover={{backgroundColor:"#fff", color:"#1e6091"}} className={styles.btn}>Submit</motion.button>

      </motion.section>
    </motion.form>
  );
}
