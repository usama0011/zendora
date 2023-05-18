import Image from 'next/image'
import styles from '../../styles/ourlocations.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.upperContainer}>
          <div className={styles.bgImageContainer}>
            <Image src="/bg.png" alt='backgourndImage' fill />
          </div>
          <div className={styles.ourprofessionalContainer}>
            <h1>Our Locations</h1>
            <div className={styles.pre}>
              <span>Home</span>/<span> Locations</span>
            </div>
          </div>
        </div>
        <div className={styles.locationContainer}>
  <div>
    <iframe
      className={styles.googleMap}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3631555457647!2d-122.08429468472292!3d37.422279834116726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eac0c13e1a3%3A0x2f71f9b5761dcdd6!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1602035052230!5m2!1sen!2sus"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
  <div>
    <iframe
      className={styles.googleMap}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7714800427945!2d-122.43129778430923!3d37.77397237412759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7eac0c13e1a3%3A0x2f71f9b5761dcdd6!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1602035428615!5m2!1sen!2sus"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>

      </div>
      <Footer />
    </>
  )
}

export default Index