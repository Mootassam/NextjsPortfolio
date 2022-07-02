import React from "react";

function Portfolio(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__portfolio} id='portfolio'>
      <div className={styles.portfolio__header}>
        <span className={styles.span__header}> Portfolio</span>
        <h3 className={styles.h3__header}>My Amazing Works</h3>
        <p className={styles.p__header}>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>
      <div className={styles.portfolio__images}>
        <div className={styles.header}>
          <ul>
            <li>All</li>
            <li>Youtube</li>
            <li>Vimeo</li>
            <li>Soundcloud</li>
            <li>Popup</li>
            <li>Detail</li>
          </ul>
        </div>
        <div className={styles.images}>
          <div>
            <img
              loading='lazy'
              src='./images/portfolio6.jpg'
              alt='image of potfolio'
            />
          </div>

          <div className='item2'>
            <img
              loading='lazy'
              src='./images/portfolio6.jpg'
              alt='image of potfolio'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/portfolio6.jpg'
              alt='image of potfolio'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/portfolio6.jpg'
              alt='image of potfolio'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/portfolio6.jpg'
              alt='image of potfolio'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/portfolio6.jpg'
              alt='image of potfolio'
            />
          </div>
        </div>

        <div className={styles.button}>load More</div>
      </div>

      <div className={styles.background__left}>
        <img
          loading='lazy'
          src='./images/portfolio1.png'
          alt='photo background image'
        />
      </div>
      <div className='background__bottom'>
        <img
          loading='lazy'
          src='./images/portfolio2.png'
          alt='photo background image'
        />
      </div>
    </div>
  );
}

export default Portfolio;
