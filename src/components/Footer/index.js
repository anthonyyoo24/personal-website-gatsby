import "./style.scss"
import React from "react"
import { Link } from "gatsby"
import butterCMS from "../../images/butter-w.png"
import { changeHeaderStyle } from "../../redux/actions"
import { useDispatch } from "react-redux"

const Footer = () => {
  const dispatch = useDispatch()

  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <ul>
          <li>
            <Link
              to="/"
              className="footer__navigation-link"
              onClick={() => dispatch(changeHeaderStyle("home"))}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/story"
              className="footer__navigation-link"
              onClick={() => dispatch(changeHeaderStyle())}
            >
              MY STORY
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="footer__navigation-link"
              onClick={() => dispatch(changeHeaderStyle())}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              to="/blog/page/1"
              className="footer__navigation-link"
              onClick={() => dispatch(changeHeaderStyle())}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="footer__navigation-link"
              onClick={() => dispatch(changeHeaderStyle())}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer__connect">
        <a
          href="https://github.com/anthonyyoo24"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="footer__connect-link github icon"></i>
        </a>
        <a
          href="https://www.facebook.com/anthony.yoo.3/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="footer__connect-link facebook icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/youngshin-anthony-yoo-8172961b4"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="footer__connect-link linkedin icon"></i>
        </a>
      </div>
      <a
        className="footer__attribution"
        href="https://buttercms.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={butterCMS} alt="ButterCMS Logo" />
      </a>
      <p className="footer__copyright">&copy; 2020 Anthony Youngshin Yoo</p>
    </footer>
  )
}

export default Footer
