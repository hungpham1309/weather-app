import React, { Suspense } from "react";
import { Layout, Spin } from "antd";
import { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import { renderRoutes } from "../utils/route";
import styled from "../themes/styled";
import Box from "components/base/Box";
import { IRouteConfig } from "../services/typings/route";

interface IProps {
  route: IRouteConfig;
}

const MainLayout = (props: IProps) => {
  const { route } = props;
  return (
    <Container>
      <Navbar />
      <Box mx={[1, 7, 8, 9]} backgroundColor="base">
        <Suspense fallback={<Spin spinning><Box width={1} height={500}/></Spin>}>
          <Main>{renderRoutes(route?.routes)}</Main>
        </Suspense>
      </Box>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled(Layout)`
  animation: ${fadeIn} 0.1s linear;
  transition: visibility 0.1s linear;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.base};
`;

const Main = styled(Layout)`
  height: 100%;
  background-color: ${(props) => props.theme.colors.base};
`;

export default MainLayout;
