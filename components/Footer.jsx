import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className={styles.outer}>
            <div className={styles.innerContainer}>
                <div className={styles.upperPart}>
                    <div className={styles.upperLeft}>
                        <div className={styles.imageContainer}>
                            <Image className={styles.myLogo} src="/companyImage.png" alt='userImage' fill />
                        </div>
                    </div>
                    <div className={styles.upperRight}>
                        <div className={styles.imgContainer}>
                            <Image fill src="/facebook.png" alt='userImage' />
                        </div>
                        <div className={styles.imgContainer}>
                            <Image fill src="/instagram.png" alt='userImage' />

                        </div>
                        <div className={styles.imgContainer}>
                            <Image fill src="/youtube.png" alt='userImage' />

                        </div>
                    </div>
                </div>
                <div className={styles.middlePart}>
                    <div className={styles.contactInfo}>
                        <h3>Contact info</h3>
                        <div>
                            <span>Address:</span>
                            <span>9820 Dave Ward Dr. Conway, AR</span>
                        </div>
                        <div>
                            <span>Phone:</span>
                            <span>+1 123 456 789</span>
                        </div>
                        <div>
                            <span>Email:</span>
                            <span>INFO@ZENDORASALON.COM</span>
                        </div>
                    </div>
                    <div className={styles.quickLinks}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Our Professionals</li>
                            <li>Our Suites</li>
                            <li>Gallery</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className={styles.ourLocation}>
                        <h3>Our Location</h3>
                        <p>9820 Dave Ward Dr. Conway, AR</p>
                    </div>
                    <div className={styles.paymentMethods}>
                        <h3>Payment methods</h3>
                        <p>
                            Each Professional is an independent business owner. Please speak to your service provider for more details.
                        </p>
                    </div>
                </div>
                <div className={styles.bottomPart}>
                    <div className={styles.bottomLeft}> © Copyright 2022 Zendora</div>
                    <div className={styles.bottomRight}>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Site map</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer