import './style.scss';
import React from 'react';
import { Link } from 'gatsby';
import butterCMS from '../../images/butter-w.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer__navigation'>
        <ul>
          <li>
            <Link to='/' className='footer__navigation-link'>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/story' className='footer__navigation-link'>
              MY STORY
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className='footer__navigation-link'>
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to='/blog/page/1' className='footer__navigation-link'>
              BLOG
            </Link>
          </li>
          <li>
            <Link to='/contact' className='footer__navigation-link'>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className='footer__connect'>
        {/* <a
          href="https://www.linkedin.com/in/anthony-youngshin-yoo/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="footer__connect-link linkedin icon"></i>
        </a> */}
        <a href='https://github.com/anthonyyoo24' rel='noopener noreferrer' target='_blank'>
          <i className='footer__connect-link github icon'></i>
        </a>
      </div>
      <a
        className='footer__attribution'
        href='https://buttercms.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        <img src={butterCMS} alt='ButterCMS Logo' />
      </a>
      {/* <p className="footer__copyright">&copy; 2020 Anthony Youngshin Yoo</p> */}
    </footer>
  );
};

export default Footer;
