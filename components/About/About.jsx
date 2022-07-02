import React from "react";

function About(props) {
  const styles = props.styles;
  return (
    <React.Fragment>
      <div className={styles.app__detaills}>
        <div className={styles.detaill_target}>
          <div className={styles.detaills__image}>
            <img loading='lazy' src='./images/process1.png' alt='' />
            <img loading='lazy' src='./images/target.svg' alt='Image Target' />
          </div>
          <h3>Pixel Perfect</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design.
          </p>
        </div>
        <div className='detaill__brush'>
          <div className='detaills__image'>
            <img loading='lazy' src='./images/process2.png' alt='' />
            <img loading='lazy' src='./images/brush.svg' alt='Image Brush' />
          </div>
          <h3>High Quality</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design.
          </p>
        </div>
        <div className={styles.detaill__energy}>
          <div className={styles.detaills__image}>
            <img loading='lazy' src='./images/process3.png' alt='' />
            <img loading='lazy' src='./images/energy.svg' alt='Image Energy' />
          </div>
          <h3>Awesome Idea</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design.
          </p>
        </div>
      </div>
      <div className={styles.app__about} id='about'>
        <div className={styles.about}>
          <div className={styles.about__left}>
            <img loading='lazy' src='./images/about.jpg' alt='About photo' />
            <div className={styles.about__years}>
              <span className={styles.years}> 18</span>
              <span className={styles.project}>
                years of <br />
                success
              </span>
            </div>
            <div className={styles.about__project}>
              <span className={styles.totale__project}> 52</span>
              <span className={styles.project}>
                Total <br />
                Projects
              </span>
            </div>
          </div>
          <div className={styles.about__right}>
            <span className={styles.span__header}> I&apos;m a Designer</span>
            <h3 className={styles.h3__about}>I Can Design Anything You Want</h3>
            <div className={styles.right__detaills}>
              <p className={styles.p__header}>
                Hello there! I&apos;m a web designer, and I&apos;m very
                passionate and dedicated to my work. With 20 years experience as
                a professional web developer, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the design process, from discussion and
                collaboration.
              </p>
            </div>
            <div className={styles.button}>Hire me</div>
          </div>

          <div className={styles.about__images}>
            <div className={styles.image__about__left}>
              <img loading='lazy' src='./images/about1.png' alt='About Image' />
            </div>
            <div className={styles.images__about__right}>
              <img loading='lazy' src='./images/about2.png' alt='About Image' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
