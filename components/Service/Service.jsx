import React from "react";

function Service(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__service} id='service'>
      <div className={styles.service__header}>
        <span className={styles.span__header}> Services</span>

        <h3 className={styles.h3__header}>What I Do for Clients</h3>
        <p className={styles.p__header}>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>

      <div className={styles.service_list}>
        <div>
          <div className={styles.list__right}>
            <h3>Creative Design</h3>
            <span>
              {" "}
              Starts from <span className={styles.price}>$99 </span>
            </span>
            <p>
              Web design refers to the design of websites that are displayed on
              the internet. It usually refers to the user experience aspects of
              website development.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.list__right}>
            <h3>Graphic Design</h3>
            <span>
              {" "}
              Starts from <span className={styles.price}> $199 </span>{" "}
            </span>
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development Web Design.
          </div>
        </div>
        <div>
          <div className={styles.list__right}>
            <h3>UI/UX Design</h3>
            <span>
              {" "}
              Starts from <span className={styles.price}>$299</span>
            </span>{" "}
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development.
          </div>
        </div>

        <div>
          <div className={styles.list__right}>
            <h3>Web Design</h3>
            <span>
              Starts from <span className={styles.price}> $399</span>
            </span>{" "}
            Web design refers to the design of websites that are displayed on
            the internet. It usually refers to the user experience aspects of
            website development.
          </div>
        </div>
      </div>

      <div className={styles.service__image__left}>
        <img loading='lazy' src='./images/service5.png' alt='photo Service' />
      </div>
      <div className={styles.service__image__right}>
        <img loading='lazy' src='./images/service6.png' alt='photo Service' />
      </div>
    </div>
  );
}

export default Service;
