import React from "react";
import Image from "next/image";
import { Logo } from "../../images";
function Header(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__header} id='home'>
      <header>
        <div className={styles.header__menue}>
          <div className={styles.content}>
            <div className={styles.header__logo}>
              <Image loading='lazy' src={Logo} alt='Logo Image' />
            </div>
            <div className={styles.header__links} id='links'>
              <ul id={styles.links__ul}>
                <li>
                  <a href='#home' className={styles.menue__current} watch=''>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#about ' className={styles.menue}>
                    About
                  </a>
                </li>
                <li>
                  <a href='#portfolio' className={styles.menue}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href='#skills' className={styles.menue}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href='#service' className={styles.menue}>
                    Service
                  </a>
                </li>
                <li>
                  <a href='#contact' className={styles.menue}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='./documents/Resume.pdf' download=''>
                    Download CV
                  </a>
                </li>
              </ul>
              <div className={styles.close}>
                <i className='fa-solid fa-circle-xmark' onClick='hideMenue()' />
              </div>
            </div>
          </div>
          <div className='mobile__nav'>
            <i
              className='fa-solid fa-bars'
              onClick='showMenue()'
              id='#hamburger'
            />
          </div>
        </div>
      </header>
      <div className={styles.header__content}>
        <div className={styles.detaills__container}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.content__left}>
                <h3 className={styles.h3__sm}>Hello, I&apos;m</h3>
                <h3 className={styles.h3__lg}>James Smith</h3>
                <p className={styles.p__content}>
                  A{" "}
                  <span className={styles.span__content}>
                    {" "}
                    Creative Designer
                  </span>
                  From
                  <span className={styles.span__place}> New York</span>
                </p>
                <div className={styles.text}>
                  I&apos;m creative designer based in New York, and I&apos;m
                  very passionate and dedicated to my work.
                </div>
                <div className={styles.left__buttons}>
                  <div className={styles.button}>About Me</div>
                  <div className={styles.social__media} />
                </div>
              </div>
              <div className={styles.content__right}>
                <img
                  loading='lazy'
                  src='./images/avatar.png'
                  alt='photo avatar'
                />
                <div className='reactjs'>
                  <img
                    loading='lazy'
                    src='./images/reactjs.png'
                    alt='photo reactjs'
                  />
                </div>
                <div className='redux'>
                  <img
                    loading='lazy'
                    src='./images/redux.png'
                    alt='photo redux'
                  />
                </div>
                <div className='scss'>
                  <img
                    loading='lazy'
                    src='./images/figma.svg'
                    alt='photo redux'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
