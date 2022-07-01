import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Portrait = styled(Image)`
  min-width: 50;
  border-radius: 100%;
`;

const Article = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  p {
    margin: 1rem auto 0 auto;
  }

  @media screen {
    color: #eaeaea;
    background: #1e2022 no-repeat 50%;
    padding: 2rem;

    a {
      color: #eaeaea;
    }

    h1 {
      margin: 1rem auto 0 auto;
      font-size: 2rem;
    }
  }
`;

const ContactMe = styled.section`
  display: flex;
  justify-content: center;
  margin: 1rem auto 0 auto;

  a {
    margin: 0 0.25rem;
    width: 25px !important;
    height: 25px !important;
  }

  @media print
  {
    display: none;
  }
`;

const Bio = () => {
  const { site: { siteMetadata: { author, social, title } }, avatar: { childImageSharp: { fixed } } } = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `);

  return (
    <Article>
      <Portrait
        fixed={fixed}
        alt={author.name}
      />
      <h1>
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
      <p>{author.summary}</p>
      <ContactMe>
        <SocialIcon fgColor="#eaeaea" url={`https://linkedin.com/in/${social.linkedin}`} />
        <SocialIcon fgColor="#eaeaea" url={`https://github.com/${social.github}`} />
        <SocialIcon fgColor="#eaeaea" url={`https://mattwaldron.me/rss.xml`} network="rss" />
        <SocialIcon fgColor="#eaeaea" url={`mailto:matt@mattwaldron.me`} />
      </ContactMe>
    </Article>
  )
}

export default Bio
