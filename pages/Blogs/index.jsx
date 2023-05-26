import NavBar from '@/components/NavBar'
import React from 'react'
import styles from '../../styles/blog.module.css'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
const Index = () => {
  const dummyData = [
    {
      coverImage: "/blogone.png",
      author: "zendora",
      date: "December 21, 2022",
      title: "The  8 Best Clay Masks For Acne Prone Skin",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have",
      relatedCat:"spa",
    },
    {
      coverImage: "/blogtwo.png",
      author: "zendora",
      date: "December 21, 2022",
      title: "Well-ageing: Why is the skin matrisome important?",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
      relatedCat:"spa",
    }
  ]
  return (
    <>
      <NavBar />
      <div className={styles.blogContainter}>
        <div className={styles.upperContainer}>
          <div className={styles.bgImageContainer}>
            <Image src="/bg.png" alt='backgourndImage' fill />
          </div>
          <div className={styles.ourprofessionalContainer}>
            <h1>Our Blogs</h1>
            <div className={styles.pre}>
              <span>Home</span>/ <span>Blog</span>
            </div>
          </div>
        </div>
        <div className={styles.blogContainer}>
          {dummyData.map((item, i) => {
            return (
              <Link href={`/Blogs/${i + 1}`} key={i}>
                <div key={i} className={styles.singleItemContainer}>
                  <div className={styles.blogImageContianer}>
                    <Image src={item.coverImage} fill alt='salaonImage' />
                  </div>
                  <div className={styles.descriptionCotinaer}>
                    <div><span>By</span><span>zendora</span> / <span>{item.date}</span> </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            )
          }
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index