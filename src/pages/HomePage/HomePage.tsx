import React from "react";
import Box from "../../components/base/Box";
import RecentViewed from "./components/RecentViewed";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  return (
    <Box>
      <RecentViewed />
    </Box>
  );
};

export default HomePage;
