import facebookIcon from '../../assets/social/facebook-white.svg';
import twitterIcon from '../../assets/social/twitter-white.svg';
import instagramIcon from '../../assets/social/instagram-white.svg';

import appStoreIcon from '../../assets/store/app-store.svg';
import playStoreIcon from '../../assets/store/play-store.svg';
import windowsStoreIcon from '../../assets/store/windows-store.svg';

import './index.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="navigation">
          <a href="/">Home</a> &nbsp;| &nbsp;
          <a href="/">Terms and Conditions</a> &nbsp;| &nbsp;
          <a href="/">Privacy Policy</a> &nbsp;| &nbsp;
          <a href="/">Collection Statement</a>&nbsp; | &nbsp;
          <a href="/">Help</a> &nbsp;| &nbsp;
          <a href="/">Manage Account</a>
        </div>
        <div className="copyright-text">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </div>

        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="social-media-links d-flex align-items-center">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-md-end ">
            <div className="store-links d-flex align-items-center">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img src={appStoreIcon} alt="Facebook" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img src={playStoreIcon} alt="Twitter" />
              </a>
              <a href="https://www.microsoft.com/en-us/store/apps/windows" target="_blank" rel="noreferrer">
                <img src={windowsStoreIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;