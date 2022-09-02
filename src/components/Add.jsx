import React, { useState, useRef, useContext } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import HashtagsContext from "../contexts/HashtagsContext";
import orderBy from "lodash/orderBy";
import { PlusOutlined } from "@ant-design/icons";

const Add = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [wordList, setWordList] = useContext(HashtagsContext);
  const formRef = useRef();

  const addTerm = ({ term }) => {
    if (wordList.some((w) => w.term === term)) {
      message.error(`#${term} already there!`);
    } else {
      setWordList(orderBy([...wordList, { term, selected: true }], ["term"]));
      message.success(`#${term} added!`);
    }
    setIsModalVisible(false);
    formRef?.current.resetFields();
  };

  return (
    <>
      <Button
        type="secondary"
        onClick={() => setIsModalVisible(true)}
        icon={<PlusOutlined />}
        size="large"
      />
      <Modal
        title="Add a term"
        footer={[
          <Button onClick={() => setIsModalVisible(false)}>Cancel</Button>,
          <Button
            type="primary"
            form="addHashtag"
            key="submit"
            htmlType="submit"
          >
            Add
          </Button>,
        ]}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form name="addHashtag" onFinish={addTerm} ref={formRef}>
          <Form.Item label="Hashtag" name="term" rules={[{ required: true }]}>
            <Input
              addonBefore="#"
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Add;
