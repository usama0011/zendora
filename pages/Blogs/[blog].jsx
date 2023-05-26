import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/singleblog.module.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const SingleBlog = () => {
    const router = useRouter();
    const { blog } = router.query;
    const blogId = parseInt(blog, 10); // Convert to number
    console.log(blogId)
    const dummyData = [
        {
            currentPageIndex: 1,
            coverImage: "/blogone.png",
            author: "zendora",
            date: "December 21, 2022",
            title: "The 8 Best Clay Masks For Acne Prone Skin",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have",
            relatedCat: "spa",
        },
        {
            currentPageIndex: 2,
            coverImage: "/blogtwo.png",
            author: "zendora",
            date: "December 21, 2022",
            title: "Well-ageing: Why is the skin matrisome important?",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
            relatedCat: "spa",
        }
    ];

    // Find the data of the current page
    const currentPageData = dummyData.find(item => item.currentPageIndex === blogId);
    const handleTagClick = (category) => {
        router.push(`/Blogs/${category}`);
      };
    return (
        <>
            <NavBar />
            <div className={styles.blogContainer}>
                <div className={styles.postcontainer}>
                    <div className={styles.imageContainer}>
                        <Image src={currentPageData.coverImage} alt='salonImage' fill />
                    </div>
                    <h1>{currentPageData?.title}</h1>

                    <p className={styles.myDate}>Date: {currentPageData?.date}</p>
                    <p className={styles.mydesc}>{currentPageData?.description}</p>
                </div>
                <div className={styles.relatedTagContainer}>{dummyData.map(item => (
                    <div className={styles.imageContent} key={item.currentPageIndex} onClick={() => handleTagClick(item.currentPageIndex)}>
                        <div className={styles.relatedImageContainer}>
                        <Image src={item.coverImage} alt='salonImage' fill/>
                        </div>
                        <div className={styles.relateUpper}>
                          <h3>{item.title}</h3>
                        </div>
                        <div className={styles.relateBottom}>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                        </div>
                    </div>
                ))}</div>
            </div>
            <Footer />
        </>
    );
};

export default SingleBlog;
