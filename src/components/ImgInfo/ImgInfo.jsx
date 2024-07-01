import React from 'react';
import styles from './ImgInfo.module.css'

const ImgInfo = ({ id, imageUrl, text, altText }) => (
  <section className={styles.ImgInfoSection}>
    {id % 2 === 0 ? (
      <>
        <div className={styles.ImgInfoTextContainer}>
          <p>{text}</p>
        </div>
        <div className={styles.ImgInfoImgContainer}>
          <img height="100%" src={imageUrl} alt={altText} />
        </div>
      </>
    ) : (
      <>
        <div className={styles.ImgInfoImgContainer}>
          <img height="100%" src={imageUrl} alt={altText} />
        </div>
        <div className={styles.ImgInfoTextContainer}>
          <p>{text}</p>
        </div>
      </>
    )}
  </section>
);

export default ImgInfo;