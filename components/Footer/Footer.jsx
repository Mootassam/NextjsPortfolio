import React from "react";

function Footer(props) {
  const styles = props.styles;
  return (
    <div className={styles.app__footer}>
      <div className={styles.footer__content}>
        <div>Developed with love by Marketify © 2022</div>
        <div>
          <ul>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
