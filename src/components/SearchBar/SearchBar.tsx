import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { debounce, find } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { ISearchLocation } from "../../services/typings/location";
import styled from "../../themes/styled";

interface Props {
  data: ISearchLocation[];
  loading?: boolean;
  onSearch: (query: string) => void;
  onAddRecentViewed: (data: ISearchLocation) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const { data, loading, onSearch, onAddRecentViewed } = props;
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onSearch(searchText);
  }, [searchText, onSearch]);

  const handleSearchTextChange = useMemo(() => debounce(setSearchText, 500), [
    setSearchText,
  ]);

  const { push } = useHistory();

  const handleResultClick = useCallback(
    (id: any, option: any) => {
      const record = find(data, ({ woeid }) => id === woeid);
      record && onAddRecentViewed(record);
      push(`/weather/${id}`);
    },
    [push, onAddRecentViewed, data]
  );

  return (
    <SearchInput
      showSearch
      placeholder="Search City"
      suffixIcon={loading ? <LoadingOutlined /> : <SearchOutlined />}
      style={{ width: 300 }}
      onSearch={handleSearchTextChange}
      notFoundContent={null}
      value={null as any}
      onSelect={handleResultClick}
      bordered={false}
      listHeight={400}
      filterOption={false}
      loading={loading}
      data-testid="search-bar"
    >
      {data.map(({ woeid, title }) => {
        return (
          <Select.Option value={woeid} key={woeid} data-testid="search-item">
            {title}
          </Select.Option>
        );
      })}
    </SearchInput>
  );
};

const SearchInput = styled(Select)`
  .ant-select-selector {
    border: none !important;
    background-color: ${(props) => props.theme.colors?.base} !important;
  }
`;

export default React.memo(SearchBar);
