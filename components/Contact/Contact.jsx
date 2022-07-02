import React from "react";

function Contact(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__contact} id='contact'>
      <div className={styles.contact__header}>
        <span className={styles.span__header}> Contact Me</span>
        <h3 className={styles.h3__header}>I Want To Hear From You</h3>
        <p className={styles.p__header}>
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>
      </div>
      <div className={styles.contact__address}>
        <div className={styles.contact__left}>
          <div className={styles.left__address}>
            <div className={styles.address__icon}>
              <i className='fa-solid fa-location-dot'></i>
            </div>
            <div className={styles.address__detaill}>
              <h3>Address</h3>
              <span> 20, Somewhere in world </span>
            </div>
          </div>
          <div className={styles.left__email}>
            <div className={styles.email__icon}>
              <i className='fa-solid fastyles.envelope'></i>
            </div>
            <div className={styles.email__detaills}>
              <h3>Email</h3>
              <span> hello@dizme.com</span>
            </div>
          </div>
          <div className={styles.left__phone}>
            <div className={styles.phone__icon}>
              <i className='fa-solid fa-phone'></i>
            </div>
            <div className={styles.phone__detaills}>
              <h3>Phone</h3>
              <span> +123 456 7890</span>
            </div>
          </div>
        </div>

        <div className={styles.contact__right}>
          <div>
            <input type='text' placeholder='Your Name' />
            <input type='text' placeholder='Your Email' />
          </div>
          <div>
            <input type='text' placeholder='Your Phone ' />
            <input placeholder='Subject' type='text' />
          </div>
          <div>
            <textarea placeholder='Write Your message here'></textarea>
          </div>
          <div className={styles.button}>Submit Now</div>
        </div>

        <div className={styles.address__images}>
          <div className={styles.images__left}>
            <img
              loading='lazy'
              src='./images/contact1.png'
              alt='Image contact'
            />
          </div>
          <div className='images__right'>
            <img
              loading='lazy'
              src='./images/contact2.png'
              alt='Image contact'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
