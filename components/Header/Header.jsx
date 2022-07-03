import React from "react";
import Image from "next/image";
import { Logo } from "../../images";
import HeaderWrapper from "./HeaderWrapper";

function Header(props) {
  const styles = props.styles;
  return (
    <HeaderWrapper>
      <div className='app__header' id='home'>
        <header>
          <div className='header__menue'>
            <div className='content'>
              <div className='header__logo'>
                <Image loading='lazy' src={Logo} alt='Logo Image' />
              </div>
              <div className='header__links' id='links'>
                <ul id='links__ul'>
                  <li>
                    <a href='#home' className='menue__current' watch=''>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#about ' className='menue'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='#portfolio' className='menue'>
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href='#skills' className='menue'>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href='#service' className='menue'>
                      Service
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='menue'>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href='./documents/Resume.pdf' download=''>
                      Download CV
                    </a>
                  </li>
                </ul>
                <div className='close'>
                  <i
                    className='fa-solid fa-circle-xmark'
                    onClick='hideMenue()'
                  />
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
        <div className='header__content'>
          <div className='detaills__container'>
            <div className='container'>
              <div className='content'>
                <div className='content__left'>
                  <h3 className='h3__sm'>Hello, I&apos;m</h3>
                  <h3 className='h3__lg'>James Smith</h3>
                  <p className='p__content'>
                    A <span className='span__content'> Creative Designer</span>
                    From
                    <span className='span__place'> New York</span>
                  </p>
                  <div className='text'>
                    I&apos;m creative designer based in New York, and I&apos;m
                    very passionate and dedicated to my work.
                  </div>
                  <div className='left__buttons'>
                    <div className='button'>About Me</div>
                    <div className='social__media' />
                  </div>
                </div>
                <div className='content__right'>
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
    </HeaderWrapper>
  );
}

export default Header;
