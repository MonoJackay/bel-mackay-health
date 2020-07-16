import React from "react"

import { Button } from "@gympass/yoga"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ListItem = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ color: `black`, textDecoration: `none`, fontSize: `16px`, fontWeight: `500` }} to={props.to}>{props.children}</Link>
  </li>
)


const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: `28px`,
            color: `black`,
            textDecoration: `none`,
            fontWeight: `bold`
          }}
        >
          {siteTitle}
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListItem to="/about">About</ListItem>
          <ListItem to="/services">Services</ListItem>
          <ListItem to="/classes">Classes</ListItem>
          <ListItem to="/contact">Contact</ListItem>
          <Button>Book Now!</Button>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
