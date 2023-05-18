import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import styles from '../../styles/bookappointment.module.css'
import React from 'react'
import Image from 'next/image'

const Index = () => {
  return (
    <>
       <NavBar />
      <div className={styles.upperContainer}>
      <div className={styles.bgImageContainer}>
               <Image src="/bg.png" alt='backgourndImage' fill/>
            </div>
        <div className={styles.ourprofessionalContainer}>
          <h1>Book an Appointment</h1>
          <div className={styles.pre}>
            <span>Home</span>/<span> Book An Appointment</span>
          </div>
        </div>
      </div>
      <div className={styles.appointContainer}>
        <form action="">

          <div className={styles.flexItem}>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Phone' />
          </div>
          <div className={styles.flexItem}>
            <input type="text" placeholder='Your Address' />
            <input type="text" placeholder='Your Email' />
          </div>
          <div className={styles.flexItem}>
            <select>
              <option>Spa</option>
              <option>Massage</option>
              <option>Salon</option>
              <option>Barber</option>
            </select>
            <input type="date" placeholder='Phone' />
          </div>
          <div className={styles.messageContainer}>
            <textarea placeholder='Message' />
          </div>
          <button>SEND</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Index