import { Button, Skeleton } from "antd";
import React from "react";
import { useHistory } from "react-router";
import Box from "./base/Box";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "themes/styled";
import { Helmet } from "react-helmet";
interface Props {
  title?: React.ReactNode;
  backVisible?: boolean;
  loading?: boolean;
}

const PageHeaderWrapper: React.FC<Props> = (props) => {
  const { title, backVisible, children, loading } = props;
  const { goBack } = useHistory();
  return (
    <>
      <Helmet>{typeof title === "string" && <title>{title}</title>}</Helmet>
      <Box>
        <Box display="flex" my={2} alignItems="center">
          {backVisible && (
            <Button
              onClick={goBack}
              type="default"
              shape="circle"
              icon={<ArrowLeftOutlined />}
              style={{ border: "none" }}
            />
          )}
          <Box ml={backVisible ? 2 : 0}>
            {loading ? (
              <Skeleton.Input style={{ width: 120 }} size="small" active />
            ) : typeof title === "string" ? (
              <Title>{title}</Title>
            ) : (
              title
            )}
          </Box>
        </Box>
        {children}
      </Box>
    </>
  );
};

const Title = styled.h3`
  margin-bottom: 0px;
`;


export default PageHeaderWrapper;
