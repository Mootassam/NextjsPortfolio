import React from "react";
import PortfolioWrapper from "./PortfolioWrapper";
function Portfolio(props) {
  const styles = props.styles;
  return (
    <PortfolioWrapper>
      <div className='app__portfolio' id='portfolio'>
        <div className='portfolio__header'>
          <span className='span__header'> Portfolio</span>
          <h3 className='h3__header'>My Amazing Works</h3>
          <p className='p__header'>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div className='portfolio__images'>
          <div className='header'>
            <ul>
              <li>All</li>
              <li>Youtube</li>
              <li>Vimeo</li>
              <li>Soundcloud</li>
              <li>Popup</li>
              <li>Detail</li>
            </ul>
          </div>
          <div className='images'>
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

          <div className='button'>load More</div>
        </div>

        <div className='background__left'>
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
    </PortfolioWrapper>
  );
}

export default Portfolio;
