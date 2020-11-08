import React from "react";
import { useClearRecentViewed, useRecentViewed } from "./hooks";
import RecentViewed from "./RecentViewed";

interface Props {}

const RecentViewedContainer: React.FC<Props> = (props) => {
  const data = useRecentViewed();
  const clearRecentViewed = useClearRecentViewed();
  return <RecentViewed data={data} onClear={clearRecentViewed} />;
};

export default RecentViewedContainer;
