import React from "react"
import { Link } from "gatsby"

import "./layout.css"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        margin: `${rhythm(1.5)} auto`,
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        paddingTop: 0,
        width: '50%'
      }}
    >
      <div style={{ display: 'flex', marginBottom: `${rhythm(1.5)}` }}>
        <h1 
          style={{
            margin: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <div className="menu">
          <h4>
            <Link style={{ boxShadow: 'none' }} to={'/'}>
                Blog
            </Link>
          </h4>
          <h4>
            <Link style={{ boxShadow: 'none' }} to={'/resume'}>
                Resume
            </Link>
          </h4>
          <h4>
            <Link style={{ boxShadow: 'none' }} to={'/about'}>
                About
            </Link>
          </h4>
          <h4>
            <Link style={{ boxShadow: 'none' }} to={'/contact'}>
                Contact
            </Link>
          </h4>
        </div>
      </div>
      <main>{children}</main>
      <footer>
        © Matt Waldron {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
