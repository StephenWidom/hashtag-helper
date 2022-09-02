import React, { useContext } from "react";
import HashtagsContext from "../contexts/HashtagsContext";
import { Button, Popconfirm } from "antd";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";

const StyledDeleteAll = styled.div`
  margin-left: auto;
`;

const DeleteAll = () => {
  const [wordList, setWordList] = useContext(HashtagsContext);

  const deleteAllWords = () => {
    setWordList([]);
  };

  return (
    <StyledDeleteAll>
      <Popconfirm
        title="Are you sure you want to delete all terms?"
        onConfirm={deleteAllWords}
      >
        <Button
          type="primary"
          danger
          disabled={!wordList.length}
          icon={<DeleteOutlined />}
          size="large"
        />
      </Popconfirm>
    </StyledDeleteAll>
  );
};

export default DeleteAll;
