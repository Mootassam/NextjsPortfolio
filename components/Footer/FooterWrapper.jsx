import styled from "styled-components";
const FooterWrapper = styled.div`
  .app__footer {
    background-color: var(--background-footer);
    padding: 0 7.6rem;
    width: 100%;
  }
  .footer__content {
    width: min(100%, 1560px);
    margin-inline: auto;
    display: flex;
    padding: 3.5625rem 0 3.8125rem;
    justify-content: space-between;
  }
  .footer__content ul {
    display: flex;
    gap: 2.625rem;
  }

  /* Styling the footer for the version mobile */

  @media (max-width: 1040px) {
    .app__footer {
      background-color: var(--background-footer);
      padding: 0 20px;
      width: 100%;
    }

    .footer__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export default FooterWrapper;
