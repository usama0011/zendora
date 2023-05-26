import React from 'react'
import styles from '../../styles/oursuits.module.css'
import Image from 'next/image'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { ArrowUturnRightIcon } from '@heroicons/react/24/outline'
import GallerySlider from '@/components/GallerySlider'
const Index = () => {
  const galleryData = [
    {
      coverImage: "/Gfive.png",
      itemNo: "01",
      itemTitle: "The Massage and Waxing",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "/Gfive.png",
      itemNo: "02",
      itemTitle: "The Threading and Lashes",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "/Gfive.png",
      itemNo: "03",
      itemTitle: "Hair Styling, Nails, Spa Services",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "/Gfive.png",
      itemNo: "04",
      itemTitle: "Hair Washing",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."

    },
    {
      coverImage: "/Gfive.png",
      itemNo: "05",
      itemTitle: "Hair Cutting and Color",
      itemDescription: "We broke the ceiling on the inductry standard! Each suite is insulated and..."
    },
  ]
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.upperContainer}>
          <div className={styles.bgImageContainer}>
            <Image src="/bg.png" alt='backgourndImage' fill />
          </div>
          <div className={styles.ourprofessionalContainer}>
            <h1>Our Suites</h1>
            <div className={styles.pre}>
              <span>Home</span>/<span> Our Suites</span>
            </div>
          </div>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.pOne}>We broke the ceiling on the industry standard! Each suite is insulated and completely private. We maximized the square footage with sliders instead of doors and windows that can be electronically frosted with the touch of a button! Each room comes with its own thermostat, so you have total control. Our facility is designed for your safety with surveillance, and we have a designated waiting room for your clients, so your services are totally interruption free.</p>
          <p className={styles.pOne}>We believe in the power of social media to grow any business so help yourself to our marketing area to take photos of your beautiful work without having a ring light in your way! Some salon suites feel a little too sterile and cookie cutter, so we added skylights in interior rooms to bring the outside to you! We offer social media education, industry education, and business tips and tricks! We would love the opportunity to help you grow your business!</p>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.imageContainer}>
            <Image className={styles.myImage} fill src="/suitone.png" alt='salaonImage' />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.myImage} fill src="/suittwo.png" alt='salaonImage' />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.myImage} fill src="/suitone.png" alt='salaonImage' />
          </div>
        </div>
        <div className={styles.beliefContainer}>
          <div className={styles.addContainer}>
            <div className={styles.addLeft}>
              <h1>We Believe In</h1>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Hand selected furniture per your profession</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Temperature controls in each suite for maximum comfort</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>A designated secure waiting room for your clients</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Online booking and marketing to help grow your business</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>True to Tone lighting throughout to showcase your creations</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Designated Social Media Area to market your work</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p>Innovative Skylights in non-window suites to create an inviting atmosphere</p>
              </div>
              <div className={styles.addItem}>
                <ArrowUturnRightIcon className={styles.arrowRight} />
                <p> Washer and Dryer available on premises</p>
              </div>
            </div>
            <div className={styles.addRight}>
              <Image src="/solan.jpg" alt="Payment Plan" fill />
            </div>
          </div>
          <div className={styles.beliefleft}></div>
          <div className={styles.beliefRight}>
            <Image className={styles.image} src="/bone.png" alt="Payment Plan" fill />
          </div>
        </div>
        <GallerySlider/>
        <div className={styles.paymentcontainer}>
          <div className={styles.payment}>
            <Image className={styles.image} src="/pay.jpg" alt="Payment Plan" width={500} height={450} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>1 Year Incentives</h3>
              <p className={styles.price}>$199 <br /> </p><p>/ month</p>
              <p className={styles.description}>One-week free rent</p>
              <p className={styles.description}>One week half off</p>
              <button className={styles.button}>Choose Plan</button>
            </div>
          </div>
          <div className={styles.payment}>
            <Image className={styles.image} src="/pay.jpg" alt="Payment Plan" width={500} height={450} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>1 Year Incentives</h3>
              <p className={styles.price}>$199 <br /> </p><p>/ month</p>
              <p className={styles.description}>One-week free rent</p>
              <p className={styles.description}>One week half off</p>
              <button className={styles.button}>Choose Plan</button>
            </div>
          </div>
          <div className={styles.payment}>
            <Image className={styles.image} src="/pay.jpg" alt="Payment Plan" width={500} height={450} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>1 Year Incentives</h3>
              <p className={styles.price}>$199 <br /> </p><p>/ month</p>
              <p className={styles.description}>One-week free rent</p>
              <p className={styles.description}>One week half off</p>
              <button className={styles.button}>Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index