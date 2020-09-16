import React from "react"
import { Link } from "gatsby"

import "./layout.css"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        paddingTop: 0
      }}
    >
      <div class="menu">
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
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
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
      <main>{children}</main>
      <footer>
        © Matt Waldron {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
