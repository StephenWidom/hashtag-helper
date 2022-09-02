import React from "react";
import styled from "styled-components";

import Hashtag from "./Hashtag";
import { Container } from "./Layout";

const StyledHashtags = styled.div`
  border: 1px solid #efefef;
  padding: 20px 10px;
  margin: 10px auto 70px;

  ul {
    list-style: none;
    width: 100%;
    gap: 5px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
  }
`;

const Hashtags = ({ words }) => {
  return (
    <Container>
      <StyledHashtags>
        {words.length ? (
          <ul>
            {words.map((w) => (
              <Hashtag word={w} key={w.term} />
            ))}
          </ul>
        ) : (
          <>No hashtags! Add one to get started.</>
        )}
      </StyledHashtags>
    </Container>
  );
};

export default Hashtags;
