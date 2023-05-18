import Image from 'next/image';
import styles from '../styles/Gallery.module.css'
import { CameraIcon, PhotoIcon } from '@heroicons/react/24/outline';
const ImageGallery = () => {
    const images = [
        '/Gone.png',
        '/Gtwo.png',
        '/Gthree.png',
        '/Gfour.png',
        '/Gfive.png',
        '/Gsix.png',
        '/Gseven.png',
        '/Geight.png',
        '/Gnine.png',
        '/Gten.png',
        '/Geleven.png',
    ];
    const imageContainer = (item) => {
        console.log(item)
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <CameraIcon className={styles.cameraIcon} />
                <h2>Our Work</h2>
                <span>Gallery</span>
            </div>

            <div className={styles.gallery}>
                {images.map((image, index) => (
                    <div onClick={() => imageContainer(index)} className={styles.item} key={index}>
                        <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            fill
                            className={styles.image}
                        />
                        <div className={styles.overlay}>
                            <PhotoIcon className={styles.photoIcon} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
