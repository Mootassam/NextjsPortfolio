import React from "react";
import AboutWrapper from "./AboutWrapper";

function About(props) {
  const styles = props.styles;
  return (
    <AboutWrapper>
      <div className='app__detaills'>
        <div className='detaill_target'>
          <div className='detaills__image'>
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
        <div className='detaill__energy'>
          <div className='detaills__image'>
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
      <div className='app__about' id='about'>
        <div className='about'>
          <div className='about__left'>
            <img loading='lazy' src='./images/about.jpg' alt='About photo' />
            <div className='about__years'>
              <span className='years'> 18</span>
              <span className='project'>
                years of <br />
                success
              </span>
            </div>
            <div className='about__project'>
              <span className='totale__project'> 52</span>
              <span className='project'>
                Total <br />
                Projects
              </span>
            </div>
          </div>
          <div className='about__right'>
            <span className='span__header'> I&apos;m a Designer</span>
            <h3 className='h3__about'>I Can Design Anything You Want</h3>
            <div className='right__detaills'>
              <p className='p__header'>
                Hello there! I&apos;m a web designer, and I&apos;m very
                passionate and dedicated to my work. With 20 years experience as
                a professional web developer, I have acquired the skills and
                knowledge necessary to make your project a success. I enjoy
                every step of the design process, from discussion and
                collaboration.
              </p>
            </div>
            <div className='button'>Hire me</div>
          </div>

          <div className='about__images'>
            <div className='image__about__left'>
              <img loading='lazy' src='./images/about1.png' alt='About Image' />
            </div>
            <div className='images__about__right'>
              <img loading='lazy' src='./images/about2.png' alt='About Image' />
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
