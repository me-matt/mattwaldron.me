import React from "react"
import { Link } from "gatsby"
import Bio from "./Bio"
import { Copyright } from "./Copyright"
import styled, { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  body {
    font-family: 'Open sans';
    font-weight: 200;
    color: #252a34;
    background-color: #eaeaea;
    margin: 0;
  }

  a {
    box-shadow: none;
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    font-family: 'Open sans';
    font-weight: 500;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin-bottom: 1rem;
    }
  }
`;

const Menu = styled.nav`
  display: flex;
  padding: 1rem;
  justify-content: center;

  h4 {
    margin: 0;
  }

  h4 a {
    padding: 1rem 2rem;
    color: #1e2022;
    font-weight: 300;
  }

  @media print {
    display: none;
  }
`;

import "./layout.css"

const Header = styled.header`
@media screen {
    box-shadow: 0 1px 5px rgba(0,0,0,0.05);

    p {
      margin: 1rem;
    }
  }
`;

const Layout = ({ location, children }) => {
  return (
    <div className="container">
      <Header>
        <FontStyles />
        <Menu>
          {[
            { link: '/', title: 'Home' },
            { link: '/blog', title: 'Blog' },
            { link: '/resume', title: 'Resume' },
          ].map(({ link, title }) => (
            <h4 key={link}>
              <Link to={link}>
                  {title}
              </Link>
            </h4>
          ))}
        </Menu>
        <Bio />
      </Header>
      <main>{children}</main>
      <Copyright />
    </div>
  )
}

export default Layout
