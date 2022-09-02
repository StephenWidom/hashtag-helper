import React, { useContext } from "react";
import produce from "immer";
import styled from "styled-components";
import HashtagsContext from "../contexts/HashtagsContext";
import { CloseOutlined } from "@ant-design/icons";
import { message } from "antd";

const StyledHashtag = styled.li`
  cursor: pointer;
  display: inline-block;
  border: 1px solid #efefef;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;

  svg {
    margin-left: 10px;
  }

  ${(props) =>
    props.selected &&
    `
    background: coral;
    color: #fff;
  `}
`;

const Hashtag = ({ word }) => {
  const [wordList, setWordList] = useContext(HashtagsContext);

  const updateWord = (term) => {
    setWordList(
      produce(wordList, (draft) => {
        const termIndex = wordList.findIndex((w) => w.term === term);
        draft[termIndex].selected = !wordList[termIndex].selected;
      })
    );
  };

  const deleteWord = (word) => {
    setWordList(wordList.filter((w) => w.term !== word));
    message.warning(`#${word} removed!`);
  };

  return (
    <StyledHashtag selected={word.selected}>
      <span onClick={() => updateWord(word.term)}>#{word.term}</span>
      <CloseOutlined onClick={() => deleteWord(word.term)} />
    </StyledHashtag>
  );
};

export default Hashtag;
