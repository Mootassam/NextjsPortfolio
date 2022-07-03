import React from "react";
import FooterWrapper from "./FooterWrapper";
function Footer(props) {
  const styles = props.styles;
  return (
    <FooterWrapper>
      <div className='app__footer'>
        <div className='footer__content'>
          <div>Developed with love by Marketify © 2022</div>
          <div>
            <ul>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
