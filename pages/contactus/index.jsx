import React from "react";
import styles from "../../styles/contact.module.css";
import NavBar from "@/components/NavBar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Footer from "@/components/Footer";
const index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.contactContainer}>
        <div className={styles.upperContainer}>
          <div className={styles.bgImageContainer}>
            <Image src="/bg.png" alt='backgourndImage' fill />
          </div>
          <div className={styles.ourprofessionalContainer}>
            <h1>Contact us</h1>
            <div className={styles.pre}>
              <span>Home</span>/<span> Contact us</span>
            </div>
          </div>
        </div>
        <div className={styles.maxContainer}>
          <div className={styles.contactusContainer}>
            <div className={styles.contactLeft}>
              <h1>Contact Info</h1>
              <div>
                <div className={styles.uppp}><PhoneIcon className={styles.phoneIcon} /><span>Phone</span></div>
                <div className={styles.numContainer}>
                  <p>+1 312-808-1999</p> | <p>+1 233-688-8999</p>
                </div>
                <p>( This number is for leasing information purposes. Please allow 24 hours for a Zendora Associate to contact you )</p>
              </div>
              <div className={styles.emailContainer}>
                <div className={styles.bottom}><EnvelopeIcon className={styles.phoneIcon} /><span>Email</span></div>
                <p>INFO@ZENDORASALON.COM</p>
              </div>
            </div>
            <div className={styles.contactRight}>
              <h1>Get in Touch</h1>
              <form action="">
                <input type="text" placeholder="Name" /><input type="email" placeholder="Email" />
                <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                <button>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
        <iframe
            className={styles.googleMap}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3631555457647!2d-122.08429468472292!3d37.422279834116726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eac0c13e1a3%3A0x2f71f9b5761dcdd6!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1602035052230!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
