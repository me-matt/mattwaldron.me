import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const View = styled.section`
  margin: 2rem;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;

  @media print {
    display: none;
  }
`;

export const Copyright = () => {
  const { site: { siteMetadata: { title } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <View>
      © {title} {new Date().getFullYear()}
    </View>
  )
};
