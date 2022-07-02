import React from "react";

function Skills(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__skills} id='skills'>
      <div className={styles.skills__left}>
        <span className={styles.span__header}> Design is Life </span>

        <h3 className='h3__header'>
          I Develop Skills Regularly to Keep Me Update
        </h3>
        <p>
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>

        <div className={styles.skills_img}>
          <div>
            <img loading='lazy' src='./images/html.png' alt='photo of skills' />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/reactjs.png'
              alt='photo of skills'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/nodejs.png'
              alt='photo of skills'
            />
          </div>
          <div>
            <img loading='lazy' src='./images/api.png' alt='photo of skills' />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/javascript.png'
              alt='photo of skills'
            />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/typescript.png'
              alt='photo of skills'
            />
          </div>
          <div>
            <img loading='lazy' src='./images/scss.png' alt='photo of skills' />
          </div>
          <div>
            <img
              loading='lazy'
              src='./images/mongodb.png'
              alt='photo of skills'
            />
          </div>
          <div>
            <img loading='lazy' src='./images/css.png' alt='photo of skills' />
          </div>

          <div>
            <img
              loading='lazy'
              src='./images/redux.png'
              alt='photo of skills'
            />
          </div>
        </div>
      </div>
      <div className={styles.skills__right}>
        <img loading='lazy' src='./images/skills.jpg' alt='skills photo' />
      </div>
    </div>
  );
}

export default Skills;
