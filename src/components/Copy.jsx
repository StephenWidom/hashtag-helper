import React, { useContext } from "react";
import { useCopyToClipboard } from "react-use";
import { Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

import HashtagsContext from "../contexts/HashtagsContext";

const Copy = () => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [wordList] = useContext(HashtagsContext);

  const copyHashtags = () => {
    let textString = "";
    wordList.forEach((w) => {
      if (w.selected) textString += `#${w.term} `;
    });
    copyToClipboard(textString.trim());
    message.success("Successfully copied!");
  };

  return (
    <Button
      type="primary"
      onClick={copyHashtags}
      disabled={!wordList.filter((w) => w.selected).length}
      icon={<CopyOutlined />}
      size="large"
    ></Button>
  );
};

export default Copy;
