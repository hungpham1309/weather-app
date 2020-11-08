import { useAddRecentViewed } from "pages/HomePage/components/RecentViewed/hooks";
import React from "react";
import { useSearchLocation } from "./hooks";
import SearchBar from "./SearchBar";

interface Props {}

const SearchBarContainer: React.FC<Props> = (props) => {
  const { data, loading, dispatchSearchLocation } = useSearchLocation();

  const addRecentViewed = useAddRecentViewed();

  return (
    <SearchBar
      data={data}
      loading={loading}
      onSearch={dispatchSearchLocation}
      onAddRecentViewed={addRecentViewed}
    />
  );
};

export default SearchBarContainer;
