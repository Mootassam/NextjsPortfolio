import styled from "styled-components";

const AppWrapper = styled.div`
  .audio {
    bottom: 30px;
    right: 0;
    position: fixed;
    padding: 0 30px;
    z-index: 2000;
  }
  .audio i {
    cursor: pointer;
    opacity: 70%;
    font-size: 33px;
    color: var(--white-title);
  }

  .button {
    position: relative;
    font-family: "Jost", sans-serif;
    padding: 0.8rem 2.4rem;
    width: max-content;
    color: var(--white-title);
    font-weight: 500;
    cursor: pointer;
    border-radius: 50px;
    overflow: hidden;
    outline: 2px solid var(--button-primary);
    outline-offset: -2px;
    z-index: 1;
  }
  .button:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--button-primary);
    top: 0;
    left: 0;
    z-index: -1;
    transform: scaleY(1);
    transition: transform 200ms ease-in;
    transform-origin: bottom;
  }
  .button:hover:after {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  /* **** Styling the mobile Version **** */
  .button {
    padding: 18px 50px;
    font-size: 18px;
  }
  .span__header {
    margin-bottom: 6px;
    color: var(--button-primary);
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    font-family: jost, sans-serif;
  }

  .h3__header {
    margin: 0px 0px 16px;
    font-size: 48px;
    line-height: 60px;
  }
  .p__header {
    font-size: 18px;
    line-height: 30px;
  }
  .h3__about {
    margin-top: 6px;
    font-size: 48px;
    line-height: 60px;
  }

  @media (max-width: 1600px) {
    .button {
      padding: 9px 35px;
      font-size: 16px;
    }
  }
  @media (max-width: 1232px) {
    .span__header {
      margin-bottom: 6px;
      color: var(--button-primary);
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      font-family: jost, sans-serif;
    }
    .h3__about {
      margin-top: 6px;
      font-size: 40px;
      line-height: 50px;
    }
    .h3__header {
      margin: 0px 0px 16px;
      font-size: 38px;
      line-height: 48px;
    }
    .p__header {
      font-size: 16px;
      line-height: 30px;
    }
  }
  @media (max-width: 1040px) {
    .span__header {
      margin-bottom: 6px;
      color: var(--button-primary);
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      font-family: jost, sans-serif;
    }
    .h3__header {
      margin: 0px 0px 16px;
      font-size: 35px;
      line-height: 44px;
    }
    .p__header {
      font-size: 16px;
      line-height: 30px;
    }

    .h3__about {
      font-size: 35px;
      line-height: 44px;
      max-width: 100%;
      text-align: center;
    }
  }
  .app {
    overflow: hidden;
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
  }
  .app__content {
    background-color: var(--background-color);
  }
`;
export default AppWrapper;
