import React from "react";
import { Layout } from "antd";
import styled from "../themes/styled";
import SearchBar from "./SearchBar";
import Box from "./base/Box";

const { Header } = Layout;

interface IProps {}

const Navbar = (props: IProps) => {
  return (
    <StyledHeader>
      <Box mx={[1, 8, 9]}>
        <SearchBar />
      </Box>
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  padding: 0px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.background};
`;

export default Navbar;
