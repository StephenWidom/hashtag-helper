import React, { useContext } from "react";
import { Button, message } from "antd";
import HashtagsContext from "../contexts/HashtagsContext";
import { CheckOutlined } from "@ant-design/icons";

const SelectAll = () => {
  const [wordList, setWordList] = useContext(HashtagsContext);

  const selectAllWords = () => {
    const shouldBeSelected = !areAllSelected();
    setWordList(
      wordList.map((w) => ({ term: w.term, selected: shouldBeSelected }))
    );
    if (shouldBeSelected) message.info(`${wordList.length} selected`);
  };

  const areAllSelected = () => {
    return wordList.filter((w) => w.selected).length === wordList.length;
  };

  return (
    <Button
      onClick={selectAllWords}
      type="ghost"
      disabled={!wordList.length}
      icon={<CheckOutlined />}
      size="large"
    ></Button>
  );
};

export default SelectAll;
