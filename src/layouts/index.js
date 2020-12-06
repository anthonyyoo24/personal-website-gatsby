import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Header location={location} />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
