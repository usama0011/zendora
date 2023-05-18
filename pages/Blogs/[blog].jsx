import React from 'react'
import styles from '../../styles/singleblog.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
const SingleBlog = () => {
    return (
        <>
            <NavBar />
            <div className={styles.blogContainer}>
                <div className={styles.postcontainer}>one</div>
                <div className={styles.relatedTagContainer}>two</div>
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog