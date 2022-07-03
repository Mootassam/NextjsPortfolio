import React from "react";
import ContactWrapper from "./ContactWrapper";
function Contact(props) {
  const styles = props.styles;
  return (
    <ContactWrapper>
      <div className='app__contact' id='contact'>
        <div className='contact__header'>
          <span className='span__header'> Contact Me</span>
          <h3 className='h3__header'>I Want To Hear From You</h3>
          <p className='p__header'>
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
        <div className='contact__address'>
          <div className='contact__left'>
            <div className='left__address'>
              <div className='address__icon'>
                <i className='fa-solid fa-location-dot'></i>
              </div>
              <div className='address__detaill'>
                <h3>Address</h3>
                <span> 20, Somewhere in world </span>
              </div>
            </div>
            <div className='left__email'>
              <div className='email__icon'>
                <i className='fa-solid fastyles.envelope'></i>
              </div>
              <div className='email__detaills'>
                <h3>Email</h3>
                <span> hello@dizme.com</span>
              </div>
            </div>
            <div className='left__phone'>
              <div className='phone__icon'>
                <i className='fa-solid fa-phone'></i>
              </div>
              <div className='phone__detaills'>
                <h3>Phone</h3>
                <span> +123 456 7890</span>
              </div>
            </div>
          </div>

          <div className='contact__right'>
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
            <div className='button'>Submit Now</div>
          </div>

          <div className='address__images'>
            <div className='images__left'>
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
    </ContactWrapper>
  );
}

export default Contact;
