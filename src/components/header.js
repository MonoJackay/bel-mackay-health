import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    
  <header
    style={{
      marginBottom: `1.45rem`,
      background: `#fafafa`
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 1140,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0 }}>
            <Link
            to="/"
              style={{
                textDecoration: `none`,
                fontSize: `20px`,
                fontWeight: 700,
                color: `black`
                }}
            >
              {siteTitle}
            </Link>
          <Link style={{ color: `black`, marginRight: `1rem`, marginLeft: `1rem`,  textDecoration: `none`, fontWeight: 500 }} to="/about">About</Link>
          <Link style={{ color: `black`, marginRight: `1rem`, textDecoration: `none`, fontWeight: 500 }} to="/services">Services</Link>
          <Link style={{ color: `black`, marginRight: `1rem`, textDecoration: `none`, fontWeight: 500 }} to="/classes">Classes</Link>
          <Link style={{ color: `black`, marginRight: `1rem`, textDecoration: `none`, fontWeight: 500 }} to="/contact">Contact</Link>
      </div>
        
      </nav>
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
