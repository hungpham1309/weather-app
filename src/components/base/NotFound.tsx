import React from "react";
import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";

interface IProps {}

const NotFound = (props: IProps) => {
  const { goBack, push } = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={[
        <Button
          icon={<ArrowLeftOutlined />}
          type="default"
          onClick={goBack}
          key="back"
        >
          Back
        </Button>,
        <Button
          icon={<HomeOutlined />}
          type="default"
          onClick={() => {
            push("/");
          }}
          key="home"
        >
          Home
        </Button>,
      ]}
    />
  );
};

export default NotFound;
