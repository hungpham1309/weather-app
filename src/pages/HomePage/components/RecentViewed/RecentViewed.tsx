import { SmileOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Result, Tag } from "antd";
import Box from "components/base/Box";
import React from "react";
import { Link } from "react-router-dom";
import { ISearchLocation } from "services/typings/location";
import { useTheme } from "themes/useTheme";

interface Props {
  data: ISearchLocation[];
  onClear: (id?: number) => void;
}

const RecentViewed: React.FC<Props> = (props) => {
  const { data, onClear } = props;
  const { themeVariables } = useTheme();

  if (!data?.length)
    return (
      <Result
        icon={<SmileOutlined />}
        title="Please search City to view Weather!"
      />
    );

  return (
    <Box>
      <Box
        display={"flex"}
        my={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <h3 style={{ margin: 0 }}>Recent Viewed</h3>
        <Popconfirm
          title="Are you want to clear recent viewed"
          onConfirm={() => onClear()}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link">Clear</Button>
        </Popconfirm>
      </Box>
      <Box display={"flex"} flexWrap="wrap">
        {data?.map((location) => (
          <Link to={`/weather/${location.woeid}`} key={location.woeid}>
            <Tag
              closable
              onClose={() => onClear(location.woeid)}
              color={themeVariables.colors.primary}
              style={{ marginBottom: 8 }}
            >
              {location.title}
            </Tag>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(RecentViewed);
