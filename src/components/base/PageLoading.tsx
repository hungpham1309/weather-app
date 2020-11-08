import React, { CSSProperties } from "react";
import { Spin, Row } from "antd";

interface IProps {
  loading?: boolean;
  style?: CSSProperties;
}

const PageLoading = (props: IProps) => {
  const { loading = false, ...rest } = props;
  if (!loading) return null;
  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", width: "100vw" }}
      {...rest}
    >
      <Spin />
    </Row>
  );
};

export default PageLoading;
