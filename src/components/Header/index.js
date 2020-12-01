import "./style.scss"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { changeHeaderStyle } from "../../redux/actions"

const Header = ({ location }) => {
  const headerStyle = useSelector(state => state.headerStyle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(changeHeaderStyle("home"))
    } else {
      dispatch(changeHeaderStyle())
    }
  }, [location.pathname, dispatch])

  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="http://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css"
        />
      </Helmet>
      <header className={`header ${headerStyle}`}>
        <span>
          <Link
            className="header__logo"
            to="/"
            onClick={() => dispatch(changeHeaderStyle("home"))}
          >
            ANTHONY YOO
          </Link>
        </span>
        <nav className="header__navigation">
          <ul>
            <li>
              <Link
                to="/"
                className="header__navigation-link"
                onClick={() => dispatch(changeHeaderStyle("home"))}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/story"
                className="header__navigation-link"
                onClick={() => dispatch(changeHeaderStyle())}
              >
                MY STORY
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="header__navigation-link"
                onClick={() => dispatch(changeHeaderStyle())}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="/blog/page/1"
                className="header__navigation-link"
                onClick={() => dispatch(changeHeaderStyle())}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="header__navigation-link"
                onClick={() => dispatch(changeHeaderStyle())}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="popup">
          <input
            type="checkbox"
            className="popup__checkbox"
            id="popup-toggle"
          />

          <label htmlFor="popup-toggle" className="popup__button">
            <span className="popup__icon">&nbsp;</span>
          </label>

          <nav className="popup__navigation">
            <ul>
              <li>
                <Link
                  to="/"
                  className="popup__navigation-link"
                  onClick={() => dispatch(changeHeaderStyle("home"))}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/story"
                  className="popup__navigation-link"
                  onClick={() => dispatch(changeHeaderStyle())}
                >
                  MY STORY
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="popup__navigation-link"
                  onClick={() => dispatch(changeHeaderStyle())}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/page/1"
                  className="popup__navigation-link"
                  onClick={() => dispatch(changeHeaderStyle())}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="popup__navigation-link"
                  onClick={() => dispatch(changeHeaderStyle())}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
