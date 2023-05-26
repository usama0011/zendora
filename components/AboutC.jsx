import styles from "../styles/AboutC.module.css";
import Image from "next/image";
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

const AboutC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.divone}>
          <Image className={styles.imageone} fill alt="imageonebeauty" src={require("../public/Mtwo.png")} />
        </div>
        <div className={styles.divtwo}>
          <Image className={styles.imagetwo} fill alt="imageonebeauty" src={require("../public/Mone.png")} />

        </div>
        <div className={styles.divthree}>
          <Image className={styles.imagethree} fill alt="imageonebeauty" src={require("../public/Mthree.png")} />

        </div>
        <div className={styles.divfour}>
          <Image className={styles.imagefour} fill alt="imageonebeauty" src={require("../public/Mfour.png")} />

        </div>
      </div>
      <div className={styles.rightside}>
        <p className={styles.title}>
          ABOUT <span className={styles.zendora}>Zendora</span>
        </p>
        <h1 className={styles.largeTitle}>
          <span className={styles.welcome}>Welcome To</span> Zendora Salon
          Suites
        </h1>
        <p className={styles.description}>
          Where your salon business IS our business. Our gorgeous facility
          accommodates 27 salon Professionals. From multiple paint options to
          luxurious lighting, we believe in letting you be the designer of your
          space! Each suite comes with the package.
        </p>
        <div className={styles.checkContainer}>
          <div className={styles.singleTick}>
            <CheckBadgeIcon className={styles.mytick} />
            <p> Hand selected furniture per your profession</p>
          </div>
          <div className={styles.singleTick}> <CheckBadgeIcon className={styles.mytick} />
            <p> Temperature controls in each suite for maximum comfort</p></div>
          <div className={styles.singleTick}> <CheckBadgeIcon className={styles.mytick} />
            <p> A designated secure waiting room for your clients</p></div>
          <div className={styles.singleTick}> <CheckBadgeIcon className={styles.mytick} />
            <p> Online booking and marketing to help grow your business</p></div>
        </div>
        <div className={styles.contactUs}>
          <button>VIEW OUR GALLERY</button><button><Link href="/contactus">CONTACT NOW</Link></button>
        </div>
      </div>
    </div>
  );
};

export default AboutC;
