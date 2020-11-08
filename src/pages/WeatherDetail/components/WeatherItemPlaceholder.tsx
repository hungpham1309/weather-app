import { Card, Skeleton } from "antd";
import Box from "components/base/Box";
import React from "react";
import styled from "themes/styled";

interface Props {}

const WeatherItemPlaceholder: React.FC<Props> = (props) => {
  return (
    <>
      <StyledCard bordered={false} size={"small"}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Skeleton.Input style={{ width: 100 }} size="small" active />
            <Box width={24} />
            <Skeleton.Input style={{ width: 60 }} size="small" active/>
            <Box width={24} />
            <Skeleton.Input style={{ width: 60 }} size="small" active/>
          </Box>
          <Skeleton.Input style={{ width: 120 }} size="small" active/>
        </Box>
      </StyledCard>
    </>
  );
};

const StyledCard = styled(Card)`
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  .ant-card-body {
    width: 100%;
  }
`;

export default React.memo(WeatherItemPlaceholder);
