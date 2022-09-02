import React, { useContext } from "react";
import styled from "styled-components";
import HashtagsContext from "../contexts/HashtagsContext";

const StyledCounter = styled.p`
  margin: 10px auto 0 0;
`;

const Counter = () => {
  const [wordList, setWordList] = useContext(HashtagsContext);

  return (
    <StyledCounter>
      #: {wordList.filter((w) => w.selected).length}
    </StyledCounter>
  );
};

export default Counter;
