import styled from "styled-components";
const AboutWrapper = styled.div`
  .app__detaills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 11.875rem 7.6rem;
    gap: 4rem;
    text-align: center;
    align-items: center;
    width: min(100%, 1560px);
    margin-inline: auto;
  }
  .app__detaills > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 30px;
    width: 100%;
  }
  .app__detaills > div > p {
    margin-top: 1.25rem;
    width: 100%;
  }
  .detaills__image {
    position: relative;
    display: inline-block;
    z-index: 1;
    transition: all 0.4s ease;
    margin-bottom: 1.875rem;
  }
  .detaills__image > img:first-child() {
    max-width: 125px;
    position: relative;
  }
  .detaills__image > img:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
  }
  .detaills__image img {
    object-fit: cover;
    width: 100%;
  }
  .app__detaills h3 {
    font-size: 24px;
    line-height: 31.2px;
  }

  /* ****styling the content Section Verions Mobile .**** */

  @media (max-width: 1920px) {
    .app__detaills {
      padding: 11.875rem 16.1rem;
      gap: 3.6rem;
      width: 100%;
    }
  }

  @media (max-width: 1680px) {
    .app__detaills {
      padding: 11.875rem 11rem;
      gap: 4rem;
    }
    .detaills__image > img:nth-child(1) {
      width: 90px;
    }
    .detaills__image > img:nth-child(2) {
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 1478.4px) {
    .app__detaills {
      padding: 11.875rem 9.6rem;
    }
  }

  @media (max-width: 1232px) {
    .app__detaills {
      padding: 11.875rem 2.5rem;
    }
  }
  @media (max-width: 1040px) {
    .app__detaills {
      display: grid;
      grid-template-columns: none;
      grid-template-row: repeat(3, 1fr);
      padding: 6rem 20px;
      gap: 5.3rem;
      text-align: center;
      align-items: center;
      width: min(100%, 1560px);
      margin-inline: auto;
    }
  }

  /* **** Styling the about section Version desktop **** */
  .app__about {
    position: relative;
    width: 100%;
  }
  .about {
    padding: 0rem 7.6rem 5rem;
    display: flex;
    align-items: center;
    column-gap: 3rem;
    width: min(100%, 1560px);
    margin-inline: auto;
  }

  .image__about__left,
  .images__about__right {
    position: absolute;
  }
  .image__about__left {
    left: 120px;
    top: -100px;
  }
  .images__about__right {
    bottom: 10px;
    right: 0;
  }
  .about__left {
    width: 50%;
    position: relative;
  }

  .about__left > img:nth-child(1) {
    max-height: 800px;
  }
  .about__years {
    position: absolute;
    background-color: var(--background-service);
    left: -50px;
    top: 100px;
    padding: 34px 40px 31px 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .years,
  .totale__project {
    font-size: 60px;
    line-height: 78px;
    font-weight: 500;
    font-family: Jost;
  }
  .years {
    color: var(--color-email);
  }
  .totale__project {
    color: var(--secondary--yellow);
  }
  .project {
    font-size: 21px;
    line-height: 27px;
    color: var(--white-title);
    font-weight: 500;
    font-family: Jost;
  }
  .about__project {
    position: absolute;
    background-color: var(--background-service);
    right: 0;
    bottom: 55px;
    padding: 14px 30px 11px 26px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .right__detaills {
    margin: 1.5rem 0 3rem;
    line-height: 30px;
    text-align: start;
  }
  .about__right {
    width: 50%;
    padding-left: 60px;
  }

  /* **** Stying the about section version mobile ***** */
  @media (max-width: 1600px) {
    .about__years {
      padding: 25px 30px 21px 26px;
    }
    .years,
    .totale__project {
      font-size: 50px;
      line-height: 65px;
    }

    .project {
      font-size: 18px;
      line-height: 23px;
    }
    .about__project {
      padding: 14px 26px 11px 26px;
    }
  }
  @media (max-width: 1478.4px) {
    .about {
      padding: 0rem 9.6rem;
    }
  }

  @media (max-width: 1232px) {
    .about {
      padding: 0rem 2.5rem;
    }
  }
  @media (max-width: 1056) {
    .about {
      padding: 0rem 10px;
    }
  }
  @media (max-width: 1040px) {
    .about {
      padding: 2rem 20px;
      row-gap: 4rem;
      flex-direction: column;
      text-align: center;
    }
    .about__right,
    .about__left {
      width: 100%;
    }
    .about__right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .about__images {
      display: none;
    }

    .right__detaills {
      text-align: center;
    }
    .about__right {
      padding-left: 0;
    }
    .about__project,
    .about__years {
      display: none;
    }

    .about__left > img:nth-child(1) {
      max-width: 300px;
      max-height: 300px;
    }
  }

  /* **** Styling the porfolio Version desktop **** */
  .app__portfolio {
    display: flex;
    padding: 11.5625rem 0rem 5rem;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .background__left {
    position: absolute;
    top: 150px;
    left: 50px;
  }
  .background__bottom {
    position: absolute;
    bottom: 60px;
    right: 10px;
    z-index: -1;
  }
  .portfolio__header {
    padding: 0 7.6rem;
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .portfolio__images {
    padding: 0 7.6rem;
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio__header p {
    width: 70%;
  }

  .portfolio__images > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header > ul {
    display: flex;
    align-items: center;
    gap: 3.125rem;
    padding: 4.875rem 0 3.5rem;
  }
  .header > ul > li:nth-child(1) {
    color: var(--button-primary);
  }
  .header > ul > li {
    cursor: pointer;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin: auto;
    padding-bottom: 3.5rem;
  }
  .images div {
    transform: scale(1) translateZ(0);
  }
  .images > div > img {
    width: 100%;
    object-fit: cover;

    border-radius: 12px;
  }

  /* ***** Syling the portfolio version mobile ***** */

  @media (max-width: 1478.4px) {
    .app__portfolio {
      padding: 14rem 9.6rem 5rem;
    }
    .portfolio__header {
      padding: 0;
    }
    .portfolio__images {
      padding: 0;
    }
  }

  @media (max-width: 1232px) {
    .app__portfolio {
      padding: 5rem 2.5rem;
    }
    .portfolio__header {
      padding: 0;
    }
    .portfolio__images {
      padding: 0;
    }
  }
  @media (max-width: 1040px) {
    .app__portfolio {
      display: flex;
      padding: 8rem 20px;
      width: 100%;
    }
    .portfolio__header {
      padding: 0;
    }
    .portfolio__images {
      padding: 0 20px;
      width: 100%;
    }
    .portfolio__header p {
      width: 100%;
    }
    .header > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .images {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .background__left {
      position: absolute;
      top: -20px;
      left: 30px;
    }
    .background__bottom {
      position: absolute;
      bottom: -10px;
      right: -200px;
      z-index: -1;
    }
  }

  @media screen and (max-width: 769px) {
    .images {
      display: flex;
      flex-direction: column;
    }
  }

  /* *** Stlying the skills For verions Desktop **** */
  .app__skills {
    display: flex;
    padding: 5rem 7.6rem;
    align-items: flex-start;
    width: min(100%, 1560px);
    margin-inline: auto;
    justify-content: space-between;
  }
  .skills__left h3 {
    width: 90%;
  }
  .skills__left p {
    line-height: 30px;
  }
  .skills__left,
  .skills__right {
    flex-basis: 50%;
  }
  .skills__left {
    margin-top: 7rem;
    padding-right: 50px;
  }
  .skills__right {
    padding-left: 100px;
  }
  .skills__right > img {
    max-height: 800px;
  }

  .skills_img {
    padding-top: 3.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
  }
  .skills_img > div {
    display: flex;
    background-color: var(--background-footer);
    border-radius: 50%;
    height: 90px;
    width: 90px;
    align-items: center;
    justify-content: center;
  }
  .skills_img img {
    object-fit: cover;
    height: 50%;
    width: 50%;
  }

  /* Styling the service section for the mobile verions  */

  @media (max-width: 1478.4px) {
    .app__skills {
      padding: 1.3rem 9.6rem;
    }

    .skills_img {
      padding-top: 2.5rem;
      gap: 1rem;
    }
    .skills_img > div {
      height: 70px;
      width: 70px;
    }
  }

  @media (max-width: 1232px) {
    .app__skills {
      padding: 5rem 2.5rem;
    }
  }
  @media (max-width: 1040px) {
    .app__skills {
      display: flex;
      padding: 5rem 20px;
      align-items: center;
      flex-direction: column-reverse;
      justify-content: center;
    }
    .skills__left,
    .skills__right {
      flex-basis: auto;
    }
    .skills__left {
      margin-top: 7rem;
      padding: 0;
      align-items: center;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    .skills_img {
      width: 100%;
      justify-content: center;
    }
    .skills__right img {
      max-height: 600px;
    }
    .skills__right {
      padding-left: 0px;
    }
  }
`;
export default AboutWrapper;
