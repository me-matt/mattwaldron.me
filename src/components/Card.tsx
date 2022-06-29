import styled from "styled-components";

const Card = styled.article`
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  background-color: white;
  border: 1px solid #e0e6ed;
  margin: 0 5rem 2rem 5rem;
  text-align: center;

  header, section, footer {
    padding-bottom: 2rem;
  }

  header {
    padding-top: 2rem;
  }
`;

export default Card;
